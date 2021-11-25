import '../data/colors.json'
let arr=[50,100,150,200,250,300,350,400,450,500,550,600,650,700,750,800,850,900]
function Color(props){
    console.log(props.colorCode);
    return(
       
       
          <div className="flex">
              {
                  props.colorCode.map((color,i)=>{
                      return (
                          
                         
                       <div className="flex-wrap">
                         
                           <div className="color-box" style={{backgroundColor:color}}>
                         

                           </div>
                        <div className="flex color-code">
                         <span>{arr[i]}</span>
                         <span>{color}</span>

                       </div>   
                   
                      </div>
                  
                      )
                  })
              }
          </div>
          
       

    )

}

export default Color;