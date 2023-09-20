// import React, { useEffect, useState } from 'react';
// import { db } from '../FirebaseConfig';
// import { get, ref, set, child, update, remove } from 'firebase/database'

// const FetchDataFromFirebase = () => {

//     const [fetchedData, setFetchedData] = useState();

//     useEffect(() => {
//         get(ref(db))
//         .then((snapshot) => {
//             if(snapshot.exists()){
//                 setFetchedData(snapshot.val())
//             }
//         })
//     },[])
//     return fetchedData
// }
// export default FetchDataFromFirebase;


import React, { useEffect, useState } from 'react';
import { db } from '../FirebaseConfig';
import { get, ref } from 'firebase/database'

const FetchDataFromFirebase = () => {
    const [fetchedData, setFetchedData] = useState(null); // Initialize with null for loading state
    const [error, setError] = useState(null); // For error handling

    useEffect(() => {
        const fetchData = async () => {
            try {
                const snapshot = await get(ref(db));
                if (snapshot.exists()) {
                    setFetchedData(snapshot.val());
                } else {
                    // Handle the case when no data exists
                    setFetchedData({});
                }
            } catch (error) {
                // Handle any errors that occur during the fetch
                setError(error.message);
            }
        };

        fetchData();
    }, []);

    // Handle loading state
    if (fetchedData === null) {
        return <div>Loading...</div>;
    }

    // Handle errors
    if (error) {
        return <div>Error: {error}</div>;
    }

    // Render your fetched data
    return fetchedData;
};

export default FetchDataFromFirebase;

