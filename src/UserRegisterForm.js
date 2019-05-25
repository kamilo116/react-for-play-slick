import React, {Component} from 'react';

class UserRegisterForm extends Component {

    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);

        var url = 'http://localhost:9000/user_register/';

        fetch(url, {
            method: 'POST',
            body: data,
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="name">User name</label>
                <input id="name" name="name" type="text" />

                <label htmlFor="password">Admin password</label>
                <input id="password" name="password" type="password" />

                <label htmlFor="email">email</label>
                <input id="email" name="email" type="email" />

                <label htmlFor="phone">User phone</label>
                <input id="phone" name="phone" type="number" />

                <label htmlFor="postal">User postal</label>
                <input id="postal" name="postal" type="postal" />

                <label htmlFor="country">User country</label>
                <input id="country" name="country" type="text" />

                <label htmlFor="city">city</label>
                <input id="city" name="city" type="text" />

                <label htmlFor="street">User street</label>
                <input id="street" name="street" type="text" />

                <label htmlFor="home_number">home_number</label>
                <input id="home_number" name="home_number" type="number" />

                <label htmlFor="flat_number">Flat Number</label>
                <input id="flat_number" name="flat_number" type="number" />

                <button>User Register</button>
            </form>
        );
    }

}


export default UserRegisterForm;