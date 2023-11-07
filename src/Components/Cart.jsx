// import SpeedDial from '@mui/material/SpeedDial';
// import SpeedDialIcon from '@mui/material/SpeedDialIcon';
// import SpeedDialAction from '@mui/material/SpeedDialAction';
// import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
// import SaveIcon from '@mui/icons-material/Save';
// import PrintIcon from '@mui/icons-material/Print';
// import ShareIcon from '@mui/icons-material/Share';
import CancelIcon from '@mui/icons-material/Cancel';
import { motion } from "framer-motion"
import { useGralContext } from '../Utils/Context';
import { Link } from "react-router-dom";



const Cart = () => {

    const ctx = useGralContext()

    // const actions = [
    //     { icon: <FileCopyIcon />, name: 'Copy' },
    //     { icon: <SaveIcon />, name: 'Save' },
    //     { icon: <PrintIcon />, name: 'Print' },
    //     { icon: <ShareIcon />, name: 'Share' },
    // ];

    return (
        < div className='carro__display'>
            <div className='carro'>
                <h2>Cart</h2>
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
                            <p>Taxes 0.15%</p>
                            <p>${ctx.calcTax()}</p>
                        </div>
                        <div className='carro__price mt-0'>
                            <p>Total</p>
                            <p className='carro__price--color'>${ctx.calculateTotalPrice()}</p>
                        </div>
                        <div className='btnCheck__display'>
                            <span className='btnCheck'>Checkout</span>
                        </div>
                    </>
                ) : (
                    <div className='carro__goback'>
                    <p>Your cart is empty.</p>
                    <Link className='Links ntitle fromLeft ms-0 ps-0 w-100' to="/tienda">Click here to go to the tend</Link>
                    </div>
                )}

            </div>
            {/* <SpeedDial
                ariaLabel="SpeedDial basic example"
                sx={{ position: 'absolute', bottom: 16, right: 16 }}
                icon={<SpeedDialIcon />}
            >
                {actions.map((action) => (
                    <SpeedDialAction
                        key={action.name}
                        icon={action.icon}
                        tooltipTitle={action.name}
                    />
                ))}
            </SpeedDial> */}
        </div>
    );
}

export default Cart;