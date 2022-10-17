import {atom} from 'recoil';


export const userPosts = atom({
    key:'posts',
    default: JSON.parse(localStorage.getItem('posts')) || [],
})


export const usersComments = atom({
    key: 'comments',
    default: [],
})
