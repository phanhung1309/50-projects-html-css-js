const jokeEl = document.getElementById("joke")
const jokeBtn = document.getElementById("jokeBtn")

const generateJoke = async () => {
    const config = {
        headers: {
            Accept: "application/json"
        }
    }

    const res = await fetch("https://icanhazdadjoke.com", config)

    const {joke} = await res.json()

    jokeEl.innerHTML = joke
}

jokeBtn.addEventListener("click", generateJoke)
