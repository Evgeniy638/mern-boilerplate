import { Post } from '@/interfaces/post.interface';
import postModel from '@/models/posts.model';

class PostService {
  private posts = postModel;

  public async findAllPosts(): Promise<Post[]> {
    const posts: Post[] = await this.posts.find();
    return posts;
  }
}

export default PostService;
