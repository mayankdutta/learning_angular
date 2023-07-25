import { Component, OnInit, Input, Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  title: string = 'List of posts.';
  childMessage: string = 'Message coming from the post parent.'
  outputChildMessage: string = 'new message using outputChildMessage'

  @Input() fromParent: string;
  @Output() messageEvent = new EventEmitter<string>();


  constructor() {
    this.fromParent = 'NULL';
  }

  ngOnInit(): void {
  }

  sendMessage() {
    this.messageEvent.emit(this.outputChildMessage)
  }
}
