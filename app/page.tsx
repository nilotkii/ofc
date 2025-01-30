'use client'; // Add this line

import React, { useState } from 'react';
import { Button } from "@mui/material";

const emojis = [
  "👽", "🤖", "🐄", "🐀", "🐖", "🍸", "🗣️", "👣", "🕸️",
  "👹", "🗼", "🍾", "🏆", "🎵", "🖼️", "🎯", "🎱", "💊",
  "🏝️", "🏜️", "🏞️", "🕌", "⛪", "🕉️", "🚽", "🔞", "☢️",
  "✡️", "☯️", "✝️", "🕊️", "☪️", "👼", "🚫", "🏳️‍🌈",
  "🚓", "🛒", "🏦", "⚖️", "💰", "💵",
  "🩺", "🗽", "☮️",
  "🤔", "🧐", "🤯", "😵", "🫨", "💭", "💡", "⚖️", "♾️", "🔮",
  "🌎", "🌍", "🌏", "🌓", "🌗", "🌕",
  "🔥", "💧", "🌪️", "🌬️", "🌊", "⚡", "☄️", "⌛",
  "⏰", "⏮️", "⏭️", "♻️", "📜", "📖", "📚",
  "🔗", "🧬", "🕳️", "⚰️", "🗿", "🕯️", "🏺",
  "🗝️", "💀", "☠️", "👁️", "🔓", "🔒", "🚪", "🛤️",
  "🕊️", "🎭", "⚔️", "🛡️", "🩸", "🩹", "🪖",
  "🔉", "🔇", "🛑", "🔀", "🔄", "🏳️", "🧩",
  "🃏", "🧠", "🫀", "💥",
  "♟️", 
  "♀️", "♂️"
];

export default function EmojiDisplay() {

  const [emojiList, setEmojiList] = useState<string[]>([]);

  const rodarEmojis = () => {
    const tempoTotal = 5000; // Tempo total por emoji
    const intervaloInicial = 50; // Tempo inicial do intervalo
    const aceleracao = 1.15; // Quanto diminui a cada iteração
  
    const sortearEmoji = (posicao : number) => {
      let tempoDecorrido = 0;
      let intervaloAtual = intervaloInicial;
  
      const executar = () => {
        if (tempoDecorrido >= tempoTotal) return;
  
        const indiceAleatorio = Math.floor(Math.random() * emojis.length);
  
        setEmojiList((prevList) => {
          const novaLista = [...prevList];
          novaLista[posicao - 1] = emojis[indiceAleatorio]; // Atualiza a posição correta
          return novaLista;
        });
  
        tempoDecorrido += intervaloAtual;
        intervaloAtual = intervaloAtual*aceleracao; // Garante que não fique muito rápido
  
        console.log(`Emoji ${posicao}: ${emojis[indiceAleatorio]} | Próximo intervalo: ${intervaloAtual}`);
  
        setTimeout(executar, intervaloAtual);
      };
  
      executar();
    };
  
    setEmojiList([]); // Reseta a lista antes de começar
  
    sortearEmoji(1); // Primeiro emoji
    setTimeout(() => sortearEmoji(2), tempoTotal + 2000); // Segundo emoji começa após o primeiro
  };

  return (
    <div className="sorteio-container">
      <div className="sorteio">
        <div className="emoji">
          {emojiList}
        </div>
      </div>
      <Button onClick={rodarEmojis}>
        Lucky
      </Button>
    </div>
  );
}
