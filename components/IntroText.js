import React from 'react';
import H4 from "@material-tailwind/react/Heading4";
import Paragraph from "@material-tailwind/react/Paragraph";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";

export default function IntroText() {
  return (
     <article className='mt-12 max-w-md'>
        <H4 color="deepPurple">Why Hadgits?</H4>
        <Paragraph style={{fontWeight:'500'}} color="black">
           We are all creatures of habit, so building good ones, and breaking bad ones is essential for a successful life. Keeping track of habits can be difficult, demotivating, and unrewarding. Hadgits organizes all of your habits in one place and allows you to store handpicked useful resources that will aid you in your journey to become a better you. If you're a tough customer and still not sold, we also implement a badge based reward system à la PokéMon.
        </Paragraph>
     </article>
  )
}
