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
  message = '';
  fromChildOutput = '';

  flag: boolean = false;

  @ViewChild(PostComponent) childComp: any;

  constructor() {
    this.childComp = 'NULL';
  }

  ngAfterViewInit(): void {
    console.log(this.childComp);
    this.message = this.childComp.childMessage;
  }

  receiveMessage($event: any) {
    this.fromChildOutput = $event;
  }
  buttonClick() {
    console.log('button clicking is working fine');
  }

  onKeyup() {
    console.log('key up working fine');
  }
  onKeyupEnter($event: any) {
    if ($event.keyCode == 13) {
      console.log('enter key pressed');
    }
    // console.log($event);
  }
  onKeyupFilter() {
    console.log('filter: enter key pressed');
  }
  handleName(name: string) {
    console.log(`you pressed ${name}`)
  }
}
