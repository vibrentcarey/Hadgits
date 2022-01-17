const { connectToDatabase } = require('../../lib/mongodb');
const ObjectId = require('mongodb').ObjectId;
// Add Post 
async function addPost(req, res) {
  try {
      // connect to the database
      let { db } = await connectToDatabase();
      // add the post
      await db.collection('posts').insertOne(req.body);
      // return a message
      return res.json({
          message: 'Post added successfully',
          success: true,
      });
  } catch (error) {
      // return an error
      return res.json({
          message: new Error(error).message,
          success: false,
      });
  }
}

export default async function handler(req, res) {
    // switch the methods
    switch (req.method) {
        case 'GET': {
            // return getPosts(req, res);
        }

        case 'POST': {
            return addPost(req, res);
        }

        case 'PUT': {
            // return updatePost(req, res);
        }

        case 'DELETE': {
            // return deletePost(req, res);
        }
    }
}