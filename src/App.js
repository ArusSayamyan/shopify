// import logo from './logo.svg';
import React from "react";
import axios from "axios";
import "./App.css";
// import Categories from './components/Categories.component'

class App extends React.Component {
  state = {
    categories: [],
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
        <header className="App-header"></header>
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
