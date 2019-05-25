import React, {Component} from 'react';

class Admins extends Component {

    constructor() {
        super();
        this.state = {
            admins: [],
        };
    }

    componentDidMount() {
        var url = "http://localhost:9000/admins"

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
            let admins = data.map((admin) => {
                return (
                    <div key={admin.id}>
                        <div className="admin">{admin.name}</div>
                        <div>{admin.name}</div>
                    </div>
                )
            })
            this.setState({admins: admins})
        })
    }

    render() {
        return (
            <div className="admins">
                {this.state.admins}
            </div>
        )
    }
}

export default Admins;