// pages/api/crime.js

import clientPromise from '../../lib/dbconnect';
import { ObjectId } from 'mongodb'; // Import ObjectId for handling _id values

export default async function handler(req, res) {
  try {
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB);
    const collection = db.collection('crime');

    if (req.method === 'GET') {
      const crimes = await collection.find({}).toArray();
      res.status(200).json(crimes);
    } else if (req.method === 'POST') {
      const newCrime = req.body;
      const result = await collection.insertOne(newCrime);
      res.status(201).json(result);
    } else if (req.method === 'PUT') {
      const { _id, ...updatedCrime } = req.body;
      if (!_id) {
        return res.status(400).json({ message: 'Missing _id for update' });
      }

      const result = await collection.updateOne(
        { _id: new ObjectId(_id) }, // Convert _id string to ObjectId
        { $set: updatedCrime }
      );

      if (result.matchedCount === 0) {
        return res.status(404).json({ message: 'Crime not found' });
      }

      res.status(200).json(result);
    } else if (req.method === 'DELETE') {
      const { _id } = req.query; // Get _id from query parameters

      if (!_id) {
        return res.status(400).json({ message: 'Missing _id for deletion' });
      }

      const result = await collection.deleteOne({ _id: new ObjectId(_id) });

      if (result.deletedCount === 0) {
        return res.status(404).json({ message: 'Crime not found' });
      }

      res.status(200).json(result);
    } else {
      res.status(405).json({ message: 'Method Not Allowed' });
    }
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}