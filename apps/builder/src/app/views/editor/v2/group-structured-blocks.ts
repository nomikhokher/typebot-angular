import { GroupStructuredBlock } from "./editor.interfaces";

export class StructuredBlocks {
  structuredBlocks: GroupStructuredBlock[] = [
    {
      id: this.uuid(),
      name: 'bubbles',
      blocks: [
        {
          id: this.uuid(),
          content: {html: "<div></div>", plainText:""},
          type: 'text',
        },
        {
          id: this.uuid(),
          content: {},
          type: 'image',
        },
        {
          id: this.uuid(),
          content: {},
          type: 'video'
        },
        {
          id: this.uuid(),
          content: {height: 400},
          type: 'embed'
        }
      ],
    },
    {
      id: this.uuid(),
      name: 'inputs',
      blocks: [
        {
          id: this.uuid(),
          options: {
            isLong: false,
            labels: {button: "Send", placeholder: "Type your answer..."}
          },
          type: 'text_input',
        },
        {
          id: this.uuid(),
          options: {
            labels: {button: "Send", placeholder: "Type a number..."}
          },
          type: 'number_input',
        },
        {
          id: this.uuid(),
          options: {
            labels: {button: "Send", placeholder: "Type your email..."},
            retryMessageContent: "This email doesn't seem to be valid. Can you type it again?"
          },
          type: 'email_input',
        },
        {
          id: this.uuid(),
          options: {
            labels: {button: "Send", placeholder: "Type a URL..."},
            retryMessageContent: "This URL doesn't seem to be valid. Can you type it again?"
          },
          type: 'url_input',
        },
        {
          id: this.uuid(),
          options: {
            labels: {to: "To:", from: "From:", button: "Send"},
            hasTime: false,
            isRange: false
          },
          type: 'date_input',
        },
        {
          id: this.uuid(),
          options: {
            labels: {button: "Send", placeholder: "Type your phone number..."},
            retryMessageContent: "This phone numbe doesn't seem to be valid. Can you type it again?"
          },
          type: 'phone_number_input',
        },
        {
          id: this.uuid(),
          items: [
            {
              id: this.uuid(),
              content: "Click to edit",
              type: 0
            }
          ],
          options: {
            buttonLabel: "Send",
            isMultipleChoice: false
          },
          type: 'choice_input',
        },
        {
          id: this.uuid(),
          options: {
            currency: "USD",
            labels: {button: "Pay", success: "Success"},
            providers: "stripe"
          },
          type: 'payment_input',
        },
        {
          id: this.uuid(),
          options: {
            buttonTypes: "Numbers",
            customIcon: {
              isEnabled: false
            },
            labels: {
              button: "Send"
            },
            length: 10
          },
          type: 'rating_input',
        },
        {
          id: this.uuid(),
          options: {
            labels: {
              button: "Upload",
              placeholder: "<strong>Click to upload</strong> or drag and drop<br> (size limit: 10MB)"
            },
            isMultipleAllowed: false,
            isRequired: true,
          },
          type: 'file_input',
        }
      ],
    },
    {
      id: this.uuid(),
      name: 'logic',
      blocks: [
        {
          id: this.uuid(),
          options: {},
          type: 'set_variable'
        },
        {
          id: this.uuid(),
          items: [
            {
              id: this.uuid(),
              content: {comparisons: [], logicalOperator: "AND"},
              type: 1
            }
          ],
          type: 'condition'
        },
        {
          id: this.uuid(),
          options: {
            isNewTab: false
          },
          type: 'redirect'
        },
        {
          id: this.uuid(),
          options: {
            name: "Code snippet",
          },
          type: 'code'
        },
        {
          id: this.uuid(),
          options: {},
          type: 'typebot_link'
        }
      ],
    },
    {
      id: this.uuid(),
      name: 'integerations',
      blocks: [
        {
          id: this.uuid(),
          options: {},
          type: 'webhook'
        },
        {
          id: this.uuid(),
          options: {},
          type: 'email'
        },
      ],
    },
  ];

  prefilledData : any = {
    start: {
      label: 'Start',
      svg: 'assets/svgs/text.svg'
    },
    text: {
      label: 'Text',
      svg: 'assets/svgs/text.svg'
    },
    image: {
      label: 'Image',
      svg: 'assets/svgs/image.svg'
    },
    video: {
      label: 'Video',
      svg: 'assets/svgs/video.svg'
    },
    embed: {
      label: 'Embed',
      svg: 'assets/svgs/embed.svg'
    },
    text_input: {
      label: 'Text',
      svg: 'assets/svgs/input-text.svg'
    },
    number_input: {
      label: 'Number',
      svg: 'assets/svgs/input-number.svg'
    },
    email_input: {
      label: 'Email',
      svg: 'assets/svgs/input-email.svg'
    },
    url_input: {
      label: 'Website',
      svg: 'assets/svgs/input-website.svg'
    },
    date_input: {
      label: 'Date',
      svg: 'assets/svgs/input-date.svg'
    },
    phone_number_input: {
      label: 'Phone',
      svg: 'assets/svgs/input-phone.svg'
    },
    choice_input: {
      label: 'Button',
      svg: 'assets/svgs/input-button.svg'
    },
    payment_input: {
      label: 'Payment',
      svg: 'assets/svgs/input-payment.svg'
    },
    rating_input: {
      label: 'Rating',
      svg: 'assets/svgs/input-payment.svg'
    },
    file_input: {
      label: 'File',
      svg: 'assets/svgs/input-payment.svg'
    },
    set_variable: {
      label: 'Set Variable',
      svg: 'assets/svgs/logic-variable.svg'
    },
    condition: {
      label: 'Condition',
      svg: 'assets/svgs/logic-condition.svg'
    },
    redirect: {
      label: 'Redirect',
      svg: 'assets/svgs/logic-redirect.svg'
    },
    code: {
      label: 'Code',
      svg: 'assets/svgs/logic-code.svg'
    },
    typebot_link: {
      label: 'Typeot',
      svg: 'assets/svgs/logic-typebot.svg'
    },
    webhook: {
      label: 'Webhooks',
      svg: 'assets/svgs/integeration-webhook.svg'
    },
    email: {
      label: 'Email',
      svg: 'assets/svgs/integeration-email.svg'
    },
  }

  public uuid() {
    var d = new Date().getTime(); //Timestamp
    var d2 =
      (typeof performance !== 'undefined' &&
        performance.now &&
        performance.now() * 1000) ||
      0; //Time in microseconds since page-load or 0 if unsupported
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
      /[xy]/g,
      function (c) {
        var r = Math.random() * 16; //random number between 0 and 16
        if (d > 0) {
          //Use timestamp until depleted
          r = (d + r) % 16 | 0;
          d = Math.floor(d / 16);
        } else {
          //Use microseconds since page-load if supported
          r = (d2 + r) % 16 | 0;
          d2 = Math.floor(d2 / 16);
        }
        return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
      }
    );
  }
}
