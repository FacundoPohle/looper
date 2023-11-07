import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useGralContext } from '../../Utils/Context';
import PlayCircleFilledRoundedIcon from '@mui/icons-material/PlayCircleFilledRounded';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Tooltip from '@mui/material/Tooltip';
import { motion } from "framer-motion";
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';


function AddPlaylistSounds(props) {
  const { addToPlaylist, favoriteSamples, setCurrentSample, setCurrentAudioName, addToCart } = useGralContext();



  // Esta función maneja la reproducción de un sample
  const handlePlaySample = (sampleData) => {
    setCurrentSample(sampleData.url); // Establece la muestra actual en el contexto
    setCurrentAudioName(sampleData.name)
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className='px-5 pt-4' closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Set up your playlist
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className='px-5'>
        <ul className='scroll3 ps-0'>
          {favoriteSamples.map(sampleData => (
            <div className='sounds__tracks w-100' key={sampleData.id}>
              <li className='text-start'>{sampleData.name}</li>
              <div className='d-flex flex-row gap-3'>

                <Tooltip title='Play'>
                  <motion.div
                    style={{ cursor: 'pointer' }}
                    whileTap={{ scale: 0.8, borderRadius: "100%" }}
                    onClick={() => handlePlaySample(sampleData)}
                  ><PlayCircleFilledRoundedIcon />
                  </motion.div>
                </Tooltip>
                <Tooltip title='Add to cart'>
                  <motion.div
                    style={{ cursor: 'pointer' }}
                    whileHover={{ rotate: 90 }}
                    whileTap={{ scale: 0.8, borderRadius: "100%" }}
                    onClick={() => addToCart(sampleData)}
                  ><AddCircleIcon />
                  </motion.div>
                </Tooltip>
                <Tooltip title='Add to playlist'>
                  <motion.div
                    style={{ cursor: 'pointer' }}
                    whileTap={{ scale: 0.8, borderRadius: "100%" }}
                    onClick={() => addToPlaylist(sampleData)}
                  ><PlaylistAddIcon />
                  </motion.div>
                </Tooltip>
              </div>
            </div>
          ))}
        </ul>

        <Modal.Footer className='px-0 mt-5' >
          <Button variant='dark' onClick={props.onHide}>Cancel</Button>
        </Modal.Footer>
      </Modal.Body>
    </Modal>
  );
}


export default AddPlaylistSounds;