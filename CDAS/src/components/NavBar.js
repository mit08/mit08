import React from 'react'
// import "../css/nav.css"
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { auth } from '../firebase';

export default function Navbar(props) {
    //    const [str, setstr] = useState([]);
    const [str, setstr] = useState("delhi");
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-primary border border-3 border-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand fs-1 text-light p-2" to="#">CDAS</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 "  >
                        
                            <li className="nav-item">
                                <Link className="nav-link text-light " to="/Home" tabIndex="-1" aria-disabled="true">General Info</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light " to="/Practice" tabIndex="-1" aria-disabled="true">population</Link>
                            </li>
                          
                           
                            <li className="nav-item">
                                <Link className="nav-link text-light " to="/AvgSalary" tabIndex="-1" aria-disabled="true">Qulity of Living</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light " to="/AirPollution" tabIndex="-1" aria-disabled="true">Pollution</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light " to="/Weather" tabIndex="-1" aria-disabled="true">Weather</Link>
                            </li>
                            
                            <li className="nav-item">
                                <Link className="nav-link text-light " to="/Compare" tabIndex="-1" aria-disabled="true">Compare</Link>
                            </li>
                            {!auth.currentUser &&<li className="nav-item">
                                <Link className="nav-link text-light " to="/login" tabIndex="-1" aria-disabled="true">Login</Link>
                            </li>}

                            {!auth.currentUser &&<li className="nav-item">
                                <Link className="nav-link text-light " to="/signup" tabIndex="-1" aria-disabled="true">Signup</Link>
                            </li>}
                        </ul>
                        <form className="d-flex">
                     {/* aria-label="Search"   onChange={(event) => setstr(event.target.value)}  */}
                            <input className="form-control me-2" id="search1" type="search" placeholder="Search city"  />
                            {/* <Link className="btn btn-outline-success mx-2" to="/Search" tabIndex="-1" aria-disabled="true" onClick={()=>{props.func(str)}}>Search</Link> */}
                            <Link className="btn btn-dark mx-2" to="/Search" aria-disabled="true" onClick={props.func(str)}>Search</Link>
                            {/* <button className="btn btn-outline-success mx-2" tabIndex="-1" aria-disabled="true" onClick={()=>{props.func(str);replace()}}>Search</button> */}
                        </form>
                        <div>{auth.currentUser}</div>
                    </div>
                </div>
            </nav>
        </div>
    )
}