import MenuButton from "./MenusButton";
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import { useGralContext } from '../Utils/Context';
import { ComboBox, Select1, Select2, Select3 } from './Selects'

const AcordeonFilter = () => {

    const { expanded, handleChange } = useGralContext();

    return (
        <div>
            <Accordion className={`sounds__acordeon ${expanded === 'panel1' ? 'active-hover' : ''}`} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <MenuButton title='Tipo' />
                </AccordionSummary>
                <AccordionDetails className="d-flex flex-row justify-content-center">
                    <Select1 />
                </AccordionDetails>
            </Accordion>
            <Accordion className={`sounds__acordeon ${expanded === 'panel2' ? 'active-hover' : ''}`} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                >
                    <MenuButton title='Genero'  />
                </AccordionSummary>
                <AccordionDetails>
                    <AccordionDetails className="d-flex flex-row justify-content-center">
                        <Select2 />
                    </AccordionDetails>
                </AccordionDetails>
            </Accordion>
            <Accordion className={`sounds__acordeon ${expanded === 'panel3' ? 'active-hover' : ''}`} expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary
                    aria-controls="panel3bh-content"
                    id="panel3bh-header"
                >
                    <MenuButton title='Groups' />
                </AccordionSummary>
                <AccordionDetails className="d-flex flex-row justify-content-center">
                    <Select3 />
                </AccordionDetails>
            </Accordion>
            <Accordion className={`sounds__acordeon ${expanded === 'panel4' ? 'active-hover' : ''}`} expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary
                    aria-controls="panel4bh-content"
                    id="panel4bh-header"
                >
                    <MenuButton title='Sounds' />
                </AccordionSummary>
                <AccordionDetails className="d-flex flex-row justify-content-center">
                    <ComboBox />
                </AccordionDetails>
            </Accordion>
        </div>
    );
};

export default AcordeonFilter;