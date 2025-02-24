let button = document.querySelector('#button');
button.addEventListener('click', function () {
    let catergory = document.querySelector('.categories').value;
    fetch('https://api.chucknorris.io/jokes/random?category=' + catergory)
        .then(response => response.json())
        .then(data => {
            let joke = document.querySelector('#joke');
            joke.innerHTML = data.value;
        })
        .catch(err => console.log(err))
})