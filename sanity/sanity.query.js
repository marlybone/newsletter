import { groq } from "next-sanity";
import client from "./sanity.client";

export const profile = await client.fetch(
    groq`*[_type == "post" && publishedAt < now()] | order(publishedAt desc) [0...3] {
      _id,
      title,
      smallDescription,
      "slug": slug.current,
      "mainImage": mainImage.asset->url,
      "author": author-> {
        name,
        bio,
        "slug": slug.current,
        "image": image.asset->url
      },
      "authorImg": *[_type == 'author'][0].image.asset->url,
      publishedAt,
      body -> {
        text
      },
      categories[]-> {title}
    }`)

    export const spotLight = client.fetch(
      groq`*[_type == "post" && publishedAt < now()] | order(publishedAt desc) {
        _id,
        title,
        smallDescription,
        "slug": slug.current,
        "mainImage": mainImage.asset->url,
        "author": *[_type == 'author'][0].name,
        "authorImg": *[_type == 'author'][0].image.asset->url,
        publishedAt,
        body -> {
          text
        },
        categories[]-> {title}
      }`)

      export const AllPostsQuery = await client.fetch(
          groq`*[_type == "post"] {
            _id,
            title,
            smallDescription,
            "slug": slug.current,
            "mainImage": mainImage.asset->url,
            "author": *[_type == 'author'][0].name,
            "authorImg": *[_type == 'author'][0].image.asset->url,
            publishedAt,
            body -> {
              text
            },
            categories[]-> {title}
          }`
        );
  
        export const allPostsQuery = await client.fetch( groq`*[_type == "post"] {
          _id,
          title,
          smallDescription,
          "slug": slug.current,
          "mainImage": mainImage.asset->url,
          "author": *[_type == 'author'][0].name,
          "authorImg": *[_type == 'author'][0].image.asset->url,
          publishedAt,
          body -> {
            text
          },
          categories[]-> {title}
        }`
        )