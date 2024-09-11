import { useDispatch, useSelector } from "react-redux";
import { deleteCard} from "../redux/cardSlice";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { useEffect } from "react";

function Cart(){
    const state = useSelector(state => state.cards);
    const dispatch = useDispatch();
    const deleteC = (card) =>{
        Swal.fire({
            title: 'Are you sure?',
            text: 'You will not be able to recover this card.',
            icon: 'warning',
            showCancelButton: true,
        }).then(data => {
            if (data.isConfirmed){
                dispatch(deleteCard(card))
            }
        }
        )}
    useEffect(()=>{
            
        })
    const TotalPrice = ()=>{
        let sum = 0;
        state.map((card) => {
            sum += card.price * card.quantite;
        })
        return sum;
    }
    return (
        <section className="cards">
            <div className="container">
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Card Name</th>
                            <th>Card Price</th>
                            <th>Card Quantity</th>
                            <th>Total Price</th>
                            <th>Other</th>
                        </tr>
                    </thead>
                    <tbody>
                        {state.map((card, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{card.title}</td>
                                <td>{card.price}$</td>
                                <td>{card.quantite}</td>
                                <td>{(card.price * card.quantite).toFixed(2)}$</td>
                                <td>
                                    <button onClick={() =>deleteC(card)}>Delete</button>
                                    <Link to={`/product/${card.id}`}>Visit</Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan="4">Total Price</td>
                            <td>{TotalPrice().toFixed(2)}$</td>
                            <td>
                                <button>Buy</button>
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </section>
    )
}

export default Cart;