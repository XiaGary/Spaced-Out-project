//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  const url = `https://api.nasa.gov/planetary/apod?api_key=8cgTG4zhq0DbkApAiUW1nKd5Clo7DyjuzpGvJrqG&date=${choice}`


  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        if(data.media_type === 'video'){
          document.querySelector('iframe').style.display = 'block';
          document.querySelector('iframe').src = data.url
        } else if(data.media_type === 'image'){
          document.querySelector('img').src = data.hdurl
        }
        document.querySelector('.explanation').innerText = data.explanation
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

