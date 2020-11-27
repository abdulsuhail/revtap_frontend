import Table from './components/Table';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Typography } from 'antd';

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
            let result = await fetch('/analytics');
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
                pagination={{ pageSize: 2 }}
            />
        </div>
    )
}

export default AnalyticsTable;