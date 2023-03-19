import React, { Component } from 'react'


export default class UpdateCovid19Data extends Component {
    constructor(props) {
        super(props);
        //state in react
        this.state = {
            finalData: [],

        }
    }
    async componentDidMount() {
        let url = `https://api.data.gov.in/resource/ec21d99d-b915-47a3-9131-7b9f742cad9c?api-key=579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b&format=json`;

        let data = await fetch(url);
        let parsedData = await data.json()
        console.log("data", parsedData.records);
        this.setState({
            finalData: parsedData.records
        })
    }
    render() {
        return (
            <div className='row'>


                {this.state.finalData.map((element, index) => {
                    return <div key={index} className=" col-sm-12 col-md-6 col-lg-4">

                        <div className="card" style={{ width: "18rem" }}>
                            {/* <img src="..." className="card-img-top" alt="..."> */}
                            <div className="card-body">
                                <h5 className="card-title">{element.india_state_union_territory}</h5>
                                <p className="card-text">

                                    city:  {` ${element.city_town_village_area} `} <br />
                                    agency:   {element.agency}<br />
                                    no2:{element.no2}<br />
                                    so2: {element.so2}<br />

                                    {element.rspm_pm10}
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
}