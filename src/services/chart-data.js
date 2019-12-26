import axios from 'axios';

const loadBarData = async () => {
    //const url = 'https://localhost:44303/waterusage/2893/gallons/';
    const url = '/chart-data.js';
    try {
        const response = await axios({
            method: 'get',
            url: url,
            headers: {
                'Ocp-Apim-Trace': true,
                'Ocp-Apim-Subscription-Key': 'd334acadb84d48b39eca45d2bd4119ef'
            }
        });
        // We have a response, but let's first check if component is still mounted
        return response.data;
    } catch(e) {
        console.error('Request for loadBarData failed');
        return [];
    }
};

export { loadBarData }