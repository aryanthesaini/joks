const jokes = document.querySelector('#jokess');

const dadJoke = async () => {
    try {
        const config = { headers: { Accept: 'application/json' } };
        const res = await axios.get('https://icanhazdadjoke.com/', config);
        return res.data.joke;
    }
    catch {
        return "NO JOKES AVAILABE :(";
    }


}


const bt = document.querySelector('button');

const addNewJoke = async () => {

    const jokeText = await dadJoke();

    document.getElementById("mainBox").innerHTML = jokeText;
    // const newLI = document.createElement('LI');
    // newLI.className = "list-group-item list-group-item-danger";
    // newLI.append(jokeText);
    // jokes.append(newLI);
}

bt.addEventListener('click', addNewJoke);
