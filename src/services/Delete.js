import axios from "axios";
import {OnlineRoot, RootPath} from './Config';

const Delete = (path, root) => {
    //resolve untuk memberikan return positif, reject untuk return negatif
    const promise = new Promise((resolve, reject) => {
        axios.delete(`${root ? OnlineRoot : RootPath}/${path}`)
        .then((response)=> {
            resolve(response.data);
        }, (error) => {
            reject(error);
        })
    })
    return promise;
}

export default Delete;