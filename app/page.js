import Image from "next/image";
import Link from "next/link";
import Layout from "./navigation";

export default function Home() {
  return (
    <Layout>
      {" "}
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-3xl font-bold mb-6">Welcome to our Homepage</h1>
        <Link href="/about">Go to About Page</Link>
        <Link href="/posts/1">Go to post 1</Link>
        <Link href="/posts/2">Go to post 2</Link>
        <p>Your api key is: {process.env.NEXT_PUBLIC_API_KEY}</p>
      </div>
    </Layout>
  );
}
