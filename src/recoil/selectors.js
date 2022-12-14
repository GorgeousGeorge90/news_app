import {selector, selectorFamily} from 'recoil';
import axios from 'axios';
import {v4 as uuid} from 'uuid';


const baseUrl = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=8f55437179f945fcaedd267ad5c60c38'

export const getNews = selector({
    key: 'fetchedNews',
    get:async ()=> {
        const response = await axios.get(baseUrl)
        return response.data.articles
    },
})

export const filteredNews = selector({
    key: 'filteredNews',
    get:({get})=> {
        const news = get(getNews)
        const filteredNews = news.filter(el=> news.indexOf(el) < 10 ).map(el=> {
            return {
                ...el,
                id:uuid(),
            }
        })
        return filteredNews
    }
})

export const getSingleArticle = selectorFamily({
    key: 'getSingleArticle',
    get: title => ({get}) => {
        return get(filteredNews).filter(el=> el.title === title)
    }
})
