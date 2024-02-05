import { groq } from "next-sanity";
import client from "./sanity.client";

export const profile = await client.fetch(
    groq`*[_type == "post" && publishedAt < now()] | order(publishedAt desc) [0...2] {
        _id,
        title,
        smallDescription,
        "currentSlug": slug.current,
        "mainImage": mainImage.asset->url,
        "author": *[_type == 'author'][0].name,
        "authorImg": *[_type == 'author'][0].image.asset->url,
        publishedAt
      }`
  );

export const author = await client.fetch(
    groq`*[_type == "author"]{
        name,
        bio,
        image,
        _id
    }`
  );