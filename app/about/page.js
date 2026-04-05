import Link from "next/link";
import Layout from "../navigation";

export default function About() {
    return (
        <Layout>
            <h1>About Page</h1>
            <Link href='/'>Go back to home page</Link>
        </Layout>
    );
}