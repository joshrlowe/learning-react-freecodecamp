import React, { useState } from "react";
import { useEffect } from "react";

export default function Meme() {
  const [allMemes, setAllMemes] = useState({});

  const [meme, setMeme] = useState({
    name: "",
    topText: "",
    bottomText: "",
    image: "https://i.imgflip.com/1bij.jpg",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    console.log(name, value);
    setMeme((prevMeme) => ({ ...prevMeme, [name]: value }));
  }

  function getMemeImage() {
    const memesArray = allMemes.data.memes;
    const randomMeme =
      memesArray[Math.floor(Math.random() * memesArray.length)];
    setMeme((prevMeme) => ({
      ...prevMeme,
      name: randomMeme.name,
      image: randomMeme.url,
    }));
  }

  useEffect(() => {
    fetch("http://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((data) => setAllMemes(data));
  }, []);

  return (
    <main>
      <div className="form">
        <label htmlFor="topText" className="form--label">
          Top text
        </label>
        <label htmlFor="bottomText" className="form--label">
          Bottom text
        </label>
        <input
          type="text"
          id="topText"
          placeholder="Top text"
          className="form--input"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
        />
        <input
          type="text"
          id="bottomText"
          placeholder="Bottom text"
          className="form--input"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
        />
        <button onClick={getMemeImage} className="form--button">
          Get a new meme image 🖼️
        </button>
      </div>
      <div className="meme">
        <img src={meme.image} alt={meme.name} className="meme--image" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}
