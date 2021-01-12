import axios from "axios";

const RootPath = 'http://localhost:3004';
const OnlineRoot = 'https://jsonplaceholder.typicode.com'

const Get = (path, root) => {
    //resolve untuk memberikan return positif, reject untuk return negatif
    const promise = new Promise((resolve, reject) => {
        axios.get(`${root ? OnlineRoot : path}/${path}`)
        .then((response)=> {
            resolve(response.data);
        }, (error) => {
            reject(error);
        })
    })
    return promise;
}

//true for online path and flase for local path
const getBlog = () => Get('posts?_sort=id&_order=desc', false);
const getComments = () => Get('posts/1/comments', true);

const API = {
    getBlog,
    getComments
}

export default API;

