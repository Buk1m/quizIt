import {Component, OnInit, ViewChild, ElementRef, AfterViewInit, ViewEncapsulation} from '@angular/core';


interface Word {
  boundingBox: number[];
  text: string;
}

interface Line {
  boundingBox: number[];
  text: string;
  words: Word[];
}

interface RecognitionResult {
  lines: Line[];
  boundingBox: number[];
}

@Component({
  selector: 'add-definition',
  templateUrl: './add-definition.component.html',
  styleUrls: ['./add-definition.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AddDefinitionComponent implements OnInit {
  displayImage;
  isBtnPressed = false;
  allWords: {
    boundingBox: number[],
    text: string,
    isSelected: false
  }[] = [];
  selectedWords: Set<Word> = new Set<Word>();

  constructor() {
    const recognitionResult = JSON.parse(mockResponse()).recognitionResult;
    for (const line of recognitionResult.lines) {
      this.allWords.push(...line.words);
    }
  }

  ngOnInit() {
  }

  onSelectedFile(event: any) {
    const selectedImage = <File>event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(selectedImage);
    reader.onload = (event) => this.displayImage = event.target.result;
  }

  mouseEnter(word: any) {
    if (this.isBtnPressed) {
      this.selectedWords.add(word);
      word.isSelected = true;
    }
    console.log(this.selectedWords);
  }
}


function mockResponse(): string {
  return `{
    "recognitionResult": {
    "lines": [
      {
        "boundingBox": [
          327,
          66,
          1173,
          65,
          1174,
          141,
          328,
          142
        ],
        "text": "Your boyfriend is in the",
        "words": [
          {
            "boundingBox": [
              328,
              68,
              498,
              67,
              500,
              143,
              330,
              140
            ],
            "text": "Your"
          },
          {
            "boundingBox": [
              507,
              67,
              856,
              67,
              858,
              142,
              509,
              143
            ],
            "text": "boyfriend"
          },
          {
            "boundingBox": [
              870,
              67,
              946,
              68,
              948,
              141,
              872,
              142
            ],
            "text": "is"
          },
          {
            "boundingBox": [
              955,
              68,
              1021,
              68,
              1023,
              139,
              957,
              141
            ],
            "text": "in"
          },
          {
            "boundingBox": [
              1040,
              68,
              1167,
              70,
              1169,
              135,
              1042,
              139
            ],
            "text": "the"
          }
        ]
      },
      {
        "boundingBox": [
          329,
          166,
          1024,
          160,
          1025,
          242,
          330,
          248
        ],
        "text": "shopping mall now",
        "words": [
          {
            "boundingBox": [
              321,
              168,
              672,
              165,
              671,
              247,
              322,
              244
            ],
            "text": "shopping"
          },
          {
            "boundingBox": [
              682,
              165,
              863,
              165,
              861,
              242,
              681,
              247
            ],
            "text": "mall"
          },
          {
            "boundingBox": [
              858,
              165,
              1004,
              166,
              1001,
              235,
              856,
              242
            ],
            "text": "now"
          }
        ]
      },
      {
        "boundingBox": [
          332,
          259,
          1055,
          261,
          1054,
          332,
          331,
          331
        ],
        "text": "with some fat chick.",
        "words": [
          {
            "boundingBox": [
              331,
              261,
              470,
              263,
              468,
              332,
              328,
              332
            ],
            "text": "with"
          },
          {
            "boundingBox": [
              503,
              263,
              703,
              264,
              702,
              333,
              501,
              333
            ],
            "text": "some"
          },
          {
            "boundingBox": [
              717,
              264,
              834,
              264,
              833,
              333,
              716,
              333
            ],
            "text": "fat"
          },
          {
            "boundingBox": [
              843,
              264,
              1071,
              261,
              1072,
              333,
              843,
              333
            ],
            "text": "chick."
          }
        ]
      },
      {
        "boundingBox": [
          324,
          356,
          1021,
          357,
          1020,
          426,
          324,
          425
        ],
        "text": "I'm following them.",
        "words": [
          {
            "boundingBox": [
              318,
              361,
              409,
              359,
              407,
              426,
              316,
              427
            ],
            "text": "I'm"
          },
          {
            "boundingBox": [
              457,
              359,
              790,
              359,
              789,
              427,
              455,
              426
            ],
            "text": "following"
          },
          {
            "boundingBox": [
              807,
              359,
              1032,
              363,
              1032,
              428,
              807,
              427
            ],
            "text": "them."
          }
        ]
      },
      {
        "boundingBox": [
          326,
          452,
          1196,
          451,
          1197,
          526,
          326,
          527
        ],
        "text": "Will keep you updated..",
        "words": [
          {
            "boundingBox": [
              327,
              453,
              472,
              460,
              472,
              524,
              327,
              518
            ],
            "text": "Will"
          },
          {
            "boundingBox": [
              472,
              460,
              652,
              464,
              651,
              528,
              472,
              524
            ],
            "text": "keep"
          },
          {
            "boundingBox": [
              682,
              465,
              810,
              465,
              809,
              529,
              681,
              528
            ],
            "text": "you"
          },
          {
            "boundingBox": [
              836,
              465,
              1203,
              452,
              1202,
              518,
              835,
              528
            ],
            "text": "updated.."
          }
        ]
      },
      {
        "boundingBox": [
          47,
          625,
          354,
          633,
          351,
          710,
          45,
          701
        ],
        "text": "Actually",
        "words": [
          {
            "boundingBox": [
              47,
              632,
              343,
              637,
              342,
              712,
              48,
              702
            ],
            "text": "Actually"
          }
        ]
      }
    ]
  }
  }`;
}


