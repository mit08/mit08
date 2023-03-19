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

        url = "https://api.jsonbin.io/v3/b/64169d09c0e7653a058a7cbd"

        headers = {
            "X-Master-Key": "$2b$10$xXBJg59HuCSE5aUpSg4nAevfJd5ICNtXUqo.DWOT1oEWXmkrOtwe"
        }

        response = requests.get(url, headers = headers)

        //         if response.status_code == 200:

        //             data = response.json()
        //         print(data)
        // else:
        //         print("Error accessing JSON data:", response.status_code)

        // let url = `https://api.jsonbin.io/v3/b/64169d09c0e7653a058a7cbd`
        // X - Master - Key = '$2b$10$xXBJg59HuCSE5aUpSg4nAevfJd5ICNtXUqo.DWOT1oEWXmkrOtwe'
        // X - Acess - Key = '$2b$10$84WxqqFMltQAgaCyXdC2IuyyHGkbU1yVkgMDyZ46nZOQUeqKwVM / W'
        //     ;


        let data = await fetch(response, {
            mode: 'no-cors',
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            // body: JSON.stringify(ob)
        });


        let parsedData = await data.json()
        console.log("data", parsedData);
        this.setState({
            finalData: parsedData
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
}