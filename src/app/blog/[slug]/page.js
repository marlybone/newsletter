
import React from "react";
import client from "../../../../sanity/sanity.client"
import { groq } from "next-sanity";
// import { profile } from "@sanity/sanity.query"
import { useParams } from 'next/navigation'


// const post = profile.find(slug => )

const Post = async ({params}) => {
  

  const query = await client.fetch(`
  *[_type == "post" && slug.current == "${params.slug}"] {
    _id,
    title,
    publishedAt,
    "body": body[].children[].text,
    "mainImage": mainImage.asset->url,
    "author": *[_type == 'author'][0].name,
    "authorImg": *[_type == 'author'][0].image.asset->url
  }
`);
  
  if (!Post) {
    return <div>Loading...</div>;

  }
  console.log(query)
  return (
    <section className="flex justify-center py-20">
      {query && query.map((post) => (
        <div className="min-h-screen max-w-4xl flex justify-center mt-16">
          <img className="h-1/2 min-w-full flex rounded-md" src={post.mainImage} />
        </div> 
      ))}
    </section>
  );
}

export default Post