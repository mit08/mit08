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
        let url = ``;

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
                                    {/* {element.category} */}
                                    {/* population: {` ${element.population_2011} `} <br /> */}
                                    {/* per_sq_km:{element.population_density_per_sq_km___2011}<br /> */}
                                    {/* growth_rate:{element.decadal_population_growth_rate___2001_2011} */}
                                </p>
                                {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                            </div>
                        </div>

                        <br />
                    </div>
                })}
                {/* <ListView
                    dataSource={this.state.dataSource}
                    renderRow={data => (
                        <View style={styles.container}>
                            <Image
                                source={{ uri: imageSource }}
                                style={styles.img}
                            />
                            <Text>{data}</Text>
                        </View>)}
                /> */}
            </div>
        )
    }
}