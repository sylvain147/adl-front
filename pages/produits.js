import React, {useEffect, useState} from "react";
import {gql} from "apollo-boost";
import ApolloClient from 'apollo-boost';
import makeStyles from "@material-ui/core/styles/makeStyles";

const client = new ApolloClient({
    uri: 'http://localhost:4000/',
});
const useStyles = makeStyles(theme => ({
    container: theme.product.container,
    small: theme.product.small,
    imgContainer : theme.product.small.imgContainer
}));

function products() {
    const [products, setProducts] = useState([]);
    const style = useStyles();
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
        }

        getProducts().then((results) => {
            console.log(results)
            setProducts(results.data.getProducts)
        })
    });
    return (
        <div className={style.container} >{products.map((product) => {
                return (
                        <div className={style.small}>
                            <div className={style.imgContainer} style={{backgroundImage : 'url("https://i.etsystatic.com/16495427/r/il/78cdf1/2242598670/il_1588xN.2242598670_q819.jpg")'}}></div>
                            <span>{product.title}</span>
                            <span>{product.user.username}</span>
                            <span>{product.price}</span>
                        </div>
                )
            }
        )}</div>
    )
}
export default products