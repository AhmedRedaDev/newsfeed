 
export interface ArticlesApiParams { 
  q?: String;
  sortBy?: String;
  from?: String;
  to?: String;
  domains?: String;
}

export interface ArticleModel {
  source:SourceModel;
  author:String;
  title:String;
  description:String;
  url:String;
  urlToImage:String;
  content:String;
  publishedAt:Date

}

export interface SourceModel {
  id: Number|null;
  name: String; 
}
