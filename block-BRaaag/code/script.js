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


    let movieUI = data.map((movie, i) => {

        let li = React.createElement(
            'li',
            {},
            React.createElement('label', { for: i }, movie.name),
            React.createElement('button', { id: i, onClick: handleChange }, movie.watched ? 'Watched' : 'To Watch')
        );

        return li;

    })
    ReactDOM.render(movieUI, rootElm);

}


createUI(allMovies, rootElm);