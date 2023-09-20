import React from 'react';
import { NavLink } from "react-router-dom";

const BreadCrumbs = (props) => {
  return (
    <div>
      {/* BreadCrumbs */}
      <div className="breadcrumb-container">
              {/* Bootstrap 5 BreadCrumb */}
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><NavLink to="/">Home</NavLink></li>
                        <li className="breadcrumb-item active" aria-current="page">{props.name}</li>
                    </ol>
                </nav>
                <h1>{props.name}</h1>
                    
                {/* Material UI BreadCrumb */}
                {/* <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="white" href="/">Home</Link>
          <Typography color="white">About</Typography>
        </Breadcrumbs> */}
            </div>
    </div>
  );
}

export default BreadCrumbs;
