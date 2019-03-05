import React, { Component, Fragment } from 'react';
import { Card, Button, Image, Divider } from 'semantic-ui-react';
import { connect } from 'react-redux'
import Laptop from '../../assets/laptop.jpg';
import { getProducts } from '../../redux/actionCreators/productActions';
import NewProduct from './NewProduct'

export class Products extends Component {
    componentDidMount() {
        this.props.getProducts()
    }
    render() {
        return (
            <Fragment>
                <NewProduct />
                <Divider />
                <Card.Group>
                    <Card>
                        <Image src={Laptop} />
                        <Card.Content>
                            <Card.Header>Macbook Pro</Card.Header>
                            <Card.Meta> Price: $999</Card.Meta>
                            <Card.Description>Best laptop in the market</Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <Button fluid basic color='orange'>Add to cart </Button>
                        </Card.Content>
                    </Card>
                </Card.Group>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isFetching: state.productsReducer.isFetching,
        allProductsSuccess: state.productsReducer.allProductsSuccess
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getProducts: () => { dispatch(getProducts()) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products)
