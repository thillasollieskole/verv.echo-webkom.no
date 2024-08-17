"use client";

import { motion, useInView } from "framer-motion";
import { ChevronRightIcon } from "lucide-react";
import { useRef } from "react";

type GroupLinkProps = {
  emoji: string;
  name: string;
  to: string;
};

export const GroupLink = ({ emoji, name, to }: GroupLinkProps) => {
  const ref = useRef<HTMLLIElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.li
      ref={ref}
      key={to}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -20 }}
      transition={{
        delay: 0.1,
        duration: 0.2,
      }}
      className="py-6 flex flex-row items-center"
    >
      <a href={to} className="flex-1">
        <h2 className="group text-2xl font-bold">
          <span aria-hidden="true">{emoji}</span>
          <span className="group-hover:underline ml-2">{name}</span>
        </h2>
      </a>

      <a
        href={to}
        className="py-2 hover:underline hover:bg-gray-100 rounded-lg h-14 w-14 items-center justify-center flex"
      >
        <ChevronRightIcon />
      </a>
    </motion.li>
  );
};
