import { useState } from 'react'
import Nav from './Navigation/Nav'
import Products from './Products/Products'
import products from './db/data'
import Recommended from './Recommended/Recommended'
import Sidebar from './Sidebar/Sidebar'
import Card from './components/Card'
import "./index.css"
import Category from './Sidebar/Category/Category'

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null)

  const [ query, setQuery ] = useState('');

  const handleInputChange = (event) => {
    event.preventDefault();
    setQuery(event.target.value);
  }

  const filteredItems = products.filter((product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1);

  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  }

  function filteredData(products, selected, query) {
    let filteredProducts = products;

    if (query) {
      filteredProducts = filteredItems;
    }

    if (selected) {
      filteredProducts = filteredProducts.filter(({ Category, color, company, newPrice, title}) =>
        Category === selected || color === selected || company === selected || newPrice === selected || title === selected
      );
    }

    return filteredProducts.map(({ img, title, star, reviews, prevPrice, newPrice}) => (
      <Card
        key={Math.random()}
        img={img}
        title={title}
        star={star}
        reviews={reviews}
        prevPrice={prevPrice}
        newPrice={newPrice}
       />
    ));
  }

  const result = filteredData(products, selectedCategory, query);

  return (
    <>
      <Sidebar handleChange={handleChange} />
      <Nav query={query} handleInputChange={handleInputChange} />
      <Recommended handleClick={handleClick} />
      <Products result={result} />
    </>
  )
}

export default App
