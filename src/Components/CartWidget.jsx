import { Badge } from '@mui/material';
import { ShoppingCartOutlined } from '@mui/icons-material';
// import { useContext } from "react";
// import { CartContext } from "./CartContext";

const CartWidget = () => {

    // const ctx = useContext(CartContext) 

    return (
        <Badge badgeContent = {30} color="secondary" className='cart'>
            <ShoppingCartOutlined/>
        </Badge>
    )
}
export default CartWidget;