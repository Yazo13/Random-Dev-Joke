const jokeCont = document.getElementById('joke');
const btn = document.getElementById('btn');
const url = "https://v2.jokeapi.dev/joke/Programming,Dark,Christmas?type=single";

let getJoke = () => {
    fetch(url).then(data => data.json())
    .then(item => {jokeCont.textContent = `${item.joke}`;
    });
}
btn.addEventListener("click", getJoke);
getJoke();