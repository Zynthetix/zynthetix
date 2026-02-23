'use client';

import { useEffect, useState } from 'react';

const words = ['AutoAgent', 'Voice', '& more soon'];

export default function HeroText() {
  const [idx, setIdx] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const id = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIdx((i) => (i + 1) % words.length);
        setVisible(true);
      }, 350);
    }, 2600);
    return () => clearInterval(id);
  }, []);

  return (
    <span
      style={{
        display: 'inline-block',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(-6px)',
        transition: 'opacity 0.35s ease, transform 0.35s ease',
        fontStyle: 'italic',
        color: 'var(--text2)',
      }}
    >
      {words[idx]}
    </span>
  );
}
