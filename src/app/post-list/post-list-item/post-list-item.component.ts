import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/post.model';
import { ActivatedRoute, Router } from '@angular/router';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  post: Post;

  constructor(private router: Router,
              private postsService: PostsService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.post = new Post('','',0, '');
    const id = this.route.snapshot.params['id'];
    this.postsService.getSinglePost(+id).then(
      (post: Post)=>{
        this.post = post;
      }
    );
  }

  onBack(){
    this.router.navigate(['/posts']);
  }
}
