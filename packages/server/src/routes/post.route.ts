import PostController from '@/controllers/post.controller';
import { Routes } from '@/interfaces/routes.interface';
import { Router } from 'express';

class PostsRoute implements Routes {
  public path = '/posts';
  public router = Router();
  private postsContoller = new PostController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.postsContoller.getAllPosts);
  }
}

export default PostsRoute;
