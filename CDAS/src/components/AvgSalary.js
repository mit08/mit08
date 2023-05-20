

import React, { Component } from 'react'
import "../css/cardback.css"
export default class UpdateCovid19Data extends Component {
    constructor(props) {
        super(props);
        //state in react
        this.state = {
            finalData: [],
        }
    }

    async componentDidMount() {
        let url = `https://api.jsonbin.io/v3/b/6426dc9bace6f33a2201ba7f`;


        let data = await fetch(url);
        let parsedData = await data.json()
        console.log("data", parsedData.record);
        this.setState({
            finalData: parsedData.record
        })
    }
    render() {
        return (
            <div className='row'>


                {this.state.finalData.map((element, index) => {
                    return <div key={index} className=" col-sm-12 col-md-6 col-lg-4">

                        <div className="card bgnew" style={{ width: "18rem" }}>
                            <div className="card-body">
                                <h5 className="card-title">    
                                City: {element.City}</h5><></>
                                <p className="card-text">
                                Surveys :{element.Surveys}<br/>
                                AVERAGE SALARY:{element["AVERAGE SALARY / YEAR"]}<br/>
                                
                                </p>
                                
                            </div>
                        </div>

                        <br />
                    </div>
                })}


            </div>
        )
    }
}