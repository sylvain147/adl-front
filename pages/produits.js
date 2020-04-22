import React from "react";
import {withRouter} from 'next/router'

const axios = require("axios");
import {gql} from "apollo-boost";
import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
    uri: 'http://localhost:4000/',
});

class products extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            product: null,
        };

    }
    static async getInitialProps() {
        let products = await client.query({
            query: gql`
                {
                    getProducts {
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
        });
        return {products: products }
    }
    getProducts = async () => {
    }

    render() {
        return (
         <div>
            Liste des produits
         </div>
        )
    }
}

export default products