"use client";

import React, { useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";

const WHOLE_AT_ONCE = () => {
  const paragraph: string =
    "l Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur necessitatibus ullam quod error recusandae dolore rerum facere optio commodi. Libero eum voluptas voluptatum distinctio delectus aperiam soluta repellendus nesciunt!";

  const words: string[] = paragraph.split(" ");

  const paraElement = useRef(null);
  const { scrollYProgress } = useScroll({
    target: paraElement,
    offset: ["start 0.7", "start 0.25"],
  });

  const opacity = useTransform(
    scrollYProgress,
    [1 / words.length, 1 / words.length + 1 / words.length],
    [0, 1]
  );
  return (
    <>
      <div ref={paraElement} className="flex flex-wrap  leading-none">

        <span className="relative px-[8px] font-black">
          <motion.span style={{ opacity: opacity }}>{paragraph}</motion.span>
        </span>
      </div>
    </>
  );
};
``
export default WHOLE_AT_ONCE;
