import React, {Component} from 'react';

class SaleForm extends Component {

    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);

        var url = 'http://localhost:9000/sale/';

        fetch(url, {
            method: 'POST',
            body: data,
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="product_id">Sale name</label>
                <input id="product_id" name="product_id" type="text" />

                <label htmlFor="price">Description</label>
                <input id="price" name="price" type="text" />

                <label htmlFor="start">Description</label>
                <input id="start" name="start" type="text" />

                <label htmlFor="end">Description</label>
                <input id="end" name="end" type="text" />

                <label htmlFor="amount">Description</label>
                <input id="amount" name="amount" type="text" />

                <button>Add Sale</button>
            </form>
        );
    }

}


export default SaleForm;