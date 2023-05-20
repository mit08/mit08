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
        let url = `https://api.jsonbin.io/v3/b/6416a862c0e7653a058a80af`;
        


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
                                <h5 className="card-title">    City: {element.city}</h5>
                                <p className="card-text">
                                    population:{element["population 2"]}<br />
                                    state: {element.admin}
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