import { getPosts, addPost, deletePost } from '../../utils/database'

// Handle All Requests to 'api/badge'
export default async function handler(req, res) {
    // switch the methods
    switch (req.method) {
        case 'GET': {
            return getPosts(req, res);
        }

        case 'POST': {
            return addPost(req, res);
        }

        case 'PUT': {
            // return updatePost(req, res);
        }

        case 'DELETE': {
            console.log(req.body)
            return deletePost(req, res);
        }
    }
}