const emojis = ["😀", "😂", "😍", "😎", "🤩", "🥳", "😜", "🤔", "🤯", "😴"];

export default function EmojiDisplay() {
  const [emojiList, setEmojiList] = useState<string[]>([]);

  const addEmoji = () => {
    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
    setEmojiList((prev) => [...prev, randomEmoji]);
  };

  const handleClick = () => {
    addEmoji();
    setTimeout(addEmoji, 3000);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
      <Button onClick={handleClick} className="px-4 py-2 text-xl rounded-lg shadow-lg">
        Adicionar Emoji
      </Button>
      <div className="flex flex-wrap justify-center gap-4 p-4">
        {emojiList.map((emoji, index) => (
          <motion.span
            key={index}
            className="text-6xl"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            {emoji}
          </motion.span>
        ))}
      </div>
    </div>
  );
}
