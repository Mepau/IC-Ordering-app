import React, { Component } from "react";
import AppNavbar from "./components/AppNavbar";
import ShopList from "./components/ShopList";
import ItemModal from "./components/ItemModal";
import { Container } from "reactstrap";

import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/authActions";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
    const { user } = {};
  }

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AppNavbar />
          <Container>
            <ShopList />
            <ItemModal />
          </Container>
        </div>
      </Provider>
    );
  }
}
export default App;
