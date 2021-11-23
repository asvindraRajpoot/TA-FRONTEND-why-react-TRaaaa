let input = document.querySelector('input');
let rootElm = document.querySelector('.movies_list');

let allMovies = [{
    name: 'Forest gump',
    watched: false,
}, {
    name: "Batman",
    watched: true,
}]

input.addEventListener('keyup', (event) => {

    if (event.keyCode === 13) {
        allMovies.push({
            name: event.target.value,
            watched: false,
        });
        event.target.value = "";
        createUI(allMovies, rootElm);
    }


});

function handleChange(event) {
    let id = event.target.id;
    allMovies[id].watched = !allMovies[id].watched;
    createUI(allMovies, rootElm);
}


function createUI(data, root) {

    root.innerHTML = "";
    data.forEach((movie, i) => {
        let li = document.createElement('li');
        let button = document.createElement('button');
        button.id = i;
        button.innerText = movie.watched ? 'Watched' : 'To Watch';
        button.addEventListener('click', handleChange);
        let label = document.createElement('label');
        label.for = i;
        label.innerText = movie.name;

        li.append(label, button);
        rootElm.append(li);
    })


}


createUI(allMovies, rootElm);


