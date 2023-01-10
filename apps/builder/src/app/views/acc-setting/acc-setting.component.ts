import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { emojis } from '../header/emoji';

@Component({
  selector: 'acc-setting',
  templateUrl: './acc-setting.component.html',
  styleUrls: ['./acc-setting.component.css'],
})
export class Accsetting implements OnInit {
  emojiArray: any = emojis;
  searchedEmoji: any = [];
  changeEmojiView: boolean = true;
  constructor(private router: Router) {
    // ...
  }

  ngOnInit(): void {}

  navigate(links: any[]) {
    this.router.navigate(links);
  }


  toggleEmoji() {
    let a = document.querySelector('.emoji-main') as HTMLInputElement;
    if (a.classList.contains('hidden')) {
      a.classList.remove('hidden');
    } else {
      a.classList.add('hidden');
    }
    window.addEventListener('click', (e) => {
      const target = e.target as HTMLElement;
      if (!target.classList.contains('changeable-icon')) {
        a.classList.add('hidden');
      }
    });
  }

  replaceEmoji(e: any) {
    let changedEmoji = document.querySelector(
      '#changed-emoji'
    ) as HTMLInputElement;
    let defaultEmoji = document.querySelector(
      '#emoji-default'
    ) as HTMLInputElement;
    defaultEmoji?.classList.add('hidden');
    if (changedEmoji?.classList.contains('hidden')) {
      changedEmoji?.classList.remove('hidden');
    }
    changedEmoji.innerHTML = e.target.innerText;
  }

  getEmojiResult(val: any) {
    if (val.target.value !== '') {
      this.changeEmojiView = false;
      this.emojiArray.filter((ele: any) => {
        ele.tags.forEach((tags: any) => {
          if (val.target.value === tags) {
            this.searchedEmoji.push(ele);
          }
        });
      });
    } else {
      this.searchedEmoji = [];
      this.changeEmojiView = true;
    }
  }
}
