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
        let url = `https://api.jsonbin.io/v3/b/64280d0face6f33a22027068`;


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

                        <div className="card bgnew " style={{ width: "18rem" }}>
                            <div className="card-body">
                                <h5 className="card-title">    
                                City: {element.City}</h5>
                                <p className="card-text">
                                AREA :{element.AREA}<br/>

                                {/* POPULATION :{element.POPULATION}<br/> */}

                              NO OF SCHOOL:{element["NO OF SCHOOL"]}<br/>
                                
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