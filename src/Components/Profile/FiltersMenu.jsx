import * as React from 'react';
// import { useGralContext } from '../Utils/Context';
import { useState, useEffect } from "react";
import { useAnimate, stagger, motion } from "framer-motion";
import { MenuButtonProfile, MenuButtonFilter } from "../MenusButton";
import CreatePlaylist from "./CreatePlayList";
import { useGralContext } from '../../Utils/Context';
import { Link } from "react-router-dom";





const staggerMenuItems = stagger(0.1, { startDelay: 0.15 });

function useMenuAnimation(isOpen: boolean) {
    const [scope, animate] = useAnimate();


    useEffect(() => {
        animate(".arrow", { rotate: isOpen ? 180 : 0 }, { duration: 0.2 });

        animate(
            "ul",
            {
                clipPath: isOpen
                    ? "inset(0% 0% 0% 0% round 10px)"
                    : "inset(10% 50% 90% 50% round 10px)"
            },
            {
                type: "spring",
                bounce: 0,
                duration: 0.5
            }
        );

        animate(
            "li",
            isOpen
                ? { opacity: 1, scale: 1, filter: "blur(0px)" }
                : { opacity: 0, scale: 0.3, filter: "blur(20px)" },
            {
                duration: 0.2,
                delay: isOpen ? staggerMenuItems : 0
            }
        );
    }, [isOpen]);

    return scope;
}

const Filters = () => {

    const [isOpen, setIsOpen] = useState(false);
    const scope = useMenuAnimation(isOpen);
    const [modalShow, setModalShow] = useState(false);
    const { playlists, setPlaylists } = useGralContext();

    // const { expanded, handleChange, isVisible, setIsVisible} = useGralContext();

    // const handleMenuButtonClick = () => {
    //     // Lógica para mostrar las playlists generadas
    //     // Aquí podrías actualizar el estado de las playlists o cargarlas de alguna fuente de datos
    //     // Por ahora, vamos a simular algunos datos de prueba
    //     const samplePlaylists = [
    //         { name: 'Playlist 1', samples: ['Sample 1', 'Sample 2'] },
    //         { name: 'Playlist 2', samples: ['Sample 3', 'Sample 4'] }
    //     ];
    //     setPlaylists(samplePlaylists);

    // };


    return (
        <div className="menu" ref={scope}>
            <motion.button
                className="buttonn"
                whileTap={{ scale: 0.97 }}
                onClick={() => {
                    setIsOpen(prevIsOpen => !prevIsOpen);
                }}
            >
                My Stuff
                <div className="arrow" style={{ transformOrigin: "50% 55%" }}>
                    <svg width="15" height="15" viewBox="0 0 20 20">
                        <path d="M0 7 L 20 7 L 10 16" />
                    </svg>
                </div>
            </motion.button>
            <ul className="ul"
                style={{
                    pointerEvents: isOpen ? "auto" : "none",
                    clipPath: "inset(10% 50% 90% 50% round 10px)"
                }}
            >
                    <li className="li mt-2">
                    <Link to='/playlist'><MenuButtonFilter title='My Playlists' /></Link>
                    </li>
                <li className="li mt-2">
                    <MenuButtonProfile title='Collection' />
                </li>
                <li className="li mt-2">
                    <MenuButtonProfile title='Downloads' />
                </li>
                <li className="li mt-2">
                    <MenuButtonProfile title='+ Create Playlist' evento={() => setModalShow(true)} />
                    <CreatePlaylist
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                    />
                </li>

            </ul>{" "}
        </div>
    );
}

export default Filters;