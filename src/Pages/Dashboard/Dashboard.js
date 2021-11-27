import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import Pay from '../DashboardContent/Pay/Pay';
import Header from '../Shared/Header/Header';
import Sidebar from '../Shared/Sidebar/Sidebar';

const Dashboard = () => {
    
    return (
        <div>
            <Header></Header>
            <Sidebar></Sidebar>
            <div>
          
            </div>
        </div>
        
    );
};

export default Dashboard;