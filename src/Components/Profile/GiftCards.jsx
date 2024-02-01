import Card from './Card';
import {Tilt} from 'react-tilt';
import { useGralContext } from '../../Utils/Context';
import { Link } from "react-router-dom";


  const giftCardPackages = [
    {
      name: "BRONZE PACK",
      title: "unlock 25 SAMPLES 0,40 euro each",
      pack: 20,
      discountspeech: "20%",
      discount: 0.20,
      price: "10 EURO",
      gradient: 'linear-gradient(286deg, rgba(237,94,94,1) 0%, rgba(236,120,25,1) 50%, rgba(252,176,69,1) 100%)',
    },
    {
      name: 'SILVER PACK',
      title: 'unlock 50 SAMPLES 0,37 euro each',
      pack: 50,
      discountspeech: '26%',
      discount: 0.26 ,
      price: '18,5 EURO',
      gradient: 'linear-gradient(343deg, rgba(153,153,153,1) 0%, rgba(103,113,116,1) 30%, rgba(153,153,153,1) 100%)',
    },
    {
      name: 'GOLDEN PACK',
      title: 'unlock 75 SAMPLES 0,32 euro each',
      pack: 75,
      discountspeech: '32%',
      discount: 0.32,
      price: '26 EURO',
      gradient: 'linear-gradient(343deg, rgba(255,143,128,1) 0%, rgba(240,211,76,1) 30%, rgba(255,143,128,1) 100%)',
    },
    {
      name: 'DIAMOND PACK',
      title: 'unlock 100 SAMPLES 0,34 euro each',
      pack: 100,
      discountspeech: '34%',
      discount: 0.34,
      price: '33 EURO',
      gradient: 'linear-gradient(343deg, rgba(128,158,255,1) 0%, rgba(76,240,213,1) 30%, rgba(128,158,255,1) 100%)',
    },
    // Agrega los demás paquetes con la misma estructura
    // ...
  ];
  


const GiftCard = () => {
    const { selectGiftCard } = useGralContext();
    
    return (
        <div className="Base">
          <div className="basegiftcards point">
            {giftCardPackages.map((paquete) => (
              <Link className='Links' to='/tienda'>
              <Tilt key={paquete.name}>
                <Card
                  evento={() => selectGiftCard(paquete)}
                  gradient={paquete.gradient}
                  name={paquete.name}
                  title={paquete.title}
                  discount={paquete.discountspeech}
                  price={paquete.price}
                />
              </Tilt></Link>
            ))}
          </div>
        </div>
      );
    };

export default GiftCard;