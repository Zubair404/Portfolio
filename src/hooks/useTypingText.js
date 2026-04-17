import React, { useEffect, useState } from "react";

export function useTypingText(words, speed = 85, pause = 1400) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index];

    const timeout = setTimeout(
      () => {
        if (!deleting && subIndex === current.length) {
          setDeleting(true);
          return;
        }

        if (deleting && subIndex === 0) {
          setDeleting(false);
          setIndex((value) => (value + 1) % words.length);
          return;
        }

        setSubIndex((value) => value + (deleting ? -1 : 1));
      },
      deleting ? speed / 2 : subIndex === current.length ? pause : speed
    );

    return () => clearTimeout(timeout);
  }, [deleting, index, pause, speed, subIndex, words]);

  return `${words[index].slice(0, subIndex)}${subIndex !== words[index].length || deleting ? "|" : ""}`;
}
