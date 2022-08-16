import { Component } from '@angular/core';
import {
  CdkDrag,
  CdkDragDrop,
  CdkDropList,
  moveItemInArray,
  transferArrayItem,
  copyArrayItem,
} from '@angular/cdk/drag-drop';
import { jsPlumb } from 'jsplumb';
import { GroupBlock, Block } from './editor.interfaces';
import { StructuredBlocks } from './group-structured-blocks';

@Component({
  selector: 'editorv2',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css'],
})
export class Editorv2Component extends StructuredBlocks {

  jsPlumbInstance: any;
  deg: number = 3;
  endpoints: any[] = [];
  sidePanel: boolean = false;

  groupBlocks: GroupBlock[] = [
    {
      id: this.uuid(),
      name: 'Start',
      position: {
        x: 420,
        y: 120,
      },
      draggable: true,
      blocks: [
        {
          id: this.uuid(),
          type: 'start'
        },
      ],
    },
  ];

  ngAfterViewInit() {
    this.jsPlumbInstance = jsPlumb.getInstance({
      Container: 'block-container',
      Connector: [
        'Flowchart',
        { stub: [212, 67], cornerRadius: 5, alwaysRespectStubs: true },
      ],
      PaintStyle: {
        strokeWidth: 2,
        stroke: '#9CA3AF',
      },
      DragOptions: { cursor: 'crosshair' },
      Endpoints: [
        ['Dot', { radius: 4, cssClass: 'connectingConnectorLabel' }],
        ['Dot', { radius: 11, cssClass: 'connectingConnectorLabel' }],
      ],
      ConnectionOverlays: [
        ['Arrow', { width: 15, length: 15, location: 1, id: 'arrow' }],
        [
          'Label',
          {
            location: 0.5,
            cssClass: 'connectingConnectorLabel',
          },
        ],
      ],
    });

    this.registerEndpoints();
  }

  sidePanelClick() {
    console.log('Side Panel Click', this.sidePanel);
    this.sidePanel = !this.sidePanel;
  }

  drop(event: CdkDragDrop<Block[]>, container: string) {
    console.log('event', event);
    console.log('container', container);
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else if (
      event.previousContainer.id === 'fixed-list' &&
      event.container.id === 'receiving-list'
    ) {
      copyArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else if (event.previousContainer.id === 'fixed-list') {
      this.addNewContainer(
        event.previousContainer.data[event.previousIndex],
        event
      );
    } else if (container === 'container') {
      this.addNewContainer(
        event.previousContainer.data[event.previousIndex],
        event
      );
      event.previousContainer.data.splice(event.previousIndex, 1);
      this.removeEmptyGroupBlocks(event);
    } else {
      console.log('event.container.data', event.container.data);
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );

      this.removeEmptyGroupBlocks(event);
    }
  }

  addNewContainer(newGroup: any, event: any) {
    this.groupBlocks.push({
      id: this.uuid(),
      name: `Group # ${this.groupBlocks.length + 1}`,
      position: {
        x: event.dropPoint.x,
        y: event.dropPoint.y,
      },
      draggable: true,
      blocks: [newGroup],
    });

    setTimeout(() => {
      this.registerEndpoints();
    }, 100);
  }

  removeEmptyGroupBlocks(event: any) {
    if (event.previousContainer.data.length == 0) {
      let endpointId: any;
      this.groupBlocks = this.groupBlocks.filter(
        (gb) => {
          if (gb.blocks.length === 0) {
            endpointId = gb.id;
          }
          return gb.blocks.length > 0
        }
      );

      if (endpointId) {
        this.endpoints
          .filter((e) => e.identifier == endpointId)
          .forEach((endpoint) => {
            console.log({ endpoint });
            this.jsPlumbInstance.deleteEndpoint(endpoint.instance);
          });
      }
    }
  }

  /** Predicate function that doesn't allow items to be dropped into a list. */
  noReturnPredicate() {
    return false;
  }

  canDrop(item: CdkDrag, list: CdkDropList) {
    // console.log(list.getSortedItems().length)
    // return list && list.getSortedItems().length && list.getSortedItems().length > 0;
  }

  dropListEnterPredicate(b: any) {
    return function (drag: CdkDrag, drop: CdkDropList) {
      return b.name !== 'Start';
    };
  }

  // Emits when the user starts dragging the item.
  cdkDragStarted(event: any) {
    event.source._dragRef._initialTransform = `rotate(${this.deg}deg)`;
  }

  registerEndpoints() {
    this.groupBlocks.map((gb) => {
      let index = this.endpoints.findIndex((e) => e.identifier == gb.id);
      if (index === -1) {

        this.endpoints.push({
          identifier: gb.id.toString(),
          instance: this.jsPlumbInstance.addEndpoint(
            gb.id.toString(),
            {
              anchor: [0, 0, 0, 0, 0, 30, 'outline'],
              maxConnections: 99999,
              Class: 'fooColor',
            },
            { isTarget: true }
            // { cssClass: "fooColor" },
          ),
        });

        this.endpoints.push({
          identifier: gb.id.toString(),
          instance: this.jsPlumbInstance.addEndpoint(
            gb.id.toString(),
            {
              anchor: [1, 1, 1, 0, 0, -45, 'outline'],
              connectorOverlays: [
                [
                  'Arrow',
                  {
                    width: 30,
                    length: 30,
                    location: 1,
                    id: 'arrow',
                  },
                ],
              ],
              maxConnections: 99999,
              Class: 'fooColor',
              ports: {
                default: {
                  paintStyle: { fill: '#f76258' }, // the endpoint's appearance
                  hoverPaintStyle: { fill: '#434343' }, // appearance when mouse hovering on endpoint or connection
                  edgeType: 'common', // the type of edge for connections from this port type
                  maxConnections: -1, // no limit on connections
                  dropOptions: {
                    //drop options for the port. here we attach a css class.
                    hoverClass: 'drop-hover',
                  },
                  events: {
                    dblclick: (p: any) => {
                      console.log(p);
                    },
                  },
                },
              },
            },
            { isSource: true }
          ),
        });

        this.jsPlumbInstance.draggable(gb.id.toString());
      }
    });

    this.jsPlumbInstance.bind(
      'endpointClick',
      function (endpoint: any, originalEvent: any) {
        console.log("endpointClick", endpoint, originalEvent);
      }
    );

    this.jsPlumbInstance.bind(
      'mouseup',
      function (endpoint: any, originalEvent: any) {
        console.log("mouseup", endpoint, originalEvent);
      }
    );

    // this.jsPlumbInstance.connect({
    //   connector: [
    //     'Flowchart',
    //     { stub: [212, 67], cornerRadius: 1, alwaysRespectStubs: true },
    //   ],
    //   source: 'Source',
    //   target: 'Target1',
    //   anchor: ['Right', 'Left'],
    //   paintStyle: { stroke: '#456', strokeWidth: 4, cssClass: 'outline' },
    //   overlays: [['svg', { location: 0.5, cssClass: 'fooColor' }]],
    // });
  }
}
