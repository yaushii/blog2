import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Post } from '../models/post.model';
import { Subscription } from 'rxjs';
import { PostsService } from '../services/posts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  @Input() postContent:string;
@Input() postTitle:string;



posts: Post[];
postsSubscription: Subscription;

  constructor(private postsService: PostsService,
              private router: Router) { }

  ngOnInit() {
    this.postsSubscription = this.postsService.postsSubject.subscribe(
      (posts: Post[])=> {
        this.posts = posts;
      }
    );
    this.postsService.emitPost();
  }

  onNewPost(){
    this.router.navigate(['/posts','new']);
  }
  onDeletePost(post: Post){
    this.postsService.removePost(post);
  }

  onViewPost(id: number){
    this.router.navigate(['/posts','view',id]);
  }
  onLoveIt(i){
    this.postsService.addLove(i);
  }
  removeLoveIt(i){
    this.postsService.removeLove(i);
  }

  ngOnDestroy(){
    this.postsSubscription.unsubscribe();
  }

  
}
