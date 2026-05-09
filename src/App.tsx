"use client";
import { useState } from "react";
import Confetti from "react-confetti";
import "./App.css";


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
    <div className="page">
      {yesPressed && <Confetti />}
      <div className="shell">
        {yesPressed ? (
          <div className="card celebration">
            <div className="badge">it's a yes</div>
            <div className="gif-wrap">
              <img
                src="https://cdn.jsdelivr.net/gh/nikhilbadyal/will-you-be-my-valentine@main/public/gifs/celebration.gif"
                alt="Celebration GIF"
                className="gif-frame"
              />
            </div>
            <h1 className="title">WOOOOOO!!!</h1>
            <p className="subtitle celebration-text">
              I love you {name || "pookie"}!! ;))
            </p>
          </div>
        ) : (
          <div className="card">
            <div className="badge">tiny love note</div>
            <label className="name-field">
              <span>Your name</span>
              <input
                type="text"
                placeholder="Type it here"
                value={name}
                onChange={(event) => setName(event.target.value)}
                className="name-input"
              />
            </label>
            <div className="gif-wrap">
              <img
                className="gif-frame"
                src={currentOption.gif}
                alt={currentOption.alt}
              />
            </div>
            <h1 className="title">Will you be my Valentine?</h1>
            <p className="subtitle">
              Answer carefully, the No button is dramatic.
            </p>
            <div className="button-row">
              <button
                className="yes-button"
                style={{ fontSize: yesButtonSize }}
                onClick={() => setYesPressed(true)}
              >
                Yes
              </button>
              <button
                onClick={handleNoClick}
                className="no-button"
              >
                {currentOption.message}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
