import React from "react";
import { withRouter } from 'next/router'
const axios = require("axios");
import { gql } from "apollo-boost";
import ApolloClient from 'apollo-boost';
const client = new ApolloClient({
  uri: 'http://localhost:4000/',
});

class products extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            product : null,
        };
        this.getProducts()

    }
    getProducts = async () => {
        client.query({
            query: gql`
                {
                    products {
                        title
                        description
                        price
                        user_id
                        user{username}
                        slug
                        created_at
                        deleted_at
                    }
                }
            `
        }).then(result => console.log(result));
    }
    render () {
        return <div>
            Liste des produits
        </div>
    }
}

export default products