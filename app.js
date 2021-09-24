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


const bt = document.querySelector('#jokeBtn');
const bt2 = document.querySelector('#closeBtn');


const addNewJoke = async () => {
    const jokeText = await dadJoke();
    document.getElementById("mainBox").innerHTML = "";
    load();
    setTimeout(function () {

        document.getElementById("mainBox").innerHTML = jokeText;
    }, 500);


}
const load = () => {
    const newDiv = document.createElement('div');
    newDiv.className = "d-flex justify-content-center";
    const newDiv2 = document.createElement('div');
    newDiv2.className = "spinner-grow text-info";
    newDiv.append(newDiv2);
    const newSpan = document.createElement('span');
    newSpan.className = "spinner-border";
    newDiv2.append(newSpan);
    mainBox.append(newDiv);

}



bt.addEventListener('click', addNewJoke);


