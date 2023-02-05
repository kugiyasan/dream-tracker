import { Component} from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.scss']
})
export class ProjectPageComponent {

  title = "getTheTitle"
  text = "getTheText"

  getValueInput(title: string, text: string){
    this.title = title;
    this.text = text;
  }
    newEntry(){

    }

}