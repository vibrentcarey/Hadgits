const { connectToDatabase } = require('../lib/mongodb');
const ObjectId = require('mongodb').ObjectId;

export async function getPosts(req, res) {
  try {
    // connect to the database
    let { db } = await connectToDatabase();
    // fetch the posts
    let posts = await db
      .collection('posts')
      .find({})
      .toArray();
    // return the posts
    return res.json({
      message: JSON.parse(JSON.stringify(posts)),
      success: true,
    });
  } catch (error) {
    // return the error
    return res.json({
      message: new Error(error).message,
      success: false,
    });
  }
}

export async function addPost(req, res) {
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

export async function deletePost(req, res) {
  console.log(req.body);
  try {
      // Connecting to the database
      let { db } = await connectToDatabase();

      // Deleting the post
      await db.collection('posts').deleteOne({
          title: req.body
      });

      // returning a message
      return res.json({
          message: 'Post deleted successfully',
          success: true,
      });
  } catch (error) {

      // returning an error
      return res.json({
          message: new Error(error).message,
          success: false,
      });
  }
}

export async function updatePost(req, res) {
  try {
      // connect to the database
      let { db } = await connectToDatabase();

      // update the published status of the post
      await db.collection('posts').updateOne(
          {
              title: req.body,
          },
          { $set: { published: true } }
      );

      // return a message
      return res.json({
          message: 'Post updated successfully',
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