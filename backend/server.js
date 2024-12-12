const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

app.use(cors());
app.use(bodyParser.json());

const axios = require('axios');
const dataFilePath = 'data.json';

// const readDataFromFile = () => {
//     try {
//       const data = fs.readFileSync(dataFilePath, 'utf-8');
//       if (data && Array.isArray(data.data)) {
//         return data.data;
//       } else {
//         return [];
//       }
//     } catch (err) {
//       return []; // Return an empty array if file doesn't exist or is empty
//     }
// };

// const writeDataToFile = (data) => {
//     fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));
// };

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
        console.log("fetching data from jetson");
        const data = await fetchDataFromJetsonNano(); // Fetch data from Jetson Nano
        // if (data && Array.isArray(data)) {
        //     const old_data = readDataFromFile();
        //     const updated_data = old_data.push(data);
        //     writeDataToFile(updated_data);
        //     res.status(200).send(updated_data);
        // } 
        // console.log('idk whats happening');
        // res.status(500).send([]);
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send({ error: 'Error fetching data from Jetson Nano' });
    }
});

const PORT = 8000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
});