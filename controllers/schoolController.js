const db = require('../config/db');

exports.addSchool = async (req, res) => {
  const { name, address, latitude, longitude } = req.body;

  if (!name || !address || !latitude || !longitude) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    await db.query(
      'INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)',
      [name, address, latitude, longitude]
    );
    res.status(201).json({ message: 'School added successfully' });
  } catch (error) {
    console.error('Error inserting school:', error);
    res.status(500).json({ error: 'Database error' });
  }
};

exports.listSchool = async(req,res)=>{
  const { latitude, longitude } = req.query;

  if (!latitude || !longitude) {
    return res.status(400).json({ error: 'Latitude and longitude are required' });
  }

  try {
    const [schools] = await db.query('SELECT *, (6371 * acos(cos(radians(?)) * cos(radians(latitude)) * cos(radians(longitude) - radians(?)) + sin(radians(?)) * sin(radians(latitude)))) AS distance FROM schools ORDER BY distance', [latitude, longitude, latitude]);
    res.status(200).json(schools);
  } catch (error) {
    console.error('Error fetching schools:', error);
    res.status(500).json({ error: 'Database error' });
  }
};