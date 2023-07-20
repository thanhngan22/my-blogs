// type for object of topic posts in TopicPosts.json
import { IPost } from ".";

export interface ITPost {
    topic: string,
    path: string,
    posts: IPost[]
}