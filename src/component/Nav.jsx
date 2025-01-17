import React from 'react';
import { Link } from 'react-router-dom';
import AllRoutes from './AllRoutes';

const Nav = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
              {
                AllRoutes.map((route, index) =>{
                  return(
                    <li key={index}>
                      <Link className="nav-link active" to={route.Path}>{route.title}</Link>
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;