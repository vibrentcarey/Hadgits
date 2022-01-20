import { resetWarningCache } from 'prop-types';

const { connectToDatabase } = require('../lib/mongodb');
const ObjectId = require('mongodb').ObjectId;

export async function getPosts(req, res) {
  const user = req.query.user && req.query.user

  try {
    // connect to the database
    let { db } = await connectToDatabase();
    // fetch the posts
    let posts = await db
      .collection('posts')
      .find({ user: user })
      .toArray();
    console.log(posts);
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
  const { title, user } = req.body;
  try {
    // Connecting to the database
    let { db } = await connectToDatabase();

    // Deleting the post
    await db.collection('posts').deleteOne({
      user,
      title
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
  const { title, user, reason, resource } = req.body;
  try {
    // connect to the database
    let { db } = await connectToDatabase();

    console.log(req.body);
    // update the published status of the post
    await db.collection('posts').updateOne(
      { title },
      { $set: { length: 0 } }
    );

    if (req.body.reason) {
      await db.collection('posts').updateOne(
        { title, user },
        { $push: { reason } }
      )
    }

    if (req.body.reason) {
      await db.collection('posts').updateOne(
        { title, user },
        { $push: { resources: resource.title } }
      )
    }

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