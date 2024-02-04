import { groq } from "next-sanity";
import client from "./sanity.client";

export const profile = await client.fetch(
    groq`*[_type == "post"] {
        title,
        smallDescription,
        "currentSlug": slug.current,
        "mainImage": mainImage.asset._ref,
        "author": *[_type == 'author'][0].name,
        "authorImg":*[_type == 'author'][0].image.asset._ref,
      }`
  );

// export const author = await client.fetch(
//     groq`*[_type == "author"]{
//         name,
//         bio,
//         image,
//         _id
//     }`
//   );