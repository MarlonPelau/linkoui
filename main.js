let word = "forest"

const options = {
  method: "GET",

  headers: {
    'X-Api-Key': "jzCVbwaxxSCCYpBwoxyXsQ==MV8irYjWyac5YHJ3", //updated the value with your personal key
    "Content-Type": "application/json",
  },
};

fetch(`https://api.api-ninjas.com/v1/rhyme?word=${word}`, options)
.then(response => response.json())
.then(data => console.log(data))