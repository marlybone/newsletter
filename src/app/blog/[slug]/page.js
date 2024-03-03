
import React from "react";
import client from "../../../../sanity/sanity.client"
import BlockContent from "@sanity/block-content-to-react"

const Post = async ({params}) => {
  

  const query = await client.fetch(`
  *[_type == "post" && slug.current == "${params.slug}"] {
    _id,
    title,
    publishedAt,
    body,
    "mainImage": mainImage.asset->url,
    "author": *[_type == 'author'][0].name,
    "authorImg": *[_type == 'author'][0].image.asset->url
  }
`);
  
  if (!Post) {
    return <div>Loading...</div>;

  }
  return (
    <section className="flex py-20 justify-center mx-20">
    {query && query.map((post) => (
      <div className="max-w-screen-md mt-16 flex-col content-center mx-6">
        <img className="h-72 w-larger object-cover rounded-md" src={post.mainImage} alt={post.title} />
        <div>
          <h1 className="font-bold text-5xl mt-12 flex text-center">{post.title}</h1>
        </div>
        <div className="flex mt-12">
          <div className="flex">
            <img alt="avatar" className="w-12 rounded-full border border-transparent shadow-custom" src={post.authorImg} />
          </div>
          <div className="border border-gray-250 mx-3"></div>
          <div className="flex-col ml-3">
          <h2 className="flex">By {post.author}</h2>
          <h3 className="text-sm font-semibold">{new Date(post.publishedAt).toDateString().slice(4)}</h3>
          </div>
        </div>
        <div className="mt-10 flex justify-center container">
            <BlockContent
            className="article"
            blocks={post.body}
            projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
            dataset="production"
            
            />
        </div>
      </div>
    ))}
  </section>
  );
}

export default Post