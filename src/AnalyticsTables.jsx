import { Table } from 'antd';
import { useState, useEffect } from 'react';

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

    useEffect(async () => {
        let result = await fetch('/analytics');
        let responseJson = await result.json()
        setDataSource(responseJson)
    }, [])
    return <Table columns={columns} dataSource={dataSource} />
}

export default AnalyticsTable;