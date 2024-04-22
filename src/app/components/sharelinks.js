"use client"
import React, { useRef } from 'react'
import { usePathname } from "next/navigation";
import { motion, useScroll } from "framer-motion"
import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  PinterestShareButton,
  RedditShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
import {
  EmailIcon,
  FacebookIcon,
  LinkedinIcon,
  PinterestIcon,
  RedditIcon,
  TelegramIcon,
  WhatsappIcon,
  XIcon,
} from "react-share";

export default function ShareLinks() {
  const scrollContainerRef = useRef(null);
  const { scrollY } = useScroll({ target: scrollContainerRef,
 });

 const scrollVariants = {
  pinned: {
    y: 0,
  },
  animate: {
    y: scrollY,
  }
 }

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
        <motion.div
        ref={scrollContainerRef}
        initial="pinned"
        animate="animate"
        variants={scrollVariants}
        className='h-[400px] bg-gray-500 relative'
        >
        {buttons.map((button, i ) => (
            <div key={i}>
            <ShareButtons Icon={button.Icon} Button={button.Button}  />
            </div>
        ))}   
        </motion.div>
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

