import PostService from '@/services/post.service';
import { NextFunction, Request, Response } from 'express';

class PostController {
  private postService = new PostService();

  public getAllPosts = async (req: Request, res: Response, next: NextFunction) => {
    try {
      console.log('postService', this.postService);
      const posts = await this.postService.findAllPosts();

      res.status(200).json(posts);
    } catch (error) {
      next(error);
    }
  };
}

export default PostController;
