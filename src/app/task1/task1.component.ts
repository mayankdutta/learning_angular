import { Component } from '@angular/core';

@Component({
  selector: 'app-task1',
  templateUrl: './task1.component.html',
  styleUrls: ['./task1.component.scss']
})

export class Task1Component {
  postTitle: string = ''
  imageUrl: string = ''
  postTitleBackground: boolean= false
}
