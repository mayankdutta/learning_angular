import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  title: string = 'List of posts.';
  childMessage: string = 'Message coming from the post parent.'

  @Input() fromParent: string;

  constructor() {
    this.fromParent = 'NULL';
  }

  ngOnInit(): void {
  }
}
