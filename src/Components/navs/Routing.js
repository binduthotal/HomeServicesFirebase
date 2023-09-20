import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Services from './Services';
import BookService from './BookService';
import Offers from './Offers';
import ContactUs from './ContactUs';
import NoPage from './NoPage';
import OnClickServiceBooking from './OnClickServiceBooking';
import AdminLogin from '../adminDashboard/AdminLogin';
import ServiceCRUD from '../adminDashboard/ServiceCRUD';
import OffersCRUD from '../adminDashboard/OffersCRUD';
import AddService from '../adminDashboard/AddService';
import EditService from '../adminDashboard/EditService';
import AddOffer from '../adminDashboard/AddOffer';
import EditOffer from '../adminDashboard/EditOffer';
import AdminPanel from '../adminDashboard/AdminPanel';

const Routing = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/services' element={<Services />} />
                <Route path='/bookaService' element={<BookService />} />
                <Route path='/offers' element={<Offers />} />
                <Route path='/contactUs' element={<ContactUs />} />
                <Route path='/OnClickServiceBooking/:serviceId' element={<OnClickServiceBooking />} />
                <Route path='*' element={<NoPage />} />
                <Route path='/admin' element={<AdminLogin />} />
                <Route path='/adminPanel' element={<AdminPanel />} >
                    <Route path='' element={<ServiceCRUD />}>
                        <Route path='' element={<AddService />} />
                    </Route>
                    <Route path='editService/:serviceId' element={<EditService />} />
                    <Route path='offersCrud' element={<OffersCRUD />}>
                        <Route path='' element={<AddOffer />} />
                        <Route path='editOffer/:offerId' element={<EditOffer />} />
                    </Route>
                </Route>
            </Routes>
        </div>
    );
}

export default Routing;
