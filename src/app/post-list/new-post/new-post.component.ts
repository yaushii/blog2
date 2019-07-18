import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Post } from 'src/app/models/post.model';
import { PostsService } from 'src/app/services/posts.service';



@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {

  postForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private postsService: PostsService,
              private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm(){
    this.postForm = this.formBuilder.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      commentaire:['', Validators.required]
    }) 
  }
  onSavePost(){
    const title = this.postForm.get('title').value;
    const author = this.postForm.get('author').value;
    const commentaire = this.postForm.get('commentaire').value;
    const date = Date.now().toString();
    const newPost = new Post(title, author,0,date);
    newPost.commentaire = commentaire;
    this.postsService.createNewPost(newPost);
    this.router.navigate(['/posts']);
  }


}
