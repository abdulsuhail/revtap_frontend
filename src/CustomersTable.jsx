import { useState, useEffect } from 'react';
import Table from './components/Table';
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
function CustomerTable(props) {
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {

    async function fetchData() {
      let result = await fetch('/customer');
      let responseJson = await result.json()
      setDataSource(responseJson.data)

    }
    fetchData();
  }, [])
  return (
    <div>
      <StyledTitle level={2} >Customers</StyledTitle>
      <Table
        columns={columns}
        dataSource={dataSource}
        pagination={{ pageSize: 2 }}
      />
    </div>
  )
}

export default CustomerTable;