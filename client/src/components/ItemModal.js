import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";
import { connect } from "react-redux";
import { addOrderpack } from "../actions/orderpackActions";

class ItemModal extends Component {
  state = {
    modal: false,
    name: "",
    username: ""
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();

    const newOrderpack = {
      name: this.state.name,
      username: this.props.auth.user.name
    };

    // Use addOrderpack action for redux
    this.props.addOrderpack(newOrderpack);

    // Close modal
    this.toggle();
  };

  render() {
    return (
      <div>
        <Button
          color="dark"
          style={{ marginBottom: "2rem" }}
          onClick={this.toggle}
        >
          Add Orderpack
        </Button>

        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Add an order.</ModalHeader>

          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for="orderpack">Orderpacks</Label>
                <Input
                  type="text"
                  name="name"
                  id="orderpack"
                  placeholder="Add orderpack"
                  onChange={this.onChange}
                />
                <Button color="dark" style={{ marginTop: "2rem" }} block>
                  Add order
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  orderpack: state.orderpack,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { addOrderpack }
)(ItemModal);
