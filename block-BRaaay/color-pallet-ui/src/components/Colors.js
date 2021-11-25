import Color from "./Color";
import colors from '../data/colors.json';



function Colors(){
   
    return(
        <>
             <h1 >Color Pallet</h1>
            {
                Object.entries(colors).map(
                    ([key, value]) =>  <Color colorCode={value} colorName={key}/>
                )
               
              
                
            }
        </>    
            

        
    )
}

export default Colors;