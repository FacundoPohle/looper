import * as React from "react";
import StoreIcon from '@mui/icons-material/Store';
import InfoIcon from '@mui/icons-material/Info';
import CartWidget from './CartWidget';
import { Link } from "react-router-dom";


import { motion } from "framer-motion";

const variants = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            y: { stiffness: 1000, velocity: -100 }
        }
    },
    closed: {
        y: 50,
        opacity: 0,
        transition: {
            y: { stiffness: 1000 }
        }
    }
};

const colors = ["#FF008C", "#D309E1", "#9C1AFF"];
const names = ["Tienda", "My Profile ", "Cart"];
const icons = [<StoreIcon />, <InfoIcon />, <CartWidget />]
const navs = ['/tienda', '/myprofile', '/cart']

export const MenuItem = ({ i }) => {
    const style = { border: `2px solid ${colors[i]}` };
    return (
        <motion.li
            className="la"
            variants={variants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
        >
            <Link className="theNav__link" to={navs[i]}>
                <div className="icon-placeholder" style={style}>{icons[i]}</div>
                <div className="text-placeholder" style={style}>{names[i]}</div>
            </Link>
        </motion.li>
    );
};
