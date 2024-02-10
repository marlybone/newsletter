import { groq } from "next-sanity";
import client from "./sanity.client";

export const profile = await client.fetch(
    groq`*[_type == "post" && publishedAt < now()] | order(publishedAt desc) [0...2] {
      _id,
      title,
      smallDescription,
      "slug": slug.current,
      "mainImage": mainImage.asset->url,
      "author": *[_type == 'author'][0].name,
      "authorImg": *[_type == 'author'][0].image.asset->url,
      publishedAt,
      "body": *[_type == "post"][0].body[].children[0].text
    }`)

    export const spotLight = await client.fetch(
      groq`*[_type == "post" && publishedAt < now()] | order(publishedAt desc) {
        _id,
        title,
        smallDescription,
        "slug": slug.current,
        "mainImage": mainImage.asset->url,
        "author": *[_type == 'author'][0].name,
        "authorImg": *[_type == 'author'][0].image.asset->url,
        publishedAt,
        "body": *[_type == "post"][0].body[].children[0].text
      }`)

    
  