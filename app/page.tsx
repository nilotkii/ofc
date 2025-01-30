'use client'; // Add this line

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@mui/material";

const emojis = [
  "👽",
  "👹",
  "🏝️", "🏜️", "🏞️", "🕌", "⛪", "🛕", "🕉️",
  "✡️", "☯️", "☦️", "✝️", "🕊️", "☪️", "🇧🇷", "👼",
  "🚓", "🛒", "🏦", "🏛️", "⚖️", "💰", "💵",
  "🏫", "🩺", "🗽", "☮️",
  "🤔", "🧐", "🤯", "😵", "🫨", "💭", "💡", "⚖️", "♾️", "🔮",
  "🌎", "🌍", "🌏", "🌓", "🌗", "🌕", "🌑", "🌒", "🌘", "🌠",
  "🔥", "💧", "🌪️", "🌬️", "🌊", "⚡", "☄️", "⌛",
  "⏰", "⏮️", "⏭️", "♻️", "📜", "📖", "📚",
  "🔗", "🧬", "🕳️", "⚰️", "🗿", "🕯️", "🏺", "🔑",
  "🗝️", "💀", "☠️", "👁️", "🫥", "🔓", "🔒", "🚪", "🛤️",
  "🕊️", "🎭", "🏹", "🏛️", "⚔️", "🛡️", "🩸", "🩹", "⚖️",
  "🔉", "🔇", "🛑", "🔀", "🔂", "🔃", "🔄", "🏳️", "🧩",
  "🃏", "🧠", "🫀", "💓", "💥"
];

export default function EmojiDisplay() {
  const [emojiList, setEmojiList] = useState<string[]>([]);
  const [clickDisabled, setClickDisabled] = useState(false);

  const addEmoji = () => {
    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];

    setEmojiList((prev) => {
      if (prev.length < 2) {
        return [...prev, randomEmoji];
      } else {
        return [randomEmoji];
      }
    });
  };

  const handleClick = () => {

    setEmojiList([])

    if (clickDisabled) {
      return; // Impede cliques enquanto estiver desabilitado
    }

    setClickDisabled(true); // Trava o clique

    setTimeout(() => {
      addEmoji(); // Adiciona o primeiro emoji
    }, 1000);

    setTimeout(() => {
      addEmoji();
      setClickDisabled(false); // Libera o clique após a exibição dos emojis
    }, 3000);
  };

  return (
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          {emojiList.map((emoji, index) => (
            <motion.span
              key={index}
              className="text-6xl"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              style={{ fontSize: '6rem' }} // Ajuste o tamanho conforme necessário
            >
              {emoji}
            </motion.span>
          ))}
        </main>
        <Button onClick={handleClick} disabled={clickDisabled} className="px-4 py-40 text-xl rounded-lg shadow-lg">
          Adicionar Emoji
        </Button>
      </div>

  );
}