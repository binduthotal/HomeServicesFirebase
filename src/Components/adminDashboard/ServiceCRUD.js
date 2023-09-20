import React, { useEffect, useState } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { db } from '../FirebaseConfig';
import { ref, get, remove, update } from 'firebase/database'



const ServiceCRUD = () => {

  const [servicesData, setServicesData] = useState([])
  const [keys, setKeys] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    get(ref(db))
      .then((snapShot) => {
        setServicesData(snapShot.val().services);
        setKeys(snapShot.val().keys);
      })
  }, [])

  const deleteService = (data) => {
    const id = data - 1;
    if (!window.confirm("Are you sure you want to delete")) {
      return false;
    }
    else {
      remove(ref(db, 'services/' + id))
        .then(() => {
          alert("Service deleted Successfully!")
          navigate("/adminPanel")
        })
        .catch(err => alert("Error deleting service :" + err.message))

      //    Decrease Service Key value every time and set to Db
      update(ref(db, 'keys/'), {
        serviceKey: keys.serviceKey - 1,

      })
    }
  }

  return (
    <div className='dashboard'>
      <div className="crud-links btn-group me-2" role="group" aria-label="Second group">
        <Outlet />
      </div>
      <div className='data-display'>
        <table id="myTable" className="table table-bordered table-striped caption-top text-center">
          <caption>Services Data</caption>
          <thead>
            <tr>
              <th>Service Id</th>
              <th>Name</th>
              <th>Description</th>
              <th>Quote</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
              servicesData.map(service => {
                return (
                  <tr key={service.id}>
                    <td>{service.id}</td>
                    <td>{service.name}</td>
                    <td>{service.description}</td>
                    <td>{service.qoute}</td>
                    <td><NavLink to={`editService/${service.id}`}><button className='btn btn-success'>Edit</button></NavLink></td>
                    {/* <td><NavLink to={`deleteService/${service.id}`}><button className='btn btn-danger'>Delete</button></NavLink></td> */}
                    <td><button className='btn btn-danger' onClick={() => deleteService(service.id)}>Delete</button></td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ServiceCRUD;

