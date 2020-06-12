const express = require('express');
const fetch = require('node-fetch');

const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.post('/', (req, res) => {
  const text = req.body.text;
  fetch(`http://api.serpstack.com/search?access_key=b77e3733c11b0ad617198a9e71c38a22&query=${text}`)
  .then(response => response.json())
  .then(dataFetched => {
  	res.json(dataFetched);
  })
  .catch(err => {
  	if (err) throw err;
  })
});
const port = process.env.PORT || 5000
app.listen(port, (err) => {
if (err) throw err;
  console.log(port);
})


