import React, { useContext, useEffect, useState } from 'react';
import UseStyles from '../components/styles';
import { StoreContext } from '../stores/store'
import loadBarData from '../services/select-account-data'
import ChartContainer from '../components/chart-container'
import SimpleList from '../components/simple-list'


const Page = () => {
    const [newData, setNewData] = useState([]);

    // Get global shared data
    const { ['appInfo']: [dataApp, setDataApp] } = useContext(StoreContext); //fancy destructuring
    const { ['accountInfo']: [dataAccount, setDataAccount] } = useContext(StoreContext); //fancy destructuring

    useEffect(() => {
        //load data from backend
        loadBarData({account: dataApp.selectedAccount})
            .then((response) => {
                // newData = response.map(o => o.volume);
                // console.log({newData})
                // return newData;
                setNewData(response);
            })
    }, [dataApp.selectedAccount]); //reloads data whenever selectedAccount changes


    //Should be configured elsewhere but included here for simplicity.
    const data = {
        datasets: [
            {
                label: "Last year",
                data: newData
            },
        ]
    };
    const options = {
        maintainAspectRatio: false,
        legend: {
            display: false
        },
        scales: {
            yAxes: [
                {
                    gridLines: {
                        display: false
                    },
                    stacked: false,

                }
            ],
            xAxes: [
                {
                    barPercentage: 0.75,
                    categoryPercentage: 0.5,
                    stacked: false,
                    gridLines: {
                        color: "transparent"
                    }
                }
            ]
        }
    };

    console.log('Fidel',  {dataApp}, {dataAccount}, {newData})
    return (
        <div className="App">
            <div>Uses React.useContext to share the global select component (upper right) with the chart below.</div>

            <ChartContainer seriesData={newData} />

            <SimpleList list={newData}/>
        </div>
    )
}

export default Page;