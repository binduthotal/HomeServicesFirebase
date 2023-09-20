import React from 'react';
import BreadCrumbs from '../navs/BreadCrumbs';
import SideBar from './SideBar';
import { Outlet } from 'react-router-dom';

const AdminPanel = () => {
    return (
        <div className='body-container'>
            {/* BreadCrumbs */}
            <div className="breadcrumb-block">
                <BreadCrumbs name="Admin Dashboard" />
            </div>

            <div className='admin-panel'>
                <div className='row'>
                    <div className='col-2'>
                        <SideBar />
                    </div>
                    <div className='col-10'>
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminPanel;
