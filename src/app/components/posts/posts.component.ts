import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/interface/Post';
import {PostService} from "../../services/post.service";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts : Post[] = [];

  constructor(private postService : PostService) { }

  ngOnInit(): void {
    this.postService.grtPosts().subscribe(value => {
      this.posts = value
    })
  }

}
