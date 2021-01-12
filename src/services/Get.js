import axios from "axios";
import {OnlineRoot, RootPath} from './Config';

const Get = (path, root) => {
    //resolve untuk memberikan return positif, reject untuk return negatif
    const promise = new Promise((resolve, reject) => {
        axios.get(`${root ? OnlineRoot : RootPath}/${path}`)
        .then((response)=> {
            resolve(response.data);
        }, (error) => {
            reject(error);
        })
    })
    return promise;
}

export default Get;