import { db } from '../connect.js';
import jwt from 'jsonwebtoken';

export const getFollowers = (req, res) => {
  const q = `SELECT r.*, u.id AS followerUserId, name, profilePic FROM relationships AS r JOIN users AS u ON (u.id = r.followerUserId) WHERE r.followedUserId = ?`
  
    db.query(q, [req.query.followedUserId], (err, data) => {
      if(err) return res.status(500).json(err);
      return res.status(200).json(data)
    })

}