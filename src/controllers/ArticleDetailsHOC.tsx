import { getArticleById } from 'api'; 
import { ArticleContainer } from 'components'; 
import { ArticleModel } from 'models';
import React, {useEffect, useState} from 'react'; 

const setTitle=(navigation,newArticle)=>{
  newArticle?.title&& navigation.setOptions({title: newArticle.title});
}
 const ArticleDetailsHOC = (props) => { 
  const {route, navigation}=props
  const article=route.params?.article
  setTitle(navigation,article)
  return article?<ArticleContainer article={article} />:<ArticleDetailsHOCLevel2 {...props}/>;
}; 

const ArticleDetailsHOCLevel2 = (props) => { 
  const {route, navigation}=props 
  const [article,setArticle] =useState<unknown>(null)
  useEffect(()=>{
    getArticleById(route.params).then((newArticle)=>{
       setTitle(navigation,newArticle)
      setArticle(newArticle)
    }) 
  },[]) 
  
  return <ArticleContainer article={article} />;
}; 
export default ArticleDetailsHOC