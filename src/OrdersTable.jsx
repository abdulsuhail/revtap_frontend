import { Table} from 'antd';
import { useState, useEffect } from 'react';


const columns = [
    {
        title: 'ID',
        dataIndex: '_id',
        key: '_id',
    },
    {
        title: 'Product Name',
        dataIndex: 'product',
        key: 'product',
    },
    {
        title: 'Price',
        dataIndex: 'price',
        key: 'price',
    },
    {
        title: 'Quantity',
        dataIndex: 'quantity',
        key: 'quantity',
    },
    {
        title: 'CreatedAt',
        dataIndex: 'createdAt',
        key: 'createdAt',
    }
];

function OrdersTable() {
    const [dataSource, setDataSource] = useState([]);

    useEffect(async () => {
        let result = await fetch('/order');
        let responseJson = await result.json()
        setDataSource(responseJson.data)
    }, [])
    return <Table columns={columns} dataSource={dataSource} />
}

export default OrdersTable;