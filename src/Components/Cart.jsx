// import SpeedDial from '@mui/material/SpeedDial';
// import SpeedDialIcon from '@mui/material/SpeedDialIcon';
// import SpeedDialAction from '@mui/material/SpeedDialAction';
// import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
// import SaveIcon from '@mui/icons-material/Save';
// import PrintIcon from '@mui/icons-material/Print';
// import ShareIcon from '@mui/icons-material/Share';
import { useGralContext } from '../Utils/Context';


const Cart = () => {

    const ctx = useGralContext()

    // const actions = [
    //     { icon: <FileCopyIcon />, name: 'Copy' },
    //     { icon: <SaveIcon />, name: 'Save' },
    //     { icon: <PrintIcon />, name: 'Print' },
    //     { icon: <ShareIcon />, name: 'Share' },
    // ];

    return (
        <>
            <div className='carro'>
                <h2>Cart</h2>
                {ctx.cartList &&
                (<ul>
                    {ctx.cartList.map((sample) => (
                        <li key={sample.id}>
                            {sample.name}{' '}
                            <button className='carro__remove' onClick={() => ctx.removeFromCart(sample)}>Remove</button>
                        </li>
                    ))}
                </ul>)}
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
        </>
    );
}

export default Cart;