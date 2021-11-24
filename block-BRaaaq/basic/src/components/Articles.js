import articles from "../data";
import PropTypes from "prop-types";

function Articles(){
    return (
        <>
        {
            articles.map((article)=><Article articleInfo={article}/>)

        }
        
         
        </>

    )
}


function Article(props){
    return (
         
            
        <div>
 
            <h2>{props.articleInfo.title} </h2>
            <img src={props.articleInfo.urlToImage} alt=""/>
            <p>{props.articleInfo.description}--<br/> <span>{props.articleInfo.author}</span></p>
             <h3>
                 Content:
                 <p>{props.articleInfo.content}</p>
                 <a href={props.articleInfo.url}>know more</a>
             </h3>
             <strong>{props.articleInfo.publishedAt}</strong>
            

           
            

        </div>
        
        
       
    )
}

Article.prototype={
    author:PropTypes.string.isRequired,
    title:PropTypes.string.isRequired,
    urlToImage:PropTypes.string.isRequired,
    description:PropTypes.string.isRequired,
    content:PropTypes.string.isRequired,
    url:PropTypes.string.isRequired,
    publishedAt:PropTypes.number.isRequired

}


export default Articles;