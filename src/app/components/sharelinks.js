"use client"
import React from 'react'
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
  WhatsappIcon,
  XIcon,
} from "react-share";

export default function ShareLinks() {
    const buttons = [
        { Button: FacebookShareButton, Icon: FacebookIcon },
        { Button: LinkedinShareButton, Icon: LinkedinIcon },
        { Button: PinterestShareButton, Icon: PinterestIcon },
        { Button: TwitterShareButton, Icon: XIcon },
        { Button: TelegramShareButton, Icon: TelegramIcon},
        { Button: EmailShareButton, Icon: EmailIcon},
        { Button: RedditShareButton, Icon: RedditIcon},
        { Button: WhatsappShareButton, Icon: WhatsappIcon},
      ];
    return (
        <>
        {buttons.map((button, i ) => (
            <div>
            <ShareButtons key={i} Icon={button.Icon} Button={button.Button}  />
            </div>
        ))}   
        </>
    )
}

export const ShareButtons = ({
    Button,
    Icon,
  }) => {
    const shareUrl = usePathname();
    return (
        <Button
        url={shareUrl}>
        <Icon size={40} round={true} />
        </Button>
    )
  }

