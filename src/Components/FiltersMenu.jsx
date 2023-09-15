import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import { useGralContext } from '../Utils/Context';
import { ComboBox, Select1, Select2, Select3 } from './Selects'
import { useState, useEffect } from "react";
import { useAnimate, stagger, motion } from "framer-motion";
import MenuButton from "./MenusButton";

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
    const { expanded, handleChange } = useGralContext();


    return (
        <div className="menu" ref={scope}>
            <motion.button
                className="buttonn"
                whileTap={{ scale: 0.97 }}
                onClick={() => setIsOpen(!isOpen)}
            >
                Filters
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
                <li className="li">
                <Accordion className={`sounds__acordeon ${expanded === 'panel1' ? 'active-hover' : ''}`} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <MenuButton title='Tipo' />
                    {/* <p className='li__title'> By Type</p> */}
                </AccordionSummary>
                <AccordionDetails className="d-flex flex-row justify-content-center">
                    <Select1 />
                </AccordionDetails>
            </Accordion>
                </li>
                <li className="li">
                <Accordion className={`sounds__acordeon ${expanded === 'panel2' ? 'active-hover' : ''}`} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                >
                    <MenuButton title='Genero'  />
                    {/* <p className='li__title'> By Genre</p> */}
                </AccordionSummary>
                <AccordionDetails>
                    <AccordionDetails className="d-flex flex-row justify-content-center">
                        <Select2 />
                    </AccordionDetails>
                </AccordionDetails>
            </Accordion>
                </li>
                <li className="li">
                <Accordion className={`sounds__acordeon ${expanded === 'panel3' ? 'active-hover' : ''}`} expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary
                    aria-controls="panel3bh-content"
                    id="panel3bh-header"
                >
                    <MenuButton title='Groups' />
                    {/* <p className='li__title'> By Group</p> */}
                </AccordionSummary>
                <AccordionDetails className="d-flex flex-row justify-content-center">
                    <Select3 />
                </AccordionDetails>
            </Accordion>
                </li>
                <li className="li">
                <Accordion className={`sounds__acordeon ${expanded === 'panel4' ? 'active-hover' : ''}`} expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary
                    aria-controls="panel4bh-content"
                    id="panel4bh-header"
                >
                    <MenuButton title='Sounds' />
                    {/* <p className='li__title'> By Sound</p> */}
                </AccordionSummary>
                <AccordionDetails className="d-flex flex-row justify-content-center">
                    <ComboBox />
                </AccordionDetails>
            </Accordion>
                </li>

            </ul>{" "}
        </div>
    );
}

export default Filters;