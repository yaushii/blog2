export class Post {
    commentaire: string;
    
    constructor(public title: string, public author: string, public postLoveIts: number, public postCreatedAt: string) {
    }
  }