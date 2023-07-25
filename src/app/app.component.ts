import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { PostComponent } from './post/post.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  title = 'angularYoutube';
  parentMessage = 'msg comming from parent component';
  message = "";

  @ViewChild(PostComponent) childComp: any;

  constructor() {
    this.childComp = 'NULL';
  }

  ngAfterViewInit(): void {
    console.log(this.childComp);
    this.message = this.childComp.childMessage;
  }
}
