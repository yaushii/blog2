import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Post } from '../models/post.model';
import * as firebase from 'firebase';


@Injectable({
  providedIn: 'root'
})
export class PostsService {
  
  
  posts: Post[]= [];
  postsSubject = new Subject<Post[]>();

  emitPost(){
    this.postsSubject.next(this.posts);
  }

  savePost(){
    firebase.database().ref('/posts').set(this.posts);
  }

  getPosts() {
    firebase.database().ref('/posts')
      .on('value', (data) => {
          this.posts= data.val() ? data.val() : [];
          this.emitPost();
        }
      );
  }

  getSinglePost(id: number) {
    return new Promise(
      (resolve, reject) => {
        firebase.database().ref('/posts/' + id).once('value').then(
          (data) => {
            resolve(data.val());
          }, (error) => {
            reject(error);
          }
        );
      }
    );
  }
  createNewPost(newPost: Post) {
    this.posts.push(newPost);
    this.savePost();
    this.emitPost();
  }

  removePost(post: Post) {
    const postIndexToRemove = this.posts.findIndex(
      (postEl) => {
        if(postEl === post) {
          return true;
        }
      }
    );
    this.posts.splice(postIndexToRemove, 1);
    this.savePost();
    this.emitPost();
  }
  addLove(i){
    this.posts[i].postLoveIts++;
    this.savePost();
    this.emitPost();
  }
  
  removeLove(i){
    console.log(i);
    this.posts[i].postLoveIts--;
    this.savePost();
    this.emitPost();

  }

  constructor() { 
    this.getPosts();
  }
}
