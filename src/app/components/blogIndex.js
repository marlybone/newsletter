"use client"
import Link from "next/link";
import { groq } from "next-sanity";
import { createClient } from 'next-sanity';


const articles =  groq`*[_type == "post"] {
  title,
  author,
  body,
}[0...50]
`

const client = createClient({
  apiVersion: "2023-06-21",
  dataset: 'production',
  projectId: "9kwwsl95",
  useCdn: false,
  perspective: "published"
});
export async function getStaticProps() {
  const posts = await client.fetch(`*[_type == "post"]{
    title,
    author,
    slug
  }`);


  return {
    props: {
      posts
    }
  };
}

export default function BlogIndex({ posts }) {
  return (
    <main className="container mx-auto grid grid-cols-1 divide-y divide-blue-100">
      {posts?.length > 0 ? (
        posts.map((post) => (
          <Link
            key={post._id}
            href={post.slug.current}
          >
            <h2 className="p-4 hover:bg-blue-50">{post.title}</h2>
          </Link>
        ))
      ) : (
        <div className="p-4 text-red-500">No posts found</div>
      )}
      <div>{posts}</div>
    </main>
    
  );
}

