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
        title: 'Created',
        dataIndex: 'createdAt',
        key: 'createdAt',
    }
];

function OrdersTable() {
    const [dataSource, setDataSource] = useState([]);
    useEffect(()=>{

        async function fetchData()
        {
            let result = await fetch('/order');
            let responseJson = await result.json()
            setDataSource(responseJson.data)
    
        }
        fetchData();
    },[])
    return (
    <div>
    <StyledTitle level={2}>Orders</StyledTitle>
    <Table 
        className="ant-table-content" 
        columns={columns} 
        dataSource={dataSource} 
        pagination={{ pageSize: 2 }}
        />
    </div>
    )
}

export default OrdersTable;