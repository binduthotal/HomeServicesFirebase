import React, { useEffect, useState }  from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { db } from '../FirebaseConfig';
import { ref, get, remove, update } from 'firebase/database'

const OffersCRUD = () => {

  const [offersData, setOffersData] = useState([])
  const [keys, setKeys] = useState()

  const naviate = useNavigate();

  useEffect(() => {
    get(ref(db))
      .then((snapShot) => {
        setOffersData(snapShot.val().offers);
        setKeys(snapShot.val().keys);
        console.log(keys)
      })
  }, [])

  const deleteOffer = (data) => {
    const id = data - 1;
    if (!window.confirm("Are you sure you want to delete")) {
      return false;
    }
    else {
      remove(ref(db, 'offers/' + id))
        .then(() => {
          alert("Offer deleted Successfully!")
          naviate("/adminPanel/offersCrud")
        })
        .catch(err => alert("Error deleting offer :" + err.message))

      //    Increase Service Key value every time and set to Db
      console.log("keys:", keys)

      update(ref(db, 'keys/'), {
        offersKey: keys.offersKey - 1,

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
            <caption>Offers Data</caption>
            <thead>
                <tr>
                    <th>Offer Id</th>
                    <th>Service Id</th>
                    <th>Service Name</th>
                    <th>Description</th>
                    <th>Expiry date</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    offersData.map(offer => {
                        return (
                            <tr key={offer.id}>
                                <td>{offer.id}</td>
                                <td>{offer.serviceId}</td>
                                <td>{offer.service}</td>
                                <td>{offer.description}</td>
                                <td>{offer.expiryDate}</td>
                                <td><NavLink to={`editOffer/${offer.id}`}><button className='btn btn-success'>Edit</button></NavLink></td>
                                <td><button className='btn btn-danger' onClick={() => deleteOffer(offer.id)}>Delete</button></td>
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

export default OffersCRUD;
