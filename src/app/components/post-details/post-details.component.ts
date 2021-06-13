import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import { Post } from 'src/app/interface/Post';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  fullPost!: Post;

  constructor(private router : Router, private activatedRoute : ActivatedRoute) {
this.activatedRoute.params.subscribe(params => {
  this.fullPost = this.router.getCurrentNavigation()?.extras.state as Post
})
  }
  ngOnInit(): void {}

}
