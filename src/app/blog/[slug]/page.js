
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
    "body": body[].children[].text
  }
`);
  
  if (!Post) {
    return <div>Loading...</div>;

  }
  console.log(query)
  return (
    <div>
      <div>Hi</div>
      <h1></h1>
      {/* Render other post content using Post data */}
    </div>
  );
}

export default Post