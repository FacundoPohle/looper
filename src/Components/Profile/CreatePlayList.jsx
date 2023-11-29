import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useForm } from "react-hook-form";
import { useGralContext } from '../../Utils/Context';
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"


function CreatePlaylist(props) {
  const {  playlists, setPlaylists, setSelectedPlaylist } = useGralContext();

  const {
    register, handleSubmit, formState: { errors }, reset } = useForm({ defaultValues: { nombre: '' } });

  const onSubmit = handleSubmit((data) => {
    // Verifica si ya existe una playlist con el mismo nombre
    const playlistExists = playlists.some((playlist) => playlist.name === data.nombre);

    if (playlistExists) {
      // Si se carga playlist con mismo nombre
      Toastify({
        text: `There's already playlist with that name`,
        duration: 1500,
        style: {
          background: "linear-gradient(to right, #ff0000, #ff3333)",
        },
      }).showToast();
    } else {
      // Si no existe, crea una nueva playlist
      const newPlaylist = {
        name: data.nombre,
        samples: [] // Puedes añadir samples a esta lista en el futuro
      };

      // Agregar la nueva playlist al estado de playlists
      setPlaylists([...playlists, newPlaylist]);
          // Agregar la muestra a la playlist actualmente seleccionada
      setSelectedPlaylist(newPlaylist)


      // Agregado correctamente
      Toastify({
        text: `Playlist succesfully added`,
        duration: 1500,
        style: {
          background: "linear-gradient(to right, #59b43a, #1dfd2b, #12e254)",
        },
      }).showToast();

      console.log('Playlists:', playlists);
    }
 
    reset();
  });

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className='px-5 pt-4' closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Create your Playlist
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className='px-5'>
        <form onSubmit={onSubmit}>
          <div className="modal-content__labels">
            <label >Name:</label>
            <input
              type="text"
              name="nombre"
              {...register("nombre", {
                required: {
                  value: true,
                  message: "Nombre es requerido",
                },
                maxLength: 15,
                minLength: 2,
              })}
            />
          </div>
          {errors.nombre?.type === "required" && <span className="modal-content__span">Name must consist of only letters, numbers, underscore and dash</span>}
          {errors.nombre?.type === "maxLength" && (
            <span className="modal-content__span">Nombre no debe ser mayor a 15 caracteres</span>
          )}
          {errors.nombre?.type === "minLength" && (
            <span className="modal-content__span">Nombre debe ser mayor a 2 caracteres</span>
          )}

          <Modal.Footer className='px-0 mt-5' >
            <button type='submit' className='createPlaylist__save'>Save</button>
            <Button variant='dark' onClick={props.onHide}>Cancel</Button>
          </Modal.Footer>
        </form>
      </Modal.Body>
    </Modal>
  );
}


export default CreatePlaylist;