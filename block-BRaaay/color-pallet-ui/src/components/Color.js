import '../data/colors.json'

function Color(props){
    console.log(props.colorCode);
    return(
       <>
       <div className="single-color">
        <div>
            <span className="color">{props.colorName}</span>
        </div>
          <div className="flex">
              {
                  props.colorCode.map((color,i)=>{
                      return (
                          
                         
                       <div className="flex-wrap">
                         
                           <div className="color-box" style={{backgroundColor:color}}>
                         

                           </div>
                        <div className="flex color-code">
                         <span>{i===0?0:i*100}</span>
                         <span>{color}</span>

                       </div>   
                   
                      </div>
                  
                      )
                  })
              }
          </div>
          </div>
          </>
          
       

    )

}

export default Color;