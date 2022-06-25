import axios from 'axios';
import { ArticleModel, ArticlesApiParams } from 'models';
import {getError} from './config';
import I18n from 'react-native-i18n'
import {API_KEY} from 'utils/urls.json'
export async function getArticles(data:ArticlesApiParams): Promise<ArticleModel[]> {
  try {
    let response = await axios.get('/everything', {params: {...data,apiKey: API_KEY,language:I18n.locale}}); 
    console.log("🚀 ~ file: articles.ts ~ line 8 ~ getArticles ~ response", response)
    if(response.data.status=='ok'){
      return response.data.articles;
    }
    throw new Error(response.data.message);
  } catch (error:any) {
    console.log("🚀 ~ file: articles.ts ~ line 13 ~ getArticles ~ error", error)
    throw getError(error.message);
  }
}
 

export async function getArticleById({article,q}:{article?:ArticleModel;q:String}): Promise<ArticleModel> {
  try {
  //  if(article)return article 
   let result = await getArticles({q:q});
   return result[Math.floor(Math.random()*result.length)]; 
  } catch (error:any) {
    console.log("🚀 ~ file: articles.ts ~ line 13 ~ getArticles ~ error", error)
    throw getError(error.message);
  }
}
 
   