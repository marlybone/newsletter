import React from "react";
import client from "../../../../sanity/sanity.client";
import BlockContent from "@sanity/block-content-to-react";
import styles from "./blog.module.css"
import { usePathname } from "next/navigation";
import {
  EmailShareButton,
  FacebookShareButton,
  LineShareButton,
  LinkedinShareButton,
  PinterestShareButton,
  RedditShareButton,
  TelegramShareButton,
  TumblrShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
import {
  EmailIcon,
  FacebookIcon,
  FacebookMessengerIcon,
  GabIcon,
  HatenaIcon,
  InstapaperIcon,
  LineIcon,
  LinkedinIcon,
  LivejournalIcon,
  MailruIcon,
  OKIcon,
  PinterestIcon,
  PocketIcon,
  RedditIcon,
  TelegramIcon,
  TumblrIcon,
  TwitterIcon,
  ViberIcon,
  VKIcon,
  WeiboIcon,
  WhatsappIcon,
  WorkplaceIcon,
  XIcon,
} from "react-share";

const Post = async ({ params }) => {
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
    <section className={`${styles.Lato} flex justify-center py-6`}>
      {query &&
        query.map((post) => (
          <div className="max-w-5xl mt-16 flex-col content-center mx-1">
            <img
              className="h-72 w-full object-cover rounded-md"
              src={post.mainImage}
              alt={post.title}
            />
            <div className="flex-row flex">
            <div className="ml-2">
              
            </div>
            <div className={`${styles.articleWrapper}`}>
            <div>
              <h1 className="font-bold md:text-5xl text-4xl mt-12 flex text-center mb-8 md:mx-20 mx-6">
                {post.title}
              </h1>
            </div>
            <div className="flex md:mx-24 mx-6">
              <div className="flex">
                <img
                  alt="avatar"
                  className="w-12 rounded-full border border-transparent"
                  src={post.authorImg}
                />
              </div>
              <div className="border-r-[1px] border-gray-300 mx-6" />
              <div className="flex-col ml-3">
                <h2 className="flex">{post.author}</h2>
                <h3 className="text-sm font-semibold">
                  {new Date(post.publishedAt).toDateString().slice(4)}
                </h3>
              </div>
            </div>
            <div className=" border-b-[1px] border-gray-300 mt-2 md:mx-24 mx-8 p-2" />
            <div className="mt-10 flex justify-center md:mx-24 mx-6">
              <BlockContent
                className="article"
                blocks={post.body}
                projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
                dataset="production"
              />
            </div>
          </div>
        </div>
        </div>
        ))}
    </section>
  );
};

export const ShareButtons = ({
  Button,
  Icon
}) => {
  const shareUrl = usePathname();
  return (
    <div className={`${styles.shareButtons}`}>
      <Button
      url={shareUrl}>
      
      </Button>

    </div>

  )
}

export default Post;
