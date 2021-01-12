import Get from './Get';
import Post from './Post';


//true untuk menampilkan online path dan false untuk local path

//POST
const postBlog = (data) => Post('posts', false, data);

const getBlog = () => Get('posts?_sort=id&_order=desc', false);
const getComments = () => Get('comments', true);

const API = {
    getBlog,
    getComments,
    postBlog
}

export default API;

