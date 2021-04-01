import React from 'react';
import CustomersTable from './CustomersTable';
import OrdersTable from './OrdersTable';
import AnalyticsTable from './AnalyticsTables'
import 'antd/dist/antd.css';
import './App.css';

const App = () => (
  <div className="App">
    
    <CustomersTable />
    <OrdersTable />
    <AnalyticsTable />
  </div>
);

export default App;
