const express = require("express");
const axios = require("axios");
//const data = require('./mockDB');

const app = express();

const corsExclude = function(req, res, next) {
  res.setHeader("Allow-Control-Allow-Origin", "*");
  next();
};

app.use(corsExclude);

app.get("/users", async (req, res) => {
  try {
    ({data} = await axios.get("https://goodparts.dokku-hosted.thruhere.net/people"));
    res.send(data);
  }catch(err) {
    res.status(500);
    res.end();
  }
});

app.listen(5000, () => console.log("Listening on port 5000"));
