import { Component } from "@angular/core";

@Component({
    selector:'app-post-create',
    templateUrl:'./post-create.component.html',
    styleUrls:['./post-create.component.css']
})

export class PostCreateComponent{
    newPost = 'NO Content';
    enteredValue = '';
    //this is used for element referencing
    // onAddPost(postInput:HTMLTextAreaElement){
    //     console.log(postInput.value);
    //     this.newPost = postInput.value;
    // }
    onAddPost(){
   
        this.newPost = this.enteredValue;
    }

}