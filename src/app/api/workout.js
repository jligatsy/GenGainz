export default function handler(req, res) {
  if (req.method === 'POST') {
    const { age, height, weight } = req.body;
    console.log('Received:', { age, height, weight });
    res.status(200).json({ message: 'Data received', data: { age, height, weight } });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
