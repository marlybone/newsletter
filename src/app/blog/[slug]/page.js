"use client"
import React from "react";
import client from "../../../../sanity/sanity.client"
import { groq } from "next-sanity";


export async function getStaticPaths({params}) {
  const { slug } = params;

  const query = `*[_type == "post" && slug.current == "${slug}"] {
    _id,
    title,
    smallDescription,
    "slug": slug.current,
    "mainImage": mainImage.asset->url,
    "author": *[_type == 'author'][0].name,
    "authorImg": *[_type == 'author'][0].image.asset->url,
    publishedAt,
    "body": *[_type == "post" && slug.current == "${slug}"][0].body[].children[0].text
  }`;

  const post = client.fetch(query);

  return{
    props:{
      post,
    },
  }
  
}

const Post = ({ post }) => {
  if (!Post) {
    return <div>Loading...</div>;

  }
  console.log(post)
  return (
    <div>
      <div>Hi</div>
      <h1></h1>
      {/* Render other post content using Post data */}
    </div>
  );
}

const query = groq`*[_type == "post" && slug.current == $slug][0]{
  _id,
  title,
  smallDescription,
  "slug": slug.current,
  "mainImage": mainImage.asset->url,
  "author": *[_type == 'author'][0].name,
  "authorImg": *[_type == 'author'][0].image.asset->url,
  publishedAt,
}`

export default Post