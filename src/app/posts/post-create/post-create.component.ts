

import { Component,EventEmitter,Output } from "@angular/core";

import {Post} from '../post.model';
import { NgForm } from "@angular/forms";
import { PostsService } from './../post.service';
@Component({
    selector:'app-post-create',
    templateUrl:'./post-create.component.html',
    styleUrls:['./post-create.component.css']
})

export class PostCreateComponent{
    enteredTitle = '';
    enteredContent = '';   
   
    //this is used for element referencing
    // onAddPost(postInput:HTMLTextAreaElement){
    //     console.log(postInput.value);
    //     this.newPost = postInput.value;
    // }

    constructor(public postsService:PostsService){

    }
    onAddPost(form:NgForm){
        if(form.invalid){
            return;
        }
       const post:Post = {
           id:null,
           title:form.value.title,
           content:form.value.content
       };
        this.postsService.addPost(post.title,post.content);
          form.resetForm();   
    }

}