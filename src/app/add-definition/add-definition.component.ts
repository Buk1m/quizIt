import {Component, OnInit, ViewChild, ElementRef, AfterViewInit, ViewEncapsulation} from '@angular/core';
import {AddDefinitionService} from '../add-definition.service';


interface Word {
  boundingBox: number[];
  text: string;
  isSelected: boolean;
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
  selectedImage: File;
  isBtnPressed = false;
  allWords: Word[] = [];
  selectedWords: Set<Word> = new Set<Word>();
  imageUrl: string;

  possibleImageTypes = [
    'image/png',
    'image/jpeg'
  ];
  constructor(private addDefinitionService: AddDefinitionService) {

  }

  ngOnInit() {
  }

  // onSelectedFile(event: any) {
  //   const selectedImage = <File>event.target.files[0];
  //   let reader = new FileReader();
  //   reader.readAsDataURL(selectedImage);
  //   reader.onload = (event) => this.displayImage = event.target.result;
  // }

  mouseEnter(word: any) {
    if (this.isBtnPressed) {
      this.selectedWords.add(word);
      word.isSelected = true;
    }
    console.log(this.selectedWords);
  }

  onFileSelected(event: any) {
    this.selectedImage = <File>event.target.files[0];
    console.log(this.selectedImage.type);
    console.log('image/jpeg' === this.selectedImage.type);
    if (this.possibleImageTypes.includes(this.selectedImage.type)) {
      this.displayImage();
      console.log("anal");
    } else {
      this.selectedImage = null;
    }
  }

  recognizeText() {
    this.addDefinitionService.postImage(this.selectedImage).subscribe((res) => {
      this.extractRecognizedWords(res.recognitionResult);
    });
  }

  extractRecognizedWords(recognitionResult: RecognitionResult) {
    for (const line of recognitionResult.lines) {
      this.allWords.push(...line.words);
    }
  }

  displayImage() {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(this.selectedImage);

    fileReader.onload = (event: any) => {
      console.log("hehehe");
      this.imageUrl = event.target.result;
    };
  }
}
