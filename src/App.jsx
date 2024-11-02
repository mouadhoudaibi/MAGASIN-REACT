import React, { useState } from 'react';
import './App.css';
import './components/Catalogue';
import iphone from './images/iphone.png'
import ipad from './images/ipad.png'
import macbook from './images/macbook.png'
import applewatch from './images/applewatch.png'
import hestory from './images/1984.jpg'
import gatsby from './images/gatsby.jpg'
import hobbit from './images/hobbit.jpg'
import mobydick from './images/mobydick.jpg'
import kill from './images/to-kill.jpg'
import war from './images/war-and-peace.jpg'


function App() {
  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const products = [
    { id: 1,  type: 'tech' , class: 'phone' ,  name: 'iPhone', description: 'Description du produit 1', price: 690, image: iphone },
    { id: 2,  type: 'tech' , class: 'phone' ,  name: 'iPad', description: 'Description du produit 2', price: 800, image: ipad },
    { id: 3,  type: 'tech' , class: 'laptop' ,  name: 'MacBook', description: 'Description du produit 3', price: 1130, image: macbook },
    { id: 4,  type: 'tech' , class: 'watch' ,  name: 'Apple Watch', description: 'Description du produit 4', price: 350, image: applewatch },
    { id: 5,  type: 'book' , class: 'books' ,  name: '1984', description: 'Description du produit 5', price: 15, image: hestory },
    { id: 6,  type: 'book' , class: 'books' ,  name: 'gatsby', description: 'Description du produit 6', price: 15.99, image: gatsby },
    { id: 7,  type: 'book' , class: 'books' ,  name: 'hobbit', description: 'Description du produit 7', price: 13.20, image: hobbit },
    { id: 8,  type: 'book' , class: 'books' ,  name: 'mobydick', description: 'Description du produit 8', price: 20.45, image: mobydick },
    { id: 9,  type: 'book' , class: 'books' ,  name: 'to-kill', description: 'Description du produit 9', price: 22.19, image: kill },
    { id: 10, type: 'book' , class: 'books' ,  name: 'war-and-peace', description: 'Description du produit 9', price: 23.99, image: war },
    { id: 11, type: 'tech' , class: 'airpods' ,  name: 'AirPods', description: 'Description du produit 9', price: 229, image: 'https://th.bing.com/th/id/OIP.WJyC1Kfzzd69OGrNgFnYbAHaIc?rs=1&pid=ImgDetMain' },
    { id: 12, type: 'tech' , class: 'laptop' ,  name: 'HP ', description: 'Description du produit 9', price: 50, image: 'https://th.bing.com/th/id/R.7e8f0c920dd844febe71c46d1f5b063a?rik=%2fzhbOaSfayYvAQ&riu=http%3a%2f%2fwww.pngmart.com%2ffiles%2f7%2fHP-Laptop-Transparent-PNG.png&ehk=O%2f9Dn0B98REQNJVH96DDCUy4uBext9OumBhAg87%2ftu0%3d&risl=&pid=ImgRaw&r=0'},
    { id: 13, type: 'tech' , class: 'phone' ,  name: 'samsung s21 ultra', description: 'Description du produit 9', price: 50, image: 'https://th.bing.com/th/id/OIP.tmAGtlfUhKyc6O6lEO9uNAHaHa?w=600&h=600&rs=1&pid=ImgDetMain'},
    { id: 14, type: 'tech' , class: 'laptop' ,  name: 'DELL', description: 'Description du produit 9', price: 50, image: 'https://th.bing.com/th/id/R.f926fef2a634d3ca11ebb80bc177a16c?rik=3DYdPSmTHz2akw&riu=http%3a%2f%2fgraphics.secondipity.com%2fgr%2fimages%2fnw%2fdellxps139001slv.jpg&ehk=asfSEYCNrvoOIoTVmeR5EiPimCfIOe%2bsZF%2boR33ZK5Y%3d&risl=&pid=ImgRaw&r=0'},
    { id: 15, type: 'tech' , class: 'airpods' ,  name: 'AirPods 2', description: 'Description du produit 9', price: 179, image: 'https://th.bing.com/th/id/OIP.u0iabmWiJg3rJOF3xz-bTAHaHa?rs=1&pid=ImgDetMain'},
  ];

  const addToCart = (product) => {
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
      if (existingProduct.quantity < 3) {
        setCart(cart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        ));
      }
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    const existingProduct = cart.find(item => item.id === productId);
    if (existingProduct && existingProduct.quantity > 1) {
      setCart(cart.map(item =>
        item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
      ));
    } else {
      setCart(cart.filter(item => item.id !== productId));
    }
  };

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  // Filtrer les produits selon le terme de recherche
  const filteredProducts = products.filter((product) => {
    return (
      searchTerm === "" ||
      (product.name && product.name.toLowerCase().includes(searchTerm.toLowerCase()) || product.type && product.type.toLowerCase().includes(searchTerm.toLowerCase()) ||  product.class && product.class.toLowerCase().includes(searchTerm.toLowerCase()))
      // (product.type && product.type.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  });

  const clearSearch = () => {
    setSearchTerm("");
  };

  return (
    <div className="container">
      <div className='h1'>
      <h1>MAGASIN</h1>
      </div>

      <div className="search-bar">
          <input
            type="text"
            placeholder="Recherche..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          {searchTerm && (
              <button onClick={clearSearch} className="clear-button">X</button>
            )}
        </div>

        <div className="catalogue">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="produit">
              <img src={product.image} alt={product.name} className="product-image" />
              <h3>{product.name}</h3>
              {/* <p>{product.description}</p> */}
              <p>Prix: {product.price}$</p>
              <button onClick={() => addToCart(product)}>Acheter</button>
            </div>
          ))
        ) : (
          <p className="no-results">Aucun produit ne correspond à votre recherche.</p>
        )}

        </div>
        
      {/* {cart.length > 0 && ( */}
      <div className="panier">
        <h2>Mon Panier</h2>
        {cart.map((item) => (
          <div key={item.id} className="panier-item">
            <img src={item.image} alt={item.name} className="cart-product-image" />
            <h3>{item.name}</h3>
            <p>Prix: {item.price}$</p>
            <div className="quantity-controls">
              <button onClick={() => removeFromCart(item.id)} disabled={item.quantity <= 1}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => addToCart(item)} disabled={item.quantity >= 3}>+</button>
            </div>
            <button onClick={() => removeFromCart(item.id) }>Supprimer</button>
          </div>
        ))}
        <div className='total'>
          <h3>Total: {total}$</h3>
          {cart.length > 0 && (
          <button className="checkout-button">Aller au Paiement</button>
        )}
        </div>
      </div>
      {/* )} */}
    </div>
  );
}

export default App;
