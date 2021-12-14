// VoiceRSS Javascript SDK
const button = document.getElementById("button");
const audioElement = document.getElementById("audio");

//  Disable/Enable button
const toggleButton = () => {
  button.disabled = !button.disabled;
};

// Passing the jokes
const tellMeJokes = (joke) => {
  VoiceRSS.speech({
    key: "24df6329267446948536b7515f78f676",
    src: joke,
    hl: "en-us",
    r: 0,
    c: "mp3",
    f: "44khz_16bit_stereo",
    ssml: false,
  });
};

// Getting the jokes
const getJokes = async () => {
  let joke = "";
  try {
    const res = await fetch(
      "https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit"
    );

    const data = await res.json();
    if (data.setup) {
      joke = `${data.setup} ... ${data.delivery}`;
    } else {
      joke = data.joke;
    }
    tellMeJokes(joke);
    toggleButton();
  } catch (err) {
    console.log(err.message);
  }
};

// Adding event listener
button.addEventListener("click", getJokes);

audioElement.addEventListener("ended", toggleButton);
