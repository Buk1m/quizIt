import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'add-definition',
  templateUrl: './add-definition.component.html',
  styleUrls: ['./add-definition.component.css']
})
export class AddDefinitionComponent implements OnInit {
  selectedImage: File;
  displayImage
  constructor() { }

  ngOnInit() {
  }

  onSelectedFile(event: any) {
    this.selectedImage = event.target.files[0];
    var reader = new FileReader();
    reader.readAsDataURL(this.selectedImage);
    reader.onload = (event) => this.displayImage = event.target.result;
  }
}
