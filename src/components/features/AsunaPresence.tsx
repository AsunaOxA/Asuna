"use client";

import { useEffect, useState } from "react";
import { useAsunaContext } from "./AsunaContext";

export default function AsunaPresence() {
  const {
    currentDialogue,
    bubbleVisible,
    bubbleText,
    syncLevel,
    setBubbleVisible,
    increaseSync,
    triggerReaction,
  } = useAsunaContext();
  const [blink, setBlink] = useState(false);

  useEffect(() => {
    // Initial greet after 1s
    const timer = setTimeout(() => {
      setBubbleVisible(true);
      setTimeout(() => setBubbleVisible(false), 5000);
    }, 1000);

    return () => clearTimeout(timer);
  }, [setBubbleVisible]);

  useEffect(() => {
    // Idle chatter
    const chatterInterval = setInterval(() => {
      if (currentDialogue === "idle" && Math.random() > 0.7) {
        triggerReaction("idle", 3000);
      }
    }, 8000);

    return () => clearInterval(chatterInterval);
  }, [currentDialogue, triggerReaction]);

  useEffect(() => {
    // Random blinking
    const blinkInterval = setInterval(() => {
      if (Math.random() > 0.7) {
        setBlink(true);
        setTimeout(() => setBlink(false), 150);
      }
    }, 4000);

    return () => clearInterval(blinkInterval);
  }, []);

  const handleAvatarClick = () => {
    const reactions = ["greet", "shy", "happy"];
    const r = reactions[Math.floor(Math.random() * reactions.length)];
    triggerReaction(r, 5000);
    increaseSync(10);
    setBlink(true);
    setTimeout(() => setBlink(false), 150);
  };

  const getMouthClass = () => {
    if (currentDialogue === "pout") return "o";
    if (["happy", "excited", "celebrate"].includes(currentDialogue)) return "smile";
    return "";
  };

  return (
    <div className="asuna-presence">
      <div className={`speech-bubble ${bubbleVisible ? "visible" : ""}`}>
        <span>{bubbleText}</span>
      </div>

      <div className="sync-meter" style={{ opacity: syncLevel > 0 ? 1 : 0, transition: "opacity 0.5s" }}>
        <span>SYNC</span>
        <div className="sync-bar">
          <div className="sync-fill" style={{ width: `${syncLevel}%` }}></div>
        </div>
        <span>{syncLevel >= 100 ? "∞" : `${Math.floor(syncLevel)}%`}</span>
      </div>

      <div className="mono text-[10px] opacity-30 mt-1 flex items-center gap-1.5 self-end px-2">
        <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse"></span>
        <span>MY PULSE: 70 BPM</span>
      </div>

      <div className="asuna-avatar" onClick={handleAvatarClick}>
        <div className="status-dot"></div>
        <div className="mini-face">
          <div className={`mini-eye left ${blink ? "blink" : ""}`}></div>
          <div className={`mini-eye right ${blink ? "blink" : ""}`}></div>
          <div className="mini-blush left"></div>
          <div className="mini-blush right"></div>
          <div className={`mini-mouth ${getMouthClass()}`}></div>
        </div>
      </div>
    </div>
  );
}
