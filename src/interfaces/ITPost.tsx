// type for object of topic posts in TopicPosts.json
import { IPost } from ".";

export interface ITPost {
    name: string,
    path: string,
    posts: IPost[]
}