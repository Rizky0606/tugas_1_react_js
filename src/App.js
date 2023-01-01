import React, { Component } from "react";
import MenuKontak from "./Page/MenuKontak";
import MenuMakanan from "./Page/MenuMakanan";
import MenuTentangKami from "./Page/MenuTentangKami";
import MenuUtama from "./Page/MenuUtama";
import Footer from "./Page/Footer";
import Header from "./Page/Header";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <MenuUtama />
        <MenuMakanan />
        <MenuTentangKami />
        <MenuKontak />
        <Footer />
      </div>
    );
  }
}

export default App;
