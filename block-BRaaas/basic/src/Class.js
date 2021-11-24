function handleClick(){
    alert("Hello React Event");
}


function handleHelpClick(){
    alert("To learn React use https://reactjs.org");
    alert("React and ReactDOM works together");
    alert("Babel helps in writing JSX")
}


function handleNameClick(str,event){

    alert(`Hello ${str} `)

}

function Event(){
    return (
        <>
          <button onClick={handleClick}>Click Me</button>
          <button onClick={handleHelpClick}>How can I help you?</button>
          <button onClick={(event)=>handleNameClick("Arya",event)}>Arya</button>
          <button onClick={(event)=>handleNameClick("John",event)}>John</button>
          <button onClick={(event)=>handleNameClick("bran",event)}>Bran</button>


        </>
    )
}


export default Event;