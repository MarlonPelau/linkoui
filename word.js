
const apiUrl = `https://api.api-ninjas.com/v1/rhyme?word=`;
const options = {
  method: "GET",

  headers: {
    'X-Api-Key': apiKey,
    "Content-Type": "application/json",
  },
};

const form = document.querySelector('form')
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const rhymeList = document.getElementById('rhymeList');

    // Clear previous results
    rhymeList.innerHTML = '';
    const word = e.target.word.value
    fetch(apiUrl+word, options)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            // console.log(data)
            data.forEach(element => {
            const newWord = document.createElement('li');
            newWord.textContent = element;
            rhymeList.append(newWord) 
            });
        }
        )
});