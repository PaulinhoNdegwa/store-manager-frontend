import React, { Component } from 'react';
import { Container, Header, Form, Button } from 'semantic-ui-react';
import { login } from '../../redux/actionCreators/loginActions';
import { connect } from 'react-redux';
import Loader from '../Loader/Loader';

export class Login extends Component {
    state = {
        email: '',
        password: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.login(this.state)
        this.setState({
            email: '',
            password: ''
        })
    }
    componentDidUpdate() {
        if (this.props.loginSuccess === true) {
            this.props.history.push('/')
        }
    }
    render() {
        const { isFetching } = this.props
        if (isFetching === true) {
            return (
                <div>
                    <Loader />
                </div>
            )
        }
        return (
            <Container>
                <Header>Log in below</Header><br></br>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Input type="email" fluid label="Email" onChange={this.handleChange} name="email" />
                    <Form.Input type="password" fluid label="Password" onChange={this.handleChange} name="password" />
                    <Button fluid className="ui green button" type="submit">Login</Button>
                </Form>
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isFetching: state.loginReducer.isFetching,
        loginSuccess: state.loginReducer.loginSuccess
    }
}

export default connect(mapStateToProps, { login })(Login)
