import axios from "axios";

const BASE_URL = "https://nc-news-ohzf.onrender.com/api";

export const getArticles =  () => axios.get(`${BASE_URL}/articles`).then(({data}) => data.articles)


export const getArticlesByTopic = (topic) => axios.get(`${BASE_URL}/articles`).then(({data}) => data.articles)

export const getArticleById =  (id) => axios.get(`${BASE_URL}/articles/${id}`).then(({data}) => data.article)

export const getTopics = () => axios.get(`${BASE_URL}/topics`).then(({data}) => data.topics)

export const getComments = (id) => axios.get(`${BASE_URL}/articles/${id}/comments`).then(({data}) => data.comments)

export const postComment = (id,comment) => axios.post(`${BASE_URL}/articles/${id}/comments`, comment).then(({data})=>data.comment)

export const putVote = (id,vote) => axios.patch(`${BASE_URL}/articles/${id}`, vote).then(({data}) => data.article)
