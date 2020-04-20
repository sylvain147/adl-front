import React from "react";
import { withRouter } from 'next/router'
const axios = require("axios");

class product extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            product : null,
        };

    }
    getProduit = async (slug) => {
        if(slug == undefined) {
            console.log('hmmm')
        }
        else {
            let product = await axios.get(`${process.env.REACT_API}/api/product/${slug}`)
            console.log(product)
        }
        console.log(product)

    }
    render () {
        this.getProduct(this.props.router.query.slug)
        return <div>
        </div>
    }
}

const articleData = withRouter(article);
export default articleData