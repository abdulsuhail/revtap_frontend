import Table from './components/Table';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Typography } from 'antd';
import { Chart, LineAdvance } from 'bizcharts';

const { Title } = Typography;

const StyledTitle = styled(Title)`
    padding-top: 20px;
`;
const columns = [
    {
        title: 'Day',
        dataIndex: 'day',
        key: 'day',
    },
    {
        title: 'Total Price',
        dataIndex: 'totalPrice',
        key: 'totalPrice',
    },
    {
        title: 'Orders Count',
        dataIndex: 'ordersCount',
        key: 'ordersCount',
    },
];

function AnalyticsTable() {
    const [dataSource, setDataSource] = useState([]);

    useEffect(() => {

        async function fetchData() {
            let result = await fetch('/analytics/?startDate=2020-10-01&endDate=2020-11-30');
            let responseJson = await result.json()
            setDataSource(responseJson)

        }
        fetchData();
    }, [])
    return (
        <div>
            <StyledTitle level={2}>Analytics</StyledTitle>
            <Table
                columns={columns}
                dataSource={dataSource}
                pagination={{ pageSize: 50 }}
            />

            <Chart padding={[10, 20, 50, 40]} autoFit height={300} data={dataSource} >
                <LineAdvance
                    shape="smooth"
                    point
                    area
                    position="day*ordersCount"
                />
            </Chart>
        </div>
    )
}

export default AnalyticsTable;