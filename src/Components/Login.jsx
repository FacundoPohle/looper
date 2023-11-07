import Modal from 'react-bootstrap/Modal';
import Formulario from './FormLogin';


function Login(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className='px-5 pt-4' closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Create your profile !
        </Modal.Title>
      </Modal.Header>

      <Formulario />

    </Modal>
  );
}


export default Login;