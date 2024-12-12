const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

app.use(cors());
app.use(bodyParser.json());

const axios = require('axios');

async function fetchDataFromJetsonNano() {
    try {
        const response = await axios.get('http://172.26.7.162:8080/data');  // Replace with the Jetson Nano's IP
        console.log('Received data from Jetson Nano:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching data from Jetson Nano:', error);
    }
}

app.get('/data', async (req, res) => {
    // Call this function to fetch data
    try {
        const data = await fetchDataFromJetsonNano(); // Fetch data from Jetson Nano
        // console.log(data);
        res.status(200).send(data); // Send the fetched data back to the frontend
    } catch (error) {
        res.status(500).send({ error: 'Error fetching data from Jetson Nano' });
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});