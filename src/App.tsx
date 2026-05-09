import { useEffect, useState, type CSSProperties } from "react";
import Confetti from "react-confetti";
import "./App.css";

type ChoiceStep = {
  message: string;
  gif: string;
  alt: string;
};

const gifPath = (fileName: string) => `${import.meta.env.BASE_URL}gifs/${fileName}`;

const choiceSteps: ChoiceStep[] = [
  {
    message: "No",
    gif: gifPath("ask.gif"),
    alt: "Initial asking GIF",
  },
  {
    message: "Really !! No ???",
    gif: gifPath("gif1.gif"),
    alt: "GIF showing disbelief",
  },
  {
    message: "Are you sure?",
    gif: gifPath("gif2.gif"),
    alt: "GIF asking for confirmation",
  },
  {
    message: "What if I asked really nicely?",
    gif: gifPath("gif3.gif"),
    alt: "GIF with a nice plea",
  },
  {
    message: "Pretty please",
    gif: gifPath("gif4.gif"),
    alt: "GIF asking nicely",
  },
  {
    message: "With a chocolate rice cake on top",
    gif: gifPath("gif5.gif"),
    alt: "GIF with a sweet offer",
  },
  {
    message: "PLEASE POOKIE",
    gif: gifPath("gif7.gif"),
    alt: "GIF pleading intensely",
  },
  {
    message: "But :*(",
    gif: gifPath("gif8.gif"),
    alt: "Sad GIF",
  },
  {
    message: "I am going to die",
    gif: gifPath("gif9.gif"),
    alt: "GIF with a dramatic reaction",
  },
  {
    message: "Yep im dead",
    gif: gifPath("gif10.gif"),
    alt: "GIF showing exhaustion",
  },
  {
    message: "ok ur talking to my ghost",
    gif: gifPath("gif11.gif"),
    alt: "GIF with a ghostly theme",
  },
  {
    message: "please babe",
    gif: gifPath("gif12.gif"),
    alt: "GIF with a heartfelt plea",
  },
  {
    message: ":((((",
    gif: gifPath("gif13.gif"),
    alt: "Very sad GIF",
  },
  {
    message: "PRETTY PLEASE",
    gif: gifPath("gif14.gif"),
    alt: "GIF with an intense plea",
  },
];

const celebrationGif = gifPath("celebration.gif");

function useViewportSize() {
  const [viewportSize, setViewportSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateViewportSize = () => {
      setViewportSize({ width: globalThis.innerWidth, height: globalThis.innerHeight });
    };

    updateViewportSize();
    globalThis.addEventListener("resize", updateViewportSize);

    return () => {
      globalThis.removeEventListener("resize", updateViewportSize);
    };
  }, []);

  return viewportSize;
}

function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = globalThis.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => {
      setPrefersReducedMotion(mediaQuery.matches);
    };

    updatePreference();

    mediaQuery.addEventListener("change", updatePreference);

    return () => {
      mediaQuery.removeEventListener("change", updatePreference);
    };
  }, []);

  return prefersReducedMotion;
}

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const [name, setName] = useState("");
  const { width, height } = useViewportSize();
  const prefersReducedMotion = usePrefersReducedMotion();
  const currentOption = choiceSteps[Math.min(noCount, choiceSteps.length - 1)];
  const displayName = name.trim() || "pookie";
  const yesButtonSize = 1.15 + noCount * 0.34;
  const yesButtonScale = 1 + noCount * 0.12;
  const noButtonSize = Math.max(1 - noCount * 0.08, 0.45);
  const noButtonScale = Math.max(1 - noCount * 0.085, 0.16);
  const yesButtonStyle = {
    fontSize: `${yesButtonSize}rem`,
    "--button-scale": yesButtonScale,
  } as CSSProperties;
  const noButtonStyle = {
    fontSize: `${noButtonSize}rem`,
    "--button-scale": noButtonScale,
    opacity: Math.max(1 - noCount * 0.045, 0.5),
  } as CSSProperties;
  const shouldShowConfetti = yesPressed && !prefersReducedMotion && width > 0 && height > 0;

  const handleNoClick = () => {
    setNoCount((currentCount) => currentCount + 1);
  };

  return (
    <main className="page">
      {shouldShowConfetti ? (
        <Confetti
          width={width}
          height={height}
          recycle={false}
          numberOfPieces={width < 640 ? 140 : 220}
        />
      ) : null}
      <section className="shell">
        {yesPressed ? (
          <article className="card celebration">
            <div className="badge">it's a yes</div>
            <div className="gif-wrap">
              <img
                src={celebrationGif}
                alt="Cute celebration animation"
                className="gif-frame"
              />
            </div>
            <h1 className="title">WOOOOOO!!!</h1>
            <p className="subtitle celebration-text">
              I love you {displayName}!! ;))
            </p>
          </article>
        ) : (
          <article className="card">
            <div className="badge">tiny love note</div>
            <label className="name-field" htmlFor="valentine-name">
              <span>Your name</span>
              <input
                id="valentine-name"
                type="text"
                autoComplete="name"
                placeholder="Type it here"
                value={name}
                maxLength={40}
                spellCheck={false}
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
            <p className="subtitle">Answer carefully, the No button is dramatic.</p>
            <div className="button-row">
              <button
                type="button"
                className="yes-button"
                style={yesButtonStyle}
                onClick={() => setYesPressed(true)}
              >
                Yes
              </button>
              <button
                type="button"
                onClick={handleNoClick}
                className="no-button"
                style={noButtonStyle}
              >
                {currentOption.message}
              </button>
            </div>
          </article>
        )}
      </section>
    </main>
  );
}
