import { Post } from '@/interfaces/post.interface';
import { model, Schema, Document } from 'mongoose';

const postSchema = new Schema({ title: String, body: String }, { versionKey: false });

const postModel = model<Document & Post>('posts', postSchema);

export default postModel;
