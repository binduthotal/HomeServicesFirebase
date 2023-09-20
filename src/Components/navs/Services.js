import React, { useEffect, useState } from 'react';
import '../assets/styles/main.css'
import { db } from '../FirebaseConfig'
import { ref, set, child, get, update, remove } from 'firebase/database'
import { NavLink } from 'react-router-dom';
import BreadCrumbs from './BreadCrumbs';
import FetchDataFromFirebase from './FetchDataFromFirebase'

const Services = () => {

    const [servicesData, setServicesData] = useState([])

    // const fetchedData = FetchDataFromFirebase();

    // useEffect(() => {
    //     // Now you can work with fetchedData, but remember it's asynchronous
    //     console.log(fetchedData);
    // }, [fetchedData]);

    // Example to read
    // const addData = (e) => {
    //     e.preventDefault();

    //     //    Get service key
    //     const dbRef = ref(db);
    //     get(child(dbRef, 'keys/'))
    //         .then((snapShot) => {
    //             if (snapShot.exists()) {
    //                 const serviceKey = snapShot.val().serviceKey

    //                 //   Adding Data
    //                 set(ref(db, "Services/" + serviceKey), {
    //                     // Name: name,
    //                     // RollNo: rollNo,
    //                     // Section: section,
    //                     // Gender: gender
    //                 })
    //                     .then(() => {
    //                         alert("Data Stored SUccessfully")
    //                     })
    //                     .catch((error) => {
    //                         alert("Unsuccessful" + error)
    //                     })

    //                 //    Increase Service Key value every time and set to Db
    //                 update(ref(db, 'keys/'), {
    //                     serviceKey: snapShot.val().serviceKey + 1,

    //                 })
    //             }
    //         })
    //         .catch((error) => {
    //             alert("Unsuccessful" + error)
    //         })
    // })

    useEffect(() => {
        const dbRef = ref(db);

        get(child(dbRef, "services"))
            .then((snapShot) => {
                if (snapShot.exists()) {
                    setServicesData(snapShot.val());
                }
            })
    }, [])


    return (

        <div className='body-container service-container'>

            {/* BreadCrumbs */}
            <div className="breadcrumb-block">
                <BreadCrumbs name="Services" />
                {/* <h1>Services</h1> */}
            </div>

            <div className='container'>
                <div className='row'>
                    {
                        servicesData.map(services => {
                            return (
                                <div className='col-lg-3 col-md-3 col-sm-6' key={services.id}>
                                    <div className='service-list' >
                                        <NavLink className="service-list-navlink" to={`/OnClickServiceBooking/${services.id}`} ><p >{services.name}</p></NavLink>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

            </div>
        </div>
    );
}

export default Services;
