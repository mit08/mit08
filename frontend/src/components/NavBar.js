import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import Search from './Search';
import { render } from 'react-dom';
import Weather from './Weather';
export default function Navbar(props) {
    const [str, setstr] = useState("mumb");
    // function replac(){
    // // const container = document.getElementById('searchh');

    // this.render();
    // }
    // function replace(){
    // // setTimeout(replac, 3000);
    // window.location.replace("/Search");
    // }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="#">CDAS</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="#">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/ReviewForm">review & rating </Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link " to="/Practice" tabIndex="-1" aria-disabled="true">population</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " to="/Polution" tabIndex="-1" aria-disabled="true">polution</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link " to="/Waterqulity" tabIndex="-1" aria-disabled="true">WaterQulity</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " to="/LoginUser" tabIndex="-1" aria-disabled="true">Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " to="/Register" tabIndex="-1" aria-disabled="true">Signup</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " to="/Compare" tabIndex="-1" aria-disabled="true">Compare</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " to="/Weather" tabIndex="-1" aria-disabled="true">Weather</Link>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" id="search1" type="Search" placeholder="Search city" aria-label="Search" onChange={(event) => setstr(event.target.value)} />
                            {/* <Link className="btn btn-outline-success mx-2" to="/Search" tabIndex="-1" aria-disabled="true" onClick={()=>{props.func(str)}}>Search</Link> */}
                            <Link className="btn btn-outline-success mx-2" to="/Search" aria-disabled="true" onClick={props.func(str)}>Search</Link>
                            {/* <button className="btn btn-outline-success mx-2" tabIndex="-1" aria-disabled="true" onClick={()=>{props.func(str);replace()}}>Search</button> */}
                        </form>
                    </div>
                </div>
            </nav>

        </div>
    )
}
