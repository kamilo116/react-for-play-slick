import React, {Component} from 'react';

class PurchaseForm extends Component {

    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);

        var url = 'http://localhost:9000/purchase/';

        fetch(url, {
            method: 'POST',
            body: data,
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="user_id">Purchase name</label>
                <input id="user_id" name="user_id" type="number" />

                <label htmlFor="product_id">Description</label>
                <input id="product_id" name="product_id" type="number" />

                <label htmlFor="date">Description</label>
                <input id="date" name="date" type="text" />

                <label htmlFor="amount">Description</label>
                <input id="amount" name="amount" type="number" />

                <button>Make Purchase</button>
            </form>
        );
    }
}

export default PurchaseForm;