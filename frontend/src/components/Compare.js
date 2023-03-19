import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';



function Compare() {
    let [obj1, setobj1] = useState({});
    let [obj2, setobj2] = useState({});

    let [str1, setstr1] = useState("");
    let [str2, setstr2] = useState("");
    let [finalData, setFinatData] = useState([]);
    // let [strcheck, setStrcheck] = useState(props.str ? props.str : "delhi")
    // const navigate = useNavigate();
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
    function filterData() {
        for (var i = 0; i < finalData.length; i++) {

            if (finalData[i].city.toLowerCase() === str1.toLowerCase()) {
                setobj1(finalData[i]);
            }
            if (finalData[i].city.toLowerCase() === str2.toLowerCase()) {
                setobj2(finalData[i]);
            }
        }

    }

    return (
        <div>
            <form className="d-flex">
                <input className="form-control me-2 " id="search1" type="Search" placeholder="Search city 1" aria-label="Search" onChange={(event) => setstr1(event.target.value)} />
                <input className="form-control me-2 ml-2" id="search1" type="Search" placeholder="Search city 2" aria-label="Search" onChange={(event) => setstr2(event.target.value)} />


                <Link onClick={filterData} className="btn btn-outline-success mx-2" aria-disabled="true" >Compare</Link>

            </form>
            {/* {finalData.map((element, index) => {
                // if (element.city.toLowerCase().search(strcheck.toLowerCase()) !== -1)
                return <div key={index} className=" col-sm-12 col-md-6 col-lg-4">

                    <div className="card" style={{ width: "18rem" }}>

                        {/* {element.city}

                        {element["population 2"]}<br />
                        {element.admin} 
                    </div>
                </div>
            })} */}

            <table className=" table table-striped">
                <thead>
                    <tr>

                        <th scope="col">City</th>
                        <th scope="col">{obj1.city}</th>
                        <th scope="col">{obj2.city}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>

                        <td>State</td>
                        <td> {obj1.admin}</td>
                        <td>{obj2.admin}</td>
                    </tr>
                    <tr>

                        <td>Population</td>
                        <td>{obj1["population 2"]}</td>
                        <td>{obj2["population 2"]}</td>
                    </tr>


                </tbody>
            </table>
        </div>
    )
}




export default Compare;