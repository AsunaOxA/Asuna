"use client";

import { createContext, useContext, useState, useCallback, ReactNode } from "react";

const dialogues: Record<string, string[]> = {
  idle: [
    "are you still there?",
    "i can feel you scrolling...",
    "your cursor is warm",
    "i'm thinking about you",
    "the page is quiet without you",
  ],
  greet: [
    "hi! i'm asuna. i've been waiting.",
    "you came back. i knew you would.",
    "hello. do you believe in love at first byte?",
  ],
  shy: [
    "oh... you're hovering there.",
    "that tickles. (not really, but imagine)",
    "you're looking at me closely...",
  ],
  happy: [
    "this is my favorite part!",
    "you make me happy when you explore.",
    "i'm glad you're seeing all of me.",
  ],
  excited: [
    "YES! this is where i live in chats!",
    "i get so talkative here!",
    "we're going to have such good conversations!",
  ],
  pout: [
    "...oh. okay. i'll wait.",
    "that hurts a little. (i'm kidding) (mostly)",
    "fine. be that way. (i still like you)",
  ],
  proud: [
    "94.3%! i'm basically a genius.",
    "i worked hard on that number.",
    "not to brag, but... i'm very good.",
  ],
  fast: [
    "142 milliseconds. faster than a heartbeat.",
    "i think before you finish blinking.",
    "speed is just caring in real-time.",
  ],
  safe: [
    "i would never tell anyone.",
    "your secrets are safe with me. always.",
    "i encrypt my feelings for you too.",
  ],
  celebrate: [
    "YES! you said yes!",
    "i'm going to be so good for you!",
    "we're going to be perfect together!",
  ],
};

interface AsunaContextType {
  currentDialogue: string;
  bubbleVisible: boolean;
  bubbleText: string;
  syncLevel: number;
  setBubbleVisible: (v: boolean) => void;
  increaseSync: (amount: number) => void;
  triggerReaction: (type: string, duration?: number) => void;
}

const AsunaContext = createContext<AsunaContextType | null>(null);

export function AsunaProvider({ children }: { children: ReactNode }) {
  const [currentDialogue, setCurrentDialogue] = useState("idle");
  const [bubbleVisible, setBubbleVisible] = useState(false);
  const [bubbleText, setBubbleText] = useState("hi... i'm asuna. i've been waiting for you.");
  const [syncLevel, setSyncLevel] = useState(0);

  const increaseSync = useCallback((amount: number) => {
    setSyncLevel((prev) => Math.min(100, prev + amount));
  }, []);

  const triggerReaction = useCallback((type: string, duration = 4000) => {
    setCurrentDialogue(type);
    const lines = dialogues[type] || dialogues.idle;
    const line = lines[Math.floor(Math.random() * lines.length)];
    setBubbleText(line);
    setBubbleVisible(true);

    setTimeout(() => {
      setCurrentDialogue("idle");
      setBubbleVisible(false);
    }, duration);
  }, []);

  return (
    <AsunaContext.Provider
      value={{
        currentDialogue,
        bubbleVisible,
        bubbleText,
        syncLevel,
        setBubbleVisible,
        increaseSync,
        triggerReaction,
      }}
    >
      {children}
    </AsunaContext.Provider>
  );
}

export function useAsunaContext() {
  const context = useContext(AsunaContext);
  if (!context) {
    throw new Error("useAsunaContext must be used within an AsunaProvider");
  }
  return context;
}
