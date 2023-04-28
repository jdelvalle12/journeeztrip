// pages/api/locations.js
import axiosInstance from '../api/axiosInstance';

export default function handler(req, res) {
  if (req.method === 'GET') {
    axiosInstance.get('../locations')
      .then(response => {
        res.status(200).json(response.data);
      })
      .catch(error => {
        console.error(error);
        res.status(500).send('Internal Server Error');
      });
  } else {
    res.status(405).end();
  }
}
