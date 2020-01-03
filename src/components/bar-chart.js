import React, { useEffect, useState } from "react";
import styled, { withTheme } from "styled-components";
import { loadBarData } from '../services/chart-data';
import { palette } from '@material-ui/system';

import { CardContent, Card as MuiCard, Typography } from "@material-ui/core";
import { spacing } from "@material-ui/system";
import CircularProgress from '@material-ui/core/CircularProgress';

import { Bar } from "react-chartjs-2";

const Card = styled(MuiCard)(spacing);

const Spacer = styled.div(spacing);

const ChartWrapper = styled.div`
  height: 300px;
  width: 100%;
`;

function BarChart() {
    const [data1, setData1] = useState([]);

    useEffect(() => {
        //load data from backend
        loadBarData()
            .then((response) => {
                setData1(response.map(o => o.usagegallons));
            })
    }, []);

    const data = {
        labels: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
            "Jan"
        ],
        datasets: [
            {
                label: "Last year",
                data: data1
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

    return (
        <Card mb={1}>
            <CardContent>
                <Typography variant="h6" gutterBottom>
                    Bar Chart
        </Typography>
                <Typography variant="body2" gutterBottom>
                    A bar chart provides a way of showing data values represented as
                    vertical bars.
        </Typography>

                <Spacer mb={6} />
                
                <ChartWrapper>
                    {data1.length ? 
                        <Bar data={data} options={options} /> : <CircularProgress />
                    }
                </ChartWrapper>
            </CardContent>
        </Card>
    );
}

export default withTheme(BarChart);
