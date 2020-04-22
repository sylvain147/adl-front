import React from "react";
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Container from "@material-ui/core/Container";
import MarkdownIt from 'markdown-it';
import dynamic from 'next/dynamic';
import {UserContext} from "../../component/UserContext";
import AddIcon from '@material-ui/icons/Add';
const axios = require("axios");
import Button from "@material-ui/core/Button"
import LinearProgress from "@material-ui/core/LinearProgress";
import Box from "@material-ui/core/Box";
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';


const client = new ApolloClient({
    uri: 'http://localhost:4000/',
});

const MdEditor = dynamic(() => import('react-markdown-editor-lite'), {
    ssr: false
});

class newArticle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            slug: '',
            title: '',
            description: '',
            userId: '',
            price: 0,
        };
    }
    validateArticle = async () => {
        let values = `mutation createProduct {
                    createProduct(productInput : {
                    title : "${this.state.title}"
                    description : "${this.state.description}"
                    price : ${this.state.price}
                    slug : "${this.state.slug}"
                    user_id : ${this.state.userId}
                }){
                    title
                } 
            }`
        console.log(values)
        const product = await client.mutate({
            mutation : gql` ${values}`
        })

    };

    createSlug = (event) => {
        axios.get(process.env.REACT_API + "/slug?title=" + event.target.value)
            .then((response) => {
                this.setState({slug: response.data});
            })
    };
    addArticlePicture = (event) => {

    };
    handleForm = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    getPage = () => {
        const style = {
            articlePicture: {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                overflow: 'hidden',
                width: '100px',
                height: '150px',
                backgroundColor: '#E9EAE9',
                transition: 'height 200ms',
                cursor: 'pointer',
                color: '#424447'
            },
        }

        return (
            <React.Fragment>
                <Container maxWidth="md">
                    <FormControl fullWidth>
                        <form id="articleForm">
                            <input type="number" name="userId" onChange={this.handleForm}
                            />
                            <TextField margin="normal" fullWidth id="title" name="title" label="Titre"
                                       onChange={this.handleForm}/>
                            <TextField fullWidth id="slug" name="slug" label="slug"
                                       onChange={this.handleForm}/>
                            <TextField
                                id="standard-multiline-static"
                                label="Description"
                                fullWidth
                                name="description"
                                multiline
                                rows="4"
                                margin="normal"
                                onChange={this.handleForm}
                            />
                            PRix
                            <input type="number" name="price" onChange={this.handleForm}
                            />
                            <input style={{display: 'none'}} type="file" name="file" id="file"
                                   onChange={this.addArticlePicture}/>
                            <label id='labelPicture' style={style.articlePicture} htmlFor="file"><AddIcon/></label>
                            <Button variant="contained" color="primary" onClick={this.validateArticle}>
                                Valider l'article
                            </Button>
                        </form>
                    </FormControl>
                </Container>
            </React.Fragment>
        )
    }


    render() {
        return (
            this.getPage()
        )
    }
}

newArticle.contextType = UserContext

export default newArticle