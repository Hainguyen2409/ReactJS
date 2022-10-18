import Link from "next/link";
import Layout from "../../Components/layout";

export default function FirstPost() {
    return (
        <Layout>
            <head>
                <title>First Post</title>
            </head>
        <h1>First Post</h1>
        <h2>
            <Link href="/">
                <a>Back to Home</a>
            </Link>
        </h2>
        </Layout>
    )
}