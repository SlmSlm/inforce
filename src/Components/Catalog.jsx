import React from "react";
import styles from "./Catalog.module.css";
import DelitingModal from "./DelitingModal";

class Catalog extends React.Component {
  constructor(props) {
    super(props);
    const products = this.props.store.getData();
    this.state = { products };
    this.sortByCount = this.sortByCount.bind(this);
    this.sortByName = this.sortByName.bind(this);
  }

  sortByCount() {
    this.setState(() => {
      this.state.products.sort((a, b) => b.count - a.count);
      return this.state.products;
    });
  }

  sortByName() {
    this.setState(() => {
      this.state.products.sort((a, b) =>
        a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1
      );
      return this.state.products;
    });
  }

  render() {
    return (
      <div>
        Sort by
        <button onClick={this.sortByName}>Name</button>
        <button onClick={this.sortByCount}>Count</button>
        {console.log(this.state)}
        {this.state.products.map((product, index) => (
          <div key={index} className={styles.item}>
            {product.name} <br />
            <img src={product.imageUrl} alt="icon" style={{ width: 50 }} />
            <div>{product.describe}</div>
            <div>Count: {product.count}</div>
            <button
              className="btn btn-danger"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
            >
              Delete product
            </button>
          </div>
        ))}
        <DelitingModal />
      </div>
    );
  }
}

export default Catalog;
