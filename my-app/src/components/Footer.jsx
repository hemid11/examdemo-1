import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    return (
        <div >
            <div style={{ display: 'flex', padding: '10px', margin: '10px',  justifyContent: 'space-around'}}>
                <div>  
                    <h3>About Us</h3>
                    <p style={{ fontSize: '16px', width: '286.656px', height: '135.938px', maxHeight: '30px' }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique illo, vitae architecto fugit nulla id unde, quos eos modi tempora sint dicta dolorum sapiente, consequatur enim. Vero, dolorem? Sunt, natus.</p>
                </div>

                <div>
                    <h3>Quick Links</h3>
                    <p>About Us</p>
                    <p>Services</p>
                    <p>Testimonials</p>
                    <p>Contact Us</p>
                </div>
                <div style={{ marginLeft: '20px' }}>
                    <h3>Follow Us</h3>
                    <FaFacebookF />
                    <FaTwitter />
                    <FaInstagram />
                    <FaLinkedinIn />

                </div>
                <div style={{ marginLeft: '20px' }}>
                    <h3>FEATURED PRODUCT</h3>
                    <img style={{
                        width: '255px', height: '255px'
                    }} src="https://preview.colorlib.com/theme/selling/images/product_1_bg.jpg" alt="" />
                    <h4>Leather Brown Shoe</h4>
                    <p>$60.00</p>
                    <button>Add To Cart</button>
                </div>
            </div>
        </div>


    )
}
export default Footer