import { Badge } from '@mui/material';
import { ShoppingCartOutlined } from '@mui/icons-material';
// import { useContext } from "react";
import { useGralContext } from "../Utils/Context";

const CartWidget = () => {

    const {cartCount} = useGralContext() 

    return (
        <Badge badgeContent = {cartCount} color="secondary" className='cart'>
            <ShoppingCartOutlined/>
        </Badge>
    )
}
export default CartWidget;