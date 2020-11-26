import { Table } from 'antd';
import { useState, useEffect } from 'react';

const columns = [
    {
      title: 'ID',
      dataIndex: '_id',
      key: '_id',
    },
    {
      title: 'First Name',
      dataIndex: 'firstName',
      key: 'firstName',
    },
    {
      title: 'Last Name',
      dataIndex: 'lastName',
      key: 'lastName',
    },
    {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
      },
      {
        title: 'Created',
        dataIndex: 'createdAt',
        key: 'createdAt',
      },
  ];
function CustomerTable(props)
{   
    const [dataSource, setDataSource] = useState([]);

    useEffect(async ()=>{
        let result = await fetch('/customer');
        let responseJson = await result.json()
        setDataSource(responseJson.data)
    },[])
    return <Table columns={columns} dataSource={dataSource} />
}

export default CustomerTable;