import React, {Component} from 'react';

class Purchases extends Component {

    constructor() {
        super();
        this.state = {
            purchases: [],
        };
    }

    componentDidMount() {
        var url = "http://localhost:9000/purchases"

        fetch(url, {
            mode: 'cors',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin':'http://localhost:3000',
            },
            method: 'GET',
        })
            .then(results => {
                return results.json();
            }).then(data => {
            let purchases = data.map((purchase) => {
                return (
                    <div key={purchase.id}>
                        <div className="purchase">{purchase.name}</div>
                        <div>{purchase.user_id}</div>
                        <div>{purchase.product_id}</div>
                        <div>{purchase.date}</div>
                        <div>{purchase.amount}</div>
                    </div>
                )
            })
            this.setState({purchases: purchases})
        })
    }

    render() {
        return (
            <div className="purchases">
                {this.state.purchases}
            </div>
        )
    }
}

export default Purchases;