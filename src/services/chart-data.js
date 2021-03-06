import axios from 'axios';

const loadBarData = async () => {
    //const url = 'https://localhost:44303/waterusage/2893/gallons/';
    //const url = '/chart-data.js';
    const url = 'https://dev-api-assetmanagemnt-workerhost.azure.saws.org/account/api/gallons/3463463';
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

const loadBalance = async () => {
    //const url = 'https://localhost:44303/waterusage/2893/gallons/';
    //const url = '/chart-data.js';
    const url = 'https://dev-api-assetmanagemnt-workerhost.azure.saws.org/account/api/getbalance/3463463';
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

const loadBarData2 = async () => {
    //const url = 'https://localhost:44303/waterusage/2893/gallons/';
    const url = '/chart-data2.js';
    try {
        const response = await axios({
            method: 'get',
            url: url,
            headers: {
                'Ocp-Apim-Trace': true,
                'Ocp-Apim-Subscription-Key': 'd334acadb84d48b39eca45d2bd4119ef'
            }
        });
        console.log(response.data)
        return response.data;
    } catch(e) {
        console.error('Request for loadBarData failed');
        return [];
    }
};


export { loadBarData, loadBarData2, loadBalance }