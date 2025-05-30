// routes.js
const express = require('express');
const router = express.Router();

router.post('/create-cv', async (req, res) => {
  const { personalInfo, education } = req.body;

  try {
    // Assuming 'cvs' is the collection name
    const result = await db.collection('client_data').insertOne({ personalInfo, education });
    res.status(201).json({ message: 'CV created successfully', cvId: result.insertedId });
  } catch (error) {
    console.error('Error creating CV:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
