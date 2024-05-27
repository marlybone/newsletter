"use client"
import React, { useRef } from 'react'
import { usePathname } from "next/navigation";
import { motion, useScroll, useTransform } from "framer-motion"
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
  const { scrollY } = useScroll({ target: scrollContainerRef });

  const startPoint = 100; 
  const endPoint = 1650;

  const translateY = useTransform(scrollY, [startPoint, endPoint], [0, endPoint - startPoint]);

 const scrollVariants = {
  animate: {
    y: scrollY,
  },
 }

    const buttons = [
        { Button: FacebookShareButton, Icon: FacebookIcon, Text: "Facebook" },
        { Button: LinkedinShareButton, Icon: LinkedinIcon, Text: "Linkedin" },
        { Button: PinterestShareButton, Icon: PinterestIcon, Text: "Pinterest" },
        { Button: TwitterShareButton, Icon: XIcon, Text: "X" },
        { Button: TelegramShareButton, Icon: TelegramIcon, Text: "Telegram"},
        { Button: EmailShareButton, Icon: EmailIcon, Text: "Email"},
        { Button: RedditShareButton, Icon: RedditIcon, Text: "Reddit"},
        { Button: WhatsappShareButton, Icon: WhatsappIcon, Text: "Whatsapp"},
      ];
    return (
        <motion.div
        ref={scrollContainerRef}
        style={{
          translateY,
          transition: { ease: 'easeIn' }
        }}
        
        variants={scrollVariants}
        className='md:h-[470px] relative'
        >
        {buttons.map((button, i ) => (
            <div
            key={i}>
            <ShareButtons Icon={button.Icon} Button={button.Button} Text={button.Text}  />
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
      <motion.div
      className='relative'
      >
        <Button
        url={shareUrl}>
        <Icon size={32} round={true}></Icon>
        </Button>
        </motion.div>
    )
  }

