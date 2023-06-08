const express = require('express');
const bodyParser = require('body-parser');
const { default: axios } = require('axios');

const app = express();

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json()); 

app.set('view engine', 'ejs')

app.get("/", (req, res) => {
  res.render('index');
})

app.post("/", (req, res) => {
  
  const receivedData = req.body;
  const apiKey = receivedData.k;
  const prompt = "give me only code no text is needed, also keep in mind that I need only python scripts" + receivedData.p;
  axios
  .post('https://api.openai.com/v1/completions', {
    model: "text-davinci-003",
    prompt,
    max_tokens: 3000,
  }, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`,
    },
  })
  .then(response => {
    const code = response.data.choices[0].text;
    res.status(200).json({script: code}); //stringify 
  })
  .catch(error => {
    console.error('Error:', error.response.data);
  });

  
})

app.listen(process.env.PORT || 3000, () => {
  console.log("Server is up and running on PORT 3000");
})
