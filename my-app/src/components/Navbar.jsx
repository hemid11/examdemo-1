import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{padding: '20px 0',justifyContent:'space-around' }}>
        
      <ul style={{ listStyleType: 'none', display: 'flex', justifyContent: 'space-around' }}>
      <div style={{fontWeight:'900',fontSize:'40px',textAlign:'left',marginRight:'10px',textDecoration:'none'}}>Selling.</div>
      <div style={{display:'flex'}}>
         <li style={{ marginRight: '10px' }}><Link style={{  textDecoration: 'none' }} to="/">Home</Link></li>
        <li style={{ marginRight: '10px' }}><Link style={{  textDecoration: 'none' }} to="/add">Add Product</Link></li>
        <li style={{ marginRight: '10px' }}><Link style={{ textDecoration: 'none' }} to="/basket">Basket</Link></li>
        <li><Link style={{ color: '#fff', textDecoration: 'none' }} to="/wishlist">Wishlist</Link></li>
      </div>
       
      </ul>
    </nav>
  );
};

export default Navbar;
