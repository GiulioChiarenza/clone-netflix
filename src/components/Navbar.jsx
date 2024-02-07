
import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";



const Navbar=()=>(
    
        <nav className="navbar navbar-expand-lg navbar-dark custom-navbar" >
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img src="https://images.ctfassets.net/y2ske730sjqp/1aONibCke6niZhgPxuiilC/2c401b05a07288746ddf3bd3943fbc76/BrandAssets_Logos_01-Wordmark.jpg?w=940" alt="Logo" className="logo-image" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
<Link className="nav-link fw-bold" to='/'>
Home
</Link>
                  {/* <a className="nav-link fw-bold" href="#">
                    Home
                  </a> */}
                </li>
                <li className="nav-item">
<Link className="nav-link fw-bold" to='/TVShows'>
TV Shows
</Link>
                  {/* <a className="nav-link fw-bold" href="#">
                    TV Shows
                  </a> */}
                </li>
                <li className="nav-item">
<Link className="nav-link fw-bold" to=''>
Movies
</Link>
                  {/* <a className="nav-link fw-bold" href="#">
                    Movies
                  </a> */}
                </li>
                <li className="nav-item">
<Link className="nav-link fw-bold" to=''>
Recently Added
</Link>
                  {/* <a className="nav- fw-bold fw-bold" href="#">
                    Recently Added
                  </a> */}
                </li>
                <li className="nav-item">
<Link className="nav-link fw-bold" to=''>
My List
</Link>
                  {/* <a className="nav- fw-bold fw-bold" href="#">
                    My List
                  </a> */}
                </li>
              </ul>
              <div className="d-flex align-items-center">
                <i className="bi bi-search icons"></i>
                <div id="kids" className="fw-bold">KIDS</div>
                <i className="bi bi-bell icons"></i>
                <i className="bi bi-person-circle icons"></i>
              </div>
            </div>
          </div>
        </nav>
      
      

)
export default Navbar 