import express from "express";
import brailleMapping from "./braillemap.js";
import signlangMapping from "./signlangmap.js";
const router = express.Router();

router.post("/tobraille", (req, res) => {
  try {
    let { text } = req.body;
    const brailleText = text
      .toLowerCase()
      .split("")
      .map((char) => brailleMapping[char] || char)
      .join("");
    console.log(brailleText);
    res.status(200).json(brailleText);
  } catch (err) {
    console.log(err);
  }
});

router.post("/tosign", (req, res) => {
  try {
    let { text } = req.body;
    const signimg = [];
    const temp = text.toLowerCase().split("");
    temp.map((x) => {
      if (x.match(/^[0-9a-z]+$/) || x == " ") {
        signimg.push(signlangMapping[x]);
      }
    });
    console.log(signimg);
    res.status(200).json(signimg);
  } catch (err) {
    console.log(err);
  }
});

export default router;
