import { Link } from "react-router-dom";
import { Slider } from "../../Slider";
import { useEffect, useState } from "react";



function Home(){
    const [hover,setHover] = useState(true);
    const [ind,setInd] = useState(0);
    useEffect(()=>{
        if(hover){
            const slid = setInterval(() => {
                setInd((prevIndex) => (prevIndex + 1) % Slider.length);
            },3000)
            return () => clearInterval(slid);
        }
    },[hover])
    return(
        <section className="home">
            <div className="container">
                <div className="home-slide"  style={{transform:`translateX(-${ind * 100}%)`}} 
                    onMouseEnter={() => setHover(false)} onMouseLeave={() => setHover(true)}>
                    {Slider.map(sli => {
                        return(
                            <div key={sli.id} className="item">
                                <div className="info">
                                    <h2>{sli.title}</h2>
                                    <p>{sli.desc}</p>
                                    <Link to={'/'}>Visit Collections</Link>
                                </div>
                                <div className="image">
                                    <img src={sli.cover} alt="" style={{height:'250px'}}/>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
                <ul>
                    {Slider.map((_,index) => <li className={index === ind ? 'active' : ''} key={index} onClick={() => setInd(index)}></li>)}
                </ul>
        </section>
    )
}

export default Home;

