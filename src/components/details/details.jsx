import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { getStars } from "../products/products";
import { setCards } from "../redux/cardSlice";
import { useDispatch } from "react-redux";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function Details(){
    const params = useParams();
    const { id } = params;
    const [product,setProduct] = useState({});
    const [products,setProducts] = useState([]);
    const [loading,setLoading] = useState(true);
    const dispatch = useDispatch();
    const firstProduct = async() =>{
        setLoading(true);
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await res.json();
        setProduct(data);
        setLoading(false);
    }
    const otherProducts = async () =>{
            const res = await fetch(`https://fakestoreapi.com/products/category/${product.category}`);
            const data = await res.json();
            setProducts(data);
    }
    useEffect(()=>{
        firstProduct();
    },[id])
    useEffect(()=>{
        otherProducts();
    })
    return(
            <section className="details">
                <div className="container">
                    <div className="content">
                        <div className="row">
                            {
                                loading ? <Skeleton  height={400} /> :
                                <img src={product.image} alt="" />
                            }
                            
                        </div>
                        <div className="row info">
                            {
                                loading ? 
                                <>
                                    <h2> <Skeleton/></h2>
                                    <p><Skeleton/></p>
                                    <h3><Skeleton/></h3>
                                    <p><Skeleton height={100}/></p>
                                    
                                </>
                                :
                                <>
                                <h2>{product.title}</h2>
                                <p>{product.price}$</p>
                                <h3>Description</h3>
                                <p>{product.description}</p>
                                <button  onClick={() => {
                                    dispatch(setCards(product));
                                }}><FaCartShopping className="shop-icon"/> Add to cart</button>
                                </>
                            }
                            
                        </div>
                    </div>
                    <h2 className="h2">Related Products</h2>
                    <div className="other">
                        {products.map(product => {
                            return(
                                <Link to={`/product/${product.id}`} key={product.id} className="product" onClick={() => window.scroll({
                                    top: 0,
                                    behavior: 'smooth'
                                })}>
                                    <div className="img">
                                        <img src={product.image} alt="" style={{height:'220px',width:'100%'}}/>
                                    </div>
                                    <div className="description">
                                        <h3>{product.title.length < 25 ? product.title : product.title.slice(0,25)+'...'}</h3>
                                        <h4>{product.price}$</h4>
                                        <div key={product.id}>
                                            <h5 key={product.id}>{getStars(product.rating.rate).map(star => {
                                                return star;
                                            })}</h5>
                                            <h5>{product.rating.count} reviews</h5>
                                        </div>
                                    </div>
                                </Link>
                            )
                        })}
                    </div>
                </div>
            </section>
    )
}

export default Details;
