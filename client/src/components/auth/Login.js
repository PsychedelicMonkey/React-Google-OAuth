import React, { Component } from 'react';
import {
  Button,
  Card,
  CardBody,
  Form,
  FormGroup,
  Input,
  Label
} from 'reactstrap';
import { Link } from 'react-router-dom';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  onSubmit = e => {
    e.preventDefault();

    alert(JSON.stringify(this.state));
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-6 m-auto">
          <Card>
            <CardBody>
              <h1 className="text-center">Log In</h1>

              <Form onSubmit={this.onSubmit}>
                <FormGroup>
                  <Label for="email">Email Address</Label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email Address"
                    value={this.state.email}
                    onChange={this.onChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="password">Password</Label>
                  <Input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={this.onChange}
                  />
                </FormGroup>

                <Button type="submit" color="primary" block>Log In</Button>
              </Form>

              <Button tag={Link} to="/auth/register" block className="my-3">Sign Up with Email</Button>
              <hr></hr>
              <h4 className="text-center mb-3">Or</h4>
              <a href="/auth/google" className="btn btn-danger btn-block">Log In with Google</a>
            </CardBody>
          </Card>
        </div>
      </div>
    );
  }
}

export default Login;
