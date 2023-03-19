import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
export default function Search(props) {
    let [finalData, setFinatData] = useState([]);
    let [strcheck, setStrcheck] = useState(props.str ? props.str : "delhi")
    const navigate = useNavigate();
    useEffect(async () => {
        // await navigate("/");
        // await navigate("/Search");
        async function fetchData() {
            try {
                let url = `https://json.extendsclass.com/bin/8a056bf555b5`;
                let data = await fetch(url);
                let parsedData = await data.json()
                console.log("data", parsedData);
                setFinatData(parsedData);
            } catch (e) {
                console.error(e);
            }
        };
        fetchData();
    }, []);
    return (
        <div id="searchh" className='row'>
            {finalData.map((element, index) => {
                if (element.city.toLowerCase().search(strcheck.toLowerCase()) !== -1)
                    return <div key={index} className=" col-sm-12 col-md-6 col-lg-4">

                        <div className="card" style={{ width: "18rem" }}>
                            {/* <img src="..." className="card-img-top" alt="..."> */}
                            <div className="card-body">
                                <h5 className="card-title">    City: {element.city}</h5>
                                <p className="card-text">
                                    population:{element["population 2"]}<br />
                                    state: {element.admin}
                                    {/* population: {` ${element.} `} <br />
                                    per_sq_km:{element.}<br />
                                    growth_rate:{element.} */}
                                </p>
                                {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                            </div>
                        </div>

                        <br />
                    </div>
            })}


        </div>
    )
}
