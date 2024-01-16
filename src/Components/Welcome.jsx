import RobotCanvas from './Canvas/Robot';
import Typewriter from 'typewriter-effect';
import { Link } from "react-router-dom";


const Welcome = () => {
    return (
        <div className='point__absolute--2'>
        <Link className='Links' to="/tienda">
          <RobotCanvas/>
          <div className='titulos mob typewriterwidth__welcome'>
              <Typewriter
                  options={{
                      delay: 70,
                      loop: true,
                  }}
                  onInit={(typewriter) => {
                      typewriter.typeString(`Hello there! click me !`)
                          .pauseFor(2500)
                          .deleteAll()
                          .start();
                  }}
              />
          </div>
          <p className='titulos fs-3 notmob point__absolute--3 entrance'>Hello there!</p>
            <p className='titulos fs-3 notmob point__absolute--4 entrance2'>Click me</p>
          </Link>
        </div>
    );
    
}

export default Welcome;