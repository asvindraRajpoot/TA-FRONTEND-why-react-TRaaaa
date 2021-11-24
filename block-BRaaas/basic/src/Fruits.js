import fruits from "./data";

function Fruits(){
    return(
        <>
        {
            fruits.map((fruit)=><Fruit {...fruit}/>)
        }
        </>
    )
}

function handleClick(value){
    alert(`Hello ${value}`);

}


function Fruit(props){
    return (
        <>
          <div>
              <button onClick={()=>handleClick(props.value)}>{props.value}</button>

          </div>
        
        </>
    )
}

export default Fruits;