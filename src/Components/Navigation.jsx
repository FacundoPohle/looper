import * as React from "react";
// import CartWidget from './CartWidget';
// import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";

const variants = {
    open: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    },
    closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
};

const itemIds = [0, 1, 2];

export const Navigation = () => (
    <motion.ul className="al" variants={variants}>
        {/* <MenuItem><Link className='Links ntitle fromLeft' to="/tienda">Tienda</Link></MenuItem>
        <MenuItem> <Link className='Links ntitle fromLeft' to='aboutus'>About us</Link></MenuItem>
        <MenuItem><Link className='Links ntitle' to="cart"><CartWidget /></Link></MenuItem> */}
        {itemIds.map(i => (
            <MenuItem i={i} key={i}></MenuItem>
        ))}
    </motion.ul>
);
