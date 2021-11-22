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

function createElement(type,attr={},...children){
    let element=document.createElement(type);
    for(let key in attr){
        if(key.startsWith("data-")){
            element.setAttribute(key,attr[key]);
        }else if(key.startsWith('on')){
            let eventType=key.replace('on','').toLowerCase();
            element.addEventListener(eventType,attr[key]);

        }
        else{
            element[key]=attr[key];
        }
    }
    children.forEach((child)=>{
        if(typeof child === "object"){
            element.append(child);
        }
        if(typeof child === "string"){
            let node=document.createTextNode(child);
            element.append(node);
        }
    })
    return element;
}


function createUI(data, root) {

    root.innerHTML = "";
    data.forEach((movie, i) => {
      
        let li = createElement(
            'li',
            {},
            createElement('label',{for:i},movie.name),
            createElement('button',{id:i,onClick:handleChange},movie.watched ? 'Watched' : 'To Watch')
            );

        rootElm.append(li);
    })


}


createUI(allMovies, rootElm);

