import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../api';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchProducts();
            setProducts(data);
        };
        fetchData();
    }, []);

    return (
        <div>
            <section style={{ backgroundImage: 'url(https://preview.colorlib.com/theme/selling/images/hero_2.jpg.webp)', width: '100%', height: '953px', display: 'flex', justifyContent: 'center', alignItems: 'center' }} className='shop1'>
                <div style={{ alignItems: 'left' }}>
                    <h3 style={{ color: 'white', alignItems: 'center', left: '50%', top: '50%', fontSize: '80px' }}>Shop With Us</h3>
                    <p style={{ color: 'white' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus adipisci reprehenderit quam distinctio atque accusantium animi nobis excepturi numquam eos incidunt, placeat reiciendis? Soluta suscipit minima iste itaque doloribus sequi.</p>
                    <button>Shop Now</button>
                    <button>Club Membership</button>

                </div>
            </section>
            <div className="container">
                <div>
                    <p style={{ textAlign: 'center', marginTop: '20px' }}>POPULAR PRODUCTS</p>
                    <h3 style={{ textAlign: 'center' }}>Our Products</h3>
                    <p style={{ textAlign: 'center', fontSize: '16px', height: '81px', margin: '0 0 16px 0' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nostrum natus excepturi fuga ullam accusantium vel ut eveniet aut consequatur laboriosam ipsam.</p>
                </div>
                <div className='row' style={{ display: 'flex' }}>
                    <div className='col-md-4 g-4'>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" style={{ width: '350px', height: '350px' }} src="https://preview.colorlib.com/theme/selling/images/model_1_bg.jpg" />
                            <Card.Body>
                                <Card.Title>Wild West Hoodie</Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing.
                                </Card.Text>
                                <Button style={{ backgroundColor: 'black', color: 'white' }} variant="primary">cart</Button>
                                <Button style={{ backgroundColor: 'white', color: 'black', marginLeft: '10px' }} variant="primary">view</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col-md-4 g-4'>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" style={{ width: '350px', height: '350px' }} src="https://preview.colorlib.com/theme/selling/images/model_2_bg.jpg" />
                            <Card.Body>
                                <Card.Title>Wild West Hoodie</Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing.
                                </Card.Text>
                                <Button style={{ backgroundColor: 'black', color: 'white' }} variant="primary">cart</Button>
                                <Button style={{ backgroundColor: 'white', color: 'black', marginLeft: '10px' }} variant="primary">view</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col-md-4 g-4'>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" style={{ width: '350px', height: '350px' }} src="https://preview.colorlib.com/theme/selling/images/model_3_bg.jpg" />
                            <Card.Body>
                                <Card.Title>Wild West Hoodie</Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing.
                                </Card.Text>
                                <Button style={{ backgroundColor: 'black', color: 'white' }} variant="primary">cart</Button>
                                <Button style={{ backgroundColor: 'white', color: 'black', marginLeft: '10px' }} variant="primary">view</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col-md-4 g-4'>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" style={{ width: '350px', height: '350px' }} src="https://preview.colorlib.com/theme/selling/images/model_4_bg.jpg" />
                            <Card.Body>
                                <Card.Title>Wild West Hoodie</Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing.
                                </Card.Text>
                                <Button style={{ backgroundColor: 'black', color: 'white' }} variant="primary">cart</Button>
                                <Button style={{ backgroundColor: 'white', color: 'black', marginLeft: '10px' }} variant="primary">view</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col-md-4 g-4'>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" style={{ width: '350px', height: '350px' }} src="https://preview.colorlib.com/theme/selling/images/model_5_bg.jpg" />
                            <Card.Body>
                                <Card.Title>Wild West Hoodie</Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing.
                                </Card.Text>
                                <Button style={{ backgroundColor: 'black', color: 'white' }} variant="primary">cart</Button>
                                <Button style={{ backgroundColor: 'white', color: 'black', marginLeft: '10px' }} variant="primary">view</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col-md-4 g-4'>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" style={{ width: '350px', height: '350px' }} src="https://preview.colorlib.com/theme/selling/images/product_1_bg.jpg" />
                            <Card.Body>
                                <Card.Title>Wild West Hoodie</Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing.
                                </Card.Text>
                                <Button style={{ backgroundColor: 'black', color: 'white' }} variant="primary">cart</Button>
                                <Button style={{ backgroundColor: 'white', color: 'black', marginLeft: '10px' }} variant="primary">view</Button>
                            </Card.Body>
                        </Card>
                    </div>

                </div>
            </div>
<section className='foot' style={{backgroundImage:'url(https://preview.colorlib.com/theme/selling/images/hero_2.jpg.webp)',margin:'0 0 30px 0'}}>
    <div style={{alignItems:'center',justifyContent:'center',}} className="row">
    <div  className="col-5">
    <h3 style={{color:'white',textAlign:'center'}}>Get notified on each updates.</h3>
    <div style={{display:'flex'}} class="form-group">
      <input type="password" class="form-control" id="pwd" placeholder="Enter your email adress" name="pswd"></input>
      <button type="submit">Subscribe</button>
    </div>
    <p style={{alignItems:'center',boxSizing:'border-box',color:'white',lineHeight:'24px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe reprehenderit deserunt laborum minus doloremque animi accusamus earum illum eum quasi cumque, nulla dolor vel eveniet inventore suscipit voluptatibus iusto eligendi?</p>
    </div>
    </div>
</section>



        </div>
    );
};

export default Home;
