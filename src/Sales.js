import React, {Component} from 'react';

class Sales extends Component {

    constructor() {
        super();
        this.state = {
            sales: [],
        };
    }

    componentDidMount() {
        var url = "http://localhost:9000/sales"

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
            let sales = data.map((sale) => {
                return (
                    <div key={sale.id}>
                        <div className="sales">{sale.name}</div>
                        <div>{sale.product_id}</div>
                        <div>{sale.price}</div>
                        <div>{sale.start}</div>
                        <div>{sale.end}</div>
                        <div>{sale.amount}</div>
                    </div>
                )
            })
            this.setState({sales: sales})
        })
    }

    render() {
        return (
            <div className="sales">
                {this.state.sales}
            </div>
        )
    }
}

export default Sales;