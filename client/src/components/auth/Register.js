import React, { Component, Fragment } from 'react';
import {
  Button,
  Card,
  CardBody,
  Form,
  FormGroup,
  FormText,
  Input,
  Label,
  Spinner,
} from 'reactstrap';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { registerUser } from '../../actions/authActions';

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      firstName: '',
      lastName: '',
      password: '',
      password2: '',
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

    const { email, firstName, lastName, password, password2 } = this.state;
    this.props.registerUser(email, firstName, lastName, password, password2);
  }

  render() {
    const { isAuthenticated, isLoading } = this.props;

    return (
      <Fragment>
        { isLoading ? (
          <Spinner />
        ) : isAuthenticated ? (
          <Redirect to="/" />
        ) : (
          <div className="row">
            <div className="col-md-6 m-auto">
              <Card>
                <CardBody>
                  <h1 className="text-center">Sign Up</h1>

                  <Form onSubmit={this.onSubmit}>
                    <FormGroup>
                      <Label for="email">Email Address</Label>
                      <Input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="jane.doe@blog.com"
                        value={this.state.email}
                        onChange={this.onChange}
                      />
                      <FormText color="muted">
                        We won't use your email for marketing or analytics
                      </FormText>
                    </FormGroup>
                    <FormGroup>
                      <Label for="firstName">First Name</Label>
                      <Input
                        type="text"
                        id="firstName"
                        name="firstName"
                        placeholder="Jane"
                        value={this.state.firstName}
                        onChange={this.onChange}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="lastName">Last Name</Label>
                      <Input
                        type="text"
                        id="lastName"
                        name="lastName"
                        placeholder="Doe"
                        value={this.state.lastName}
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
                    <FormGroup>
                      <Label for="password2">Confirm Password</Label>
                      <Input
                        type="password"
                        id="password2"
                        name="password2"
                        placeholder="Enter the same password as above"
                        value={this.state.password2}
                        onChange={this.onChange}
                      />
                    </FormGroup>

                    <Button type="submit" color="primary" block>Sign Up</Button>
                  </Form>
                </CardBody>
              </Card>
            </div>
          </div>
        ) }
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  isLoading: state.auth.isLoading,
});

export default connect(mapStateToProps, { registerUser })(Register);
