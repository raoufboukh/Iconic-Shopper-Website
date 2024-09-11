import { useEffect, useState } from "react";
import { IoMdStar } from "react-icons/io";
import { FaStarHalfAlt } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";

export const getStars = (num) =>{
    let stars = [];
    if(num <= `${num}.5`){
        num = Math.round(num);
        for(let i = 0; i < num; i++){
            stars.push(<IoMdStar className="star" key={i} />);
        }
        for(let i = num; i < 5; i++){
            stars.push(<CiStar className="star" key={i} />);
        }
    }else{
        num = Math.floor(num);
        for(let i = 0; i < num; i++){
            stars.push(<IoMdStar className="star" key={i} />);
        }
        stars.push(<FaStarHalfAlt className="half-star"/>);
        for(let i = num+1; i < 5; i++){
            stars.push(<CiStar className="star" key={i} />);
        }
    }
    return stars;
}
function Products(){
    const [products,setProducts] = useState([]);
    const [cat,setCat] = useState([]);

    const getAllProducts = () =>{
        fetch('https://fakestoreapi.com/products/')
        .then(res => res.json())
        .then(data => setProducts(data))
    }
    const getProdCategory = (category) =>{
        fetch(`https://fakestoreapi.com/products/category/${category}`)
        .then(res => res.json())
        .then(data => setProducts(data))
    }
    const getCategories = () =>{
        fetch('https://fakestoreapi.com/products/categories')
        .then(res => res.json())
        .then(data => setCat(data));
    }
    useEffect(() => {
        getAllProducts();
        getCategories();
    },[])
    return (
        <section className="products">
            <h2>Featured Products</h2>
            <ul>
                <li onClick={() => getAllProducts()}>All</li>
                {cat.map(ca => {
                    return <li key={ca} onClick={() => getProdCategory(ca)}>{ca.charAt(0).toUpperCase()+ca.slice(1)}</li>
                })}
            </ul>
            <div className="container">
                {products.map((product) =>{
                        return (
                            <Link to={`/product/${product.id}`} key={product.id} className="product">
                                <div className="img">
                                    <img src={product.image} alt="" style={{height:'220px',width:'100%'}}/>
                                </div>
                                <div className="description">
                                    <h3>{product.title.length < 25 ? product.title : product.title.slice(0,25)+'...'}</h3>
                                    <h4>{product.price}$</h4>
                                    <div key={product.id}>
                                        <h5>{getStars(product.rating.rate).map(star => {
                                            return star;
                                        })}</h5>
                                        <h5>{product.rating.count} reviews</h5>
                                    </div>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Products;