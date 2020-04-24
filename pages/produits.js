import React, {useEffect, useState} from "react";
import {gql} from "apollo-boost";
import ApolloClient from 'apollo-boost';
const client = new ApolloClient({
    uri: 'http://localhost:4000/',
});

function products () {
    function test () {
        console.log('test')
    }
    const [products, setProducts] = useState({});
    useEffect(() => {
        async function getProducts() {
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
            return products;
            //setProducts(products)
        }
        getProducts().then((results)=> {
            setProducts(results)
        })
    });
    return (
        <div onClick={test}>ok</div>
    )
}
export default products