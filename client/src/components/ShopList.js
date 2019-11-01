import React, { Component } from "react";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getOrderpacks, deleteOrderpack } from "../actions/orderpackActions";

class ShopList extends Component {
  componentDidMount() {
    this.props.getOrderpacks();
  }

  deleteOnClick = id => {
    this.props.deleteOrderpack(id);
  };

  render() {
    const { orderpacks } = this.props.orderpack;
    return (
      <Container>
        <ListGroup>
          <TransitionGroup className="shop-list">
            {orderpacks.map(({ _id, name, user }) => (
              <CSSTransition key={_id} timeout={500} classNames="fade">
                <ListGroupItem>
                  <Button
                    className="remove-btn"
                    color="danger"
                    size="sm"
                    onClick={this.deleteOnClick.bind(this, _id)}
                  >
                    &times;
                  </Button>
                  {name} Created by: {user}
                </ListGroupItem>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>
      </Container>
    );
  }
}

ShopList.propTypes = {
  getOrderpacks: PropTypes.func.isRequired,
  orderpack: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  orderpack: state.orderpack
});

export default connect(
  mapStateToProps,
  { getOrderpacks, deleteOrderpack }
)(ShopList);
