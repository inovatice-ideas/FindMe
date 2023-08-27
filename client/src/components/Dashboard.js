import React from 'react';
import { Tab } from '@rneui/themed';
const Dashboard = () => {
  const [index, setIndex] = React.useState(0);
  return (
    <>
      <Tab value={index} onChange={setIndex} dense
      indicatorStyle={{
        backgroundColor: 'black',
        height: 3,
      }}
      titleStyle={{
        color: 'black',
        fontWeight: 'bold',
        fontSize: 16,
      }}
      >
        <Tab.Item>Lost</Tab.Item>
        <Tab.Item>Found</Tab.Item>
        <Tab.Item>Contact Us</Tab.Item>
      </Tab>
    </>
  );
};

export default Dashboard;
