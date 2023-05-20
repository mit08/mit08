import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import "../css/table.css"

function Compare() {
    let [obj11, setobj11] = useState({});
    let [obj12, setobj12] = useState({});
    // let [obj21, setobj21] = useState({});
    // let [obj22, setobj22] = useState({});
    let [obj31, setobj31] = useState({});
    let [obj32, setobj32] = useState({});
    let [obj41, setobj41] = useState({});
    let [obj42, setobj42] = useState({});
    let [str1, setstr1] = useState("");
    let [str2, setstr2] = useState("");
    let [r1,setr1]=useState([]);
    let [r2,setr2]=useState([]);
    let [r3,setr3]=useState([]);
    let [r4,setr4]=useState([]);
    let [r5,setr5]=useState([]);
    useEffect(async () => {
        

        async function fetchData() {
            try {
                let url = `https://api.jsonbin.io/v3/b/6416a862c0e7653a058a80af`;//population
                let url2 = 'https://api.jsonbin.io/v3/b/64293493ebd26539d0a2dd3a';//pollution
                let url3 = 'https://api.jsonbin.io/v3/b/6426dc9bace6f33a2201ba7f';//avgsalary
                let url4 = 'https://api.jsonbin.io/v3/b/64280d0face6f33a22027068';//home
              //  let url5 = 'https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=9aa4ae989e949e6681c74fe42c4d4490';//weather

                let d1 = await fetch(url);
                let d2 = await fetch(url2);
                let d3 = await fetch(url3);
                let d4 = await fetch(url4);
               // let d5 = await fetch(url5);
                let data1 = await d1.json();
                setr1(data1.record);
                let data2 = await d2.json();
                setr2(data2.record);
                let data3 = await d3.json();
                setr3(data3.record);
                let data4 = await d4.json();
                setr4(data4.record);
                // let data5 = await data.json();
                // let r5 = data1.record;
                // let pollution = await data2.json().record;
                // let d3 = await data3.json().record["AVERAGE SALARY / YEAR"];
                // let d4 = await data4.json().record.AREA;
                // let d5 = await (data5.json().main.temp-273.15).toFixed(2);
                console.log("data1", r1);
                console.log("data2", r2);
                console.log("data3", r3);
                console.log("data4", r4);
                // console.log("data5", r5);
                // setFinatData(parsedData.record);
            } 
            catch (e) {
                console.error(e);
            }
        };
        fetchData();
    }, []);
    function filterData() {
        //population

        for (var i = 0; i < r1.length; i++) {

            if (r1[i].city.toLowerCase() === str1.toLowerCase()) {
                setobj11(r1[i]);
            }
            if (r1[i].city.toLowerCase() === str2.toLowerCase()) {
                setobj12(r1[i]);
            }
        }

        // // pollution
        // for (var i = 0; i < r2.length; i++) {

        //     if (r2[i].City.toLowerCase() === str1.toLowerCase()) {
        //         setobj21(r2[i]);
        //         console.log(r2[i]);
        //     }
        //     if (r2[i].City.toLowerCase() === str2.toLowerCase()) {
        //         setobj22(r2[i]);
        //     }
        // }
        //avg salary
        for (var i = 0; i < r3.length; i++) {

            if (r3[i].City.toLowerCase() === str1.toLowerCase()) {
                setobj31(r3[i]);
            }
            if (r3[i].City.toLowerCase() === str2.toLowerCase()) {
                setobj32(r3[i]);
            }
        }
        // //home
        for (var i = 0; i < r4.length; i++) {

            if (r4[i].City.toLowerCase() === str1.toLowerCase()) {
                setobj41(r4[i]);
            }
            if (r4[i].City.toLowerCase() === str2.toLowerCase()) {
                setobj42(r4[i]);
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
   

            <table className=" table table-striped">
                <thead>

                    <br/>
                    <br/>
                    <tr>

                        <th scope="col">City</th>
                        <th scope="col">{obj11.city}</th>
                        <th scope="col">{obj12.city}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>

                        <td>State</td>
                        <td> {obj11.admin}</td>
                        <td>{obj12.admin}</td>
                    </tr>
                    <tr>

                        <td>Population</td>
                        <td>{obj11["population 2"]}</td>
                        <td>{obj12["population 2"]}</td>
                    </tr>
                    {/* <tr>

                        <td>Pollution</td>
                        <td>{obj21.city}</td>
                        <td>{obj22.City}</td>
                    </tr> */}
                    <tr>

                        <td>Avg Sallary</td>
                        <td>{obj31["AVERAGE SALARY / YEAR"]}</td>
                        <td>{obj32["AVERAGE SALARY / YEAR"]}</td>
                    </tr>
                    
                    <tr>
                        <td>Area</td>
                        <td>{obj41.AREA}</td>
                        <td>{obj42.AREA}</td>
                    </tr>
                    <tr>
                        <td>No. of Schools</td>
                        <td>{obj41["NO OF SCHOOL"]}</td>
                        <td>{obj42["NO OF SCHOOL"]}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}




export default Compare;