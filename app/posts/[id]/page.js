import { posts } from "../../data/posts";
import styles from "../[id]/Post.module.css";
import Layout from "../../navigation";

export default async function PostPage({ params }) {
  const { id } = await params;
  const post = posts.find((post) => post.id === Number(id));

  if (!post) {
    return <h1>Post not found</h1>;
  }
  return (
    <Layout>
      <div className={styles.container}>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.content}>{post.content}</p>
        <p>Your api key is: {process.env.NEXT_PUBLIC_API_KEY}</p>
      </div>
    </Layout>
  );
}
