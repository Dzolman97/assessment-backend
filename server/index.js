const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});

app.get("/api/fortune", (req, res) => {
  const fortunes = [
    "Help! I’m being held prisoner in a chinese bakery!",
    "Sift through your past to get a better idea of the present.",
    "Your leadership qualities will be tested and proven.",
    "Your life will be happy and peaceful.",
    "You are not illiterate!",
    "Avoid making unnecessary gambles... your lucky numbers are 12, 14, 17, 20, 28, 36."
  ]

  let randomIndex = Math.floor(Math.random() * fortunes.length)
  let randomFortune = fortunes[randomIndex]

  res.status(200).send(randomFortune)

})


app.get("/api/prettyColors", (req, res) => {
  const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
  let newHexColor = '#';
  let randomNum = () => Math.floor(Math.random() * hex.length)

  // function randomNum() {
  //   return Math.floor(Math.random() * hex.length)
  // }

  for(let i = 0; i < 6; i++){
    newHexColor += hex[randomNum()]
  }
  // console.log(newHexColor)

  res.status(200).send(newHexColor)
})


app.listen(4000, () => console.log("Server running on 4000"));
