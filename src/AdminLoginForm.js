import React, {Component} from 'react';

class AdminLoginForm extends Component {

    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);

        var url = 'http://localhost:9000/admin_login/';

        fetch(url, {
            method: 'POST',
            body: data,
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="name">Admin name</label>
                <input id="name" name="name" type="text" />

                <label htmlFor="password">Admin password</label>
                <input id="password" name="password" type="password" />

                <button>Admin Login</button>
            </form>
        );
    }

}


export default AdminLoginForm;