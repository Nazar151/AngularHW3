import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Post } from '../interface/Post';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private url = "https://jsonplaceholder.typicode.com/posts"

  constructor(private httpClient : HttpClient) { }
  grtPosts() : Observable<Post[]>{
    return this.httpClient.get<Post[]>(this.url)
  }
}
