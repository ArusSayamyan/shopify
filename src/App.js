// import logo from './logo.svg';
import React from "react";
import axios from "axios";
import "./App.css";
// import Categories from './components/Categories.component'
import { ReactComponent as CrownSVG } from "./assets/crown.svg";
import { ReactComponent as BagSVG } from "./assets/shopping-bag.svg";
import { Link } from "react-router-dom";


class App extends React.Component {
  state = {
    categories: [],
    count: 0,
  };

  async componentDidMount() {
    try {
      const response = await axios.get(
        "https://ns-shopify.herokuapp.com/api/v1/categories"
      );
      this.setState({
        categories: response.data,
      });
    } catch (error) {
      console.log(error.message);
    }
  }

  

  render() {
    const { categories } = this.state;
    console.log(categories);

    return (
      <div className="App">
        <header className="App-header">
          <CrownSVG  className="crownLogo"/>
          <nav className="navbar">
                <Link to="/shop" className="item">
                    SHOP
                </Link>
                <Link to="/contacts" className="item">
                    CONTACTS
                </Link>
                <Link to="/auth" className="item">
                    SIGN IN
                </Link>
                <span>
                    <BagSVG className="bagSVG" count={this.state.count}/>
                </span>
            </nav>
        </header>
        <main className="app-main">
          <ul className="app_main-list">
            {categories.map((category) => {
              return (
                <li className="category" key={category._id}>
                  <div className="category__wrapper">
                    <div
                      className="image"
                      style={{ backgroundImage: `url(${category.imageUrl})` }}
                    />
                    <div className="content">
                      <div className="title">{category.title}</div>
                      <div className="uppercase">shop now</div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </main>
      </div>
    );
  }
}

export default App;
