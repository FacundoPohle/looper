import CancelIcon from '@mui/icons-material/Cancel';
import { motion } from "framer-motion"
import { useGralContext } from '../Utils/Context';
import { Link } from "react-router-dom";
import Robot from './Canvas/Robot';
import Typewriter from 'typewriter-effect';


const Cart = () => {

    const ctx = useGralContext()


    const getClasses = () => {

        if (ctx.cartList && ctx.cartList.length > 0) {
          return 'carro__display';
        } else {
          return 'carro__display2';
        }
      };


    return (
        < div className={getClasses()}>
            <div className='carro point'>
                <h2 className='titulos__cart'>Cart</h2>
                {ctx.cartList && ctx.cartList.length > 0 ? (
                    <>
                        <ul className='ul3 ps-0'>
                            {ctx.cartList.map((sample) => (
                                <li className='carro__samples' key={sample.id}>
                                    <div className='carro__samples--names'>
                                        <span>{sample.name}</span> <span className='carro__genre'>{sample.genre}</span>
                                    </div>
                                    <div className='carro__close'>
                                        <span>${parseFloat(sample.price).toFixed(2)}</span>
                                        <motion.div
                                            className='carro__remove'
                                            whileTap={{ scale: 0.8, borderRadius: "100%" }}
                                            onClick={() => ctx.removeFromCart(sample)}>
                                            <CancelIcon  ></CancelIcon>
                                        </motion.div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <div className='carro__price dborder'>
                            <p>Subtotal</p>
                            <p>${ctx.calculateSubTotal()}</p>
                        </div>
                        <div className='carro__price pt-0 mt-0'>

                            <p className='mobcards'>{ctx.selectedGiftCard ? (
                               <>
                               {`${ctx.selectedGiftCard.name} (${ctx.selectedGiftCard.discountspeech}off)  `} 
                               {ctx.samplesRemaining === 0 ? (
                                 <>
                                 <span className="samples-left">(Pack complete)</span>
                                 <span onClick={() => ctx.deleteGiftCard()} className="cardbait__3">Remove</span>
                                 </>
                               ) : (
                                 <>
                                 <span className="samples-left">{` (${ctx.samplesRemaining} samples left to complete pack)`}</span></>)}
                                 <span onClick={() => ctx.deleteGiftCard()} className="cardbait__3">Remove</span>
                                 </>
                            ) :
                                (<div className='discountcart'>
                                    Package discount (not selected)
                                    <Link className="Links" to='/giftcards'>
                                        <div className="cardbait__2">Go check</div>
                                    </Link>
                                </div>)
                            }</p>
                            <p>${ctx.selectedGiftCard ? ctx.calcDiscount() : 0}</p>
                        </div>
                        <div className='carro__price pt-0 mt-0'>
                            <p>Taxes 0.15%</p>
                            <p>${ctx.calcTax()}</p>
                        </div>
                        <div className='carro__price mt-0'>
                            <p>Total</p>
                            <p className='carro__price--color'>${ctx.calculateTotalPrice()}</p>
                        </div>
                        <div className='btnCheck__display'>
                            <span className='btnCheck' onClick={ctx.handleCheckout}>Checkout</span>
                        </div>
                    </>
                ) : (
                    <div className='point__absolute--6'>
                        <Robot />
                        <div className='titulos mob typewriterwidth__forcart'>
                            <Typewriter
                                options={{
                                    loop: true,
                                    delay: 50
                                }}
                                onInit={(typewriter) => {
                                    typewriter.typeString(`your cart is empty! You should go to the store!`)
                                        .pauseFor(2500)
                                        .deleteAll()
                                        .start();
                                }}
                            />
                        </div>
                        <p className="titulos notmob errorfound">Your cart is empty.</p>
                        <Link className='Links titulos notmob profmessage3' to="/tienda">Click <span className='profmessage3__word'>here</span> to check the store</Link>
                    </div>
                )}

            </div>
        </div>
    );
}

export default Cart;