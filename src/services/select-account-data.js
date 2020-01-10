import axios from 'axios'
import { get } from 'lodash'

//Shared method with XState and useContext
const fetchData = async (context, event) => {
    //const url = 'https://localhost:44303/waterusage/2893/gallons/';
    const url = '/chart-data3.js';
    try {
        const response = await axios({
            method: 'get',
            url: url,
            headers: {
                'Ocp-Apim-Trace': true,
                'Ocp-Apim-Subscription-Key': 'd334acadb84d48b39eca45d2bd4119ef'
            }
        });
        const accountData = response.data.filter(o => o.account === context.account); //returns null or an array with one element, thus [0] on next line
        return get(accountData, '[0].usage', []);
    } catch(e) {
        console.error('Request for loadBarData failed', e);
        return [];
    }
};

export default fetchData;