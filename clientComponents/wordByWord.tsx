"use client";

import React, { useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";

const WORD_BY_WORD = () => {
  const paragraph: string =
    "l Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur necessitatibus ullam quod error recusandae dolore rerum facere optio commodi. Libero eum voluptas voluptatum distinctio delectus aperiam soluta repellendus nesciunt!";

  const words: string[] = paragraph.split(" ");

  const paraElement = useRef(null);
  const { scrollYProgress } = useScroll({
    target: paraElement,
    offset: ["start 0.9", "start 0.25"],
  });

  return (
    <>
      <div ref={paraElement} className="flex flex-wrap  leading-none">
        {words.map((word, index) => (
          <WORDS
            key={index}
            range={[
              index / words.length,
              index / words.length + 1 / words.length,
            ]}
            progress={scrollYProgress}
          >
            {word}
          </WORDS>
        ))}
      </div>
    </>
  );
};

const WORDS = ({
  children,
  range,
  progress,
}: {
  children: string;
  range: number[];
  progress: any;
}) => {
  const character: string[] = children.split("");
  const opacity = useTransform(progress, range, [0, 1]);

  return (
    <>
      <span className="relative px-[8px]  font-black">
        {character.map((char, index) => (
          <span key={index} className="relative">
            <span className="absolute opacity-10 duration-200">{char}</span>
            <motion.span style={{ opacity: opacity }}>{char}</motion.span>
          </span>
        ))}
      </span>
    </>
  );
};
export default WORD_BY_WORD;
