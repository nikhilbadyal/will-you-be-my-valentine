"use client";
import { useState } from "react";
import Confetti from "react-confetti";
import ask from '/gifs/ask.gif';
import gif1 from '/gifs/gif1.gif';
import gif2 from '/gifs/gif2.gif';
import gif3 from '/gifs/gif3.gif';
import gif4 from '/gifs/gif4.gif';
import gif5 from '/gifs/gif5.gif';
import gif7 from '/gifs/gif7.gif';
import gif8 from '/gifs/gif8.gif';
import gif9 from '/gifs/gif9.gif';
import gif10 from '/gifs/gif10.gif';
import gif11 from '/gifs/gif11.gif';
import gif12 from '/gifs/gif12.gif';
import gif13 from '/gifs/gif13.gif';
import gif14 from '/gifs/gif14.gif';
import celebrationGif from '/gifs/celebration.gif';


export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const [name, setName] = useState("");
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const options = [
    { message: "No", gif: ask, alt: "Initial asking GIF" },
    { message: "Really !! No ???", gif: gif1, alt: "GIF showing disbelief" },
    { message: "Are you sure?", gif: gif2, alt: "GIF asking for confirmation" },
    { message: "What if I asked really nicely?", gif: gif3, alt: "GIF with a nice plea" },
    { message: "Pretty please", gif: gif4, alt: "GIF asking nicely" },
    { message: "With a chocolate rice cake on top", gif: gif5, alt: "GIF with a sweet offer" },
    { message: "PLEASE POOKIE", gif: gif7, alt: "GIF pleading intensely" },
    { message: "But :*(", gif: gif8, alt: "Sad GIF" },
    { message: "I am going to die", gif: gif9, alt: "GIF with a dramatic reaction" },
    { message: "Yep im dead", gif: gif10, alt: "GIF showing exhaustion" },
    { message: "ok ur talking to my ghost", gif: gif11, alt: "GIF with a ghostly theme" },
    { message: "please babe", gif: gif12, alt: "GIF with a heartfelt plea" },
    { message: ":((((", gif: gif13, alt: "Very sad GIF" },
    { message: "PRETTY PLEASE", gif: gif14, alt: "GIF with an intense plea" },
  ];

  const currentOption = options[Math.min(noCount, options.length - 1)];

  return (
    <div className="-mt-16 flex h-screen flex-col items-center justify-center background">
      {yesPressed && <Confetti />}
      {yesPressed ? (
        <>
          <img src={celebrationGif} alt="Celebration GIF" className="animated-gif" />
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
          <img className="h-[200px] animated-gif" src={currentOption.gif} alt={currentOption.alt} />
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
