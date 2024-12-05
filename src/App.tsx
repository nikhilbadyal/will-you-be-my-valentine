"use client";
import { useState } from "react";
import Confetti from "react-confetti";


export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const [name, setName] = useState("");
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const options = [
    { message: "No", gif: 'https://cdn.jsdelivr.net/gh/nikhilbadyal/will-you-be-my-valentine@main/public/gifs/ask.gif', alt: "Initial asking GIF" },
    { message: "Really !! No ???", gif: 'https://cdn.jsdelivr.net/gh/nikhilbadyal/will-you-be-my-valentine@main/public/gifs/gif1.gif', alt: "GIF showing disbelief" },
    { message: "Are you sure?", gif: 'https://cdn.jsdelivr.net/gh/nikhilbadyal/will-you-be-my-valentine@main/public/gifs/gif2.gif', alt: "GIF asking for confirmation" },
    { message: "What if I asked really nicely?", gif: 'https://cdn.jsdelivr.net/gh/nikhilbadyal/will-you-be-my-valentine@main/public/gifs/gif3.gif', alt: "GIF with a nice plea" },
    { message: "Pretty please", gif: 'https://cdn.jsdelivr.net/gh/nikhilbadyal/will-you-be-my-valentine@main/public/gifs/gif4.gif', alt: "GIF asking nicely" },
    { message: "With a chocolate rice cake on top", gif: 'https://cdn.jsdelivr.net/gh/nikhilbadyal/will-you-be-my-valentine@main/public/gifs/gif5.gif', alt: "GIF with a sweet offer" },
    { message: "PLEASE POOKIE", gif: 'https://cdn.jsdelivr.net/gh/nikhilbadyal/will-you-be-my-valentine@main/public/gifs/gif7.gif', alt: "GIF pleading intensely" },
    { message: "But :*(", gif: 'https://cdn.jsdelivr.net/gh/nikhilbadyal/will-you-be-my-valentine@main/public/gifs/gif8.gif', alt: "Sad GIF" },
    { message: "I am going to die", gif: 'https://cdn.jsdelivr.net/gh/nikhilbadyal/will-you-be-my-valentine@main/public/gifs/gif9.gif', alt: "GIF with a dramatic reaction" },
    { message: "Yep im dead", gif: 'https://cdn.jsdelivr.net/gh/nikhilbadyal/will-you-be-my-valentine@main/public/gifs/gif10.gif', alt: "GIF showing exhaustion" },
    { message: "ok ur talking to my ghost", gif: 'https://cdn.jsdelivr.net/gh/nikhilbadyal/will-you-be-my-valentine@main/public/gifs/gif11.gif', alt: "GIF with a ghostly theme" },
    { message: "please babe", gif: 'https://cdn.jsdelivr.net/gh/nikhilbadyal/will-you-be-my-valentine@main/public/gifs/gif12.gif', alt: "GIF with a heartfelt plea" },
    { message: ":((((", gif: 'https://cdn.jsdelivr.net/gh/nikhilbadyal/will-you-be-my-valentine@main/public/gifs/gif13.gif', alt: "Very sad GIF" },
    { message: "PRETTY PLEASE", gif: 'https://cdn.jsdelivr.net/gh/nikhilbadyal/will-you-be-my-valentine@main/public/gifs/gif14.gif', alt: "GIF with an intense plea" },
  ];

  const currentOption = options[Math.min(noCount, options.length - 1)];

  return (
    <div className="-mt-16 flex h-screen flex-col items-center justify-center background">
      {yesPressed && <Confetti />}
      {yesPressed ? (
        <>
          <img
            src='https://cdn.jsdelivr.net/gh/nikhilbadyal/will-you-be-my-valentine@main/public/gifs/celebration.gif'
            alt="Celebration GIF"
            className="animated-gif"
          />
          <div className="my-4 celebration-text font-bold">
            WOOOOOO!!! I love you {name || 'pookie'}!! ;))
          </div>
        </>
      ) : (
        <>
          <input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="mb-4 px-2 py-1 border rounded"
          />
          <img
            className="h-[200px] animated-gif"
            src={currentOption.gif}
            alt={currentOption.alt}
          />
          <h1 className="my-4 text-4xl">Will you be my Valentine?</h1>
          <div className="flex items-center">
            <button
              className={`mr-4 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className="rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
            >
              {currentOption.message}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
