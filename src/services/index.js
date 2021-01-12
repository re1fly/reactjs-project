import Get from './Get';
import Post from './Post';
import Put from './Put';
import Delete from './Delete';


//true untuk menampilkan online path dan false untuk local path

//POST
const postBlog = (data) => Post('posts', false, data);

//PUT
const updateBlog = (data, id) => Put(`posts/${id}`, false, data);

//GET
const getBlog = () => Get('posts?_sort=id&_order=desc', false);
const getComments = () => Get('comments', true);

//DELETE
const deleteBlog = (id) => Delete(`posts/${id}`, false);

const API = {
    getBlog,
    getComments,
    postBlog,
    updateBlog,
    deleteBlog
}

export default API;

