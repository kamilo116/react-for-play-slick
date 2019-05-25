import React, {Component} from 'react';

class Users extends Component {

    constructor() {
        super();
        this.state = {
            users: [],
        };
    }

    componentDidMount() {
        var url = "http://localhost:9000/users"

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
            let users = data.map((user) => {
                return (
                    <div key={user.id}>
                        <div className="user">{user.name}</div>
                        <div>{user.name}</div>
                        <div>{user.email}</div>
                        <div>{user.phone}</div>
                        <div>{user.postal}</div>
                        <div>{user.country}</div>
                        <div>{user.city}</div>
                        <div>{user.street}</div>
                        <div>{user.home_number}</div>
                        <div>{user.flat_number}</div>
                    </div>
                )
            })
            this.setState({users: users})
        })
    }

    render() {
        return (
            <div className="users">
                {this.state.users}
            </div>
        )
    }
}

export default Users;