import axios from "axios";

const BASE_URL = "https://nc-news-ohzf.onrender.com/api";

export const getArticles =  () => axios.get(`${BASE_URL}/articles`).then(({data}) => data.articles)


export const getArticlesByTopic = (topic) => axios.get(`${BASE_URL}/articles`).then(({data}) => data.articles)

export const getArticleById =  (id) => axios.get(`${BASE_URL}/articles/${id}`).then(({data}) => data.article)

export const getTopics = () => axios.get(`${BASE_URL}/topics`).then(({data}) => data.topics)

export const getComments = () => {console.log('in the api call');}

export const postComment = () => {console.log('in the api call');}

export const postVote = () => {console.log('in the api call');}
