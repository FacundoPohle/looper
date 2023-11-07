import { useRef } from "react";
import { useForm } from "react-hook-form";

function Formulario() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm({
    defaultValues: {
      nombre: "",
      correo: "",
      fechaNacimiento: "",
      password: "",
      confirmarPassword: "",
      pais: "co",
      aceptaTerminos: false,
    },
  });

  const password = useRef(null);
  password.current = watch("password", "");

  const onSubmit = handleSubmit((data) => {
    console.log(data);

    reset();
  });

  return (
    <form className="modal-content__login" onSubmit={onSubmit}>
      <div className="modal-content__fila">
        <div className="modal-content__width">
          <div>
            <div className="modal-content__labels">
              <label >Nombre:</label>
              <input
                type="text"
                name="nombre"
                {...register("nombre", {
                  required: {
                    value: true,
                    message: "Nombre es requerido",
                  },
                  maxLength: 20,
                  minLength: 2,
                })}
              />
            </div>
            {errors.nombre?.type === "required" && <span className="modal-content__span">Nombre requerido</span>}
            {errors.nombre?.type === "maxLength" && (
              <span className="modal-content__span">Nombre no debe ser mayor a 20 caracteres</span>
            )}
            {errors.nombre?.type === "minLength" && (
              <span className="modal-content__span">Nombre debe ser mayor a 2 caracteres</span>
            )}
          </div>

          <div>
            <div className="modal-content__labels">
              <label>Correo Electrónico:</label>
              <input
                type="email"
                name="correo"
                {...register("correo", {
                  required: {
                    value: true,
                    message: "Correo es requerido",
                  },
                  pattern: {
                    value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                    message: "Correo no válido",
                  },
                })}
              />
            </div>
            {errors.correo && <span className="modal-content__span">{errors.correo.message}</span>}
          </div>

          <div>
            <div className="modal-content__labels">
              <label>Fecha de Nacimiento:</label>
              <input
                type="date"
                name="fechaNacimiento"
                
                {...register("fechaNacimiento", {
                  required: {
                    value: true,
                    message: "Fecha de nacimiento es requerida",
                  },
                  validate: (value) => {
                    const fechaNacimiento = new Date(value);
                    const fechaActual = new Date();
                    const edad =
                      fechaActual.getFullYear() - fechaNacimiento.getFullYear();
                    return edad >= 18 || "Debes ser mayor de edad";
                  },
                })}
              />
            </div>
            {errors.fechaNacimiento && (
              <span className="modal-content__span">{errors.fechaNacimiento.message}</span>
            )}
          </div>
        </div>

        <div className="modal-content__width">
          <div>
            <div className="modal-content__labels">
              <label>Contraseña:</label>
              <input
                type="password"
                name="password"
                {...register("password", {
                  required: {
                    value: true,
                    message: "Contraseña es requerida",
                  },
                  minLength: {
                    value: 6,
                    message: "Contraseña debe ser mayor a 6 caracteres",
                  },
                })}
              />
            </div>
            {errors.password && <span className="modal-content__span">{errors.password.message}</span>}
          </div>

          <div>
            <div className="modal-content__labels">
              <label>Confirma Contraseña:</label>
              <input
                type="password"
                name="confirmarPassword"
                {...register("confirmarPassword", {
                  required: {
                    value: true,
                    message: "Confirmar contraseña es requerida",
                  },
                  minLength: {
                    value: 6,
                    message: "Confirmar contraseña debe ser mayor a 6 caracteres",
                  },
                  validate: (value) =>
                    value === password.current || "Las contraseñas no coinciden",
                })}
              />
            </div>
            {errors.confirmarPassword && (
              <span className="modal-content__span">{errors.confirmarPassword.message}</span>
            )}
          </div>

          <div>
            <div className="modal-content__labels">
              <label htmlFor="pais">Pais:</label>
              <select name="pais" id="pais" 
              {...register("pais")}>
                <option value="mx">México</option>
                <option value="co">Colombia</option>
                <option value="ar">Argentina</option>
              </select>
            </div>

            {watch("pais") === "ar" && (
              <input
                type="text"
                placeholder="Provincia"
                {...register("provincia", {
                  required: {
                    value: true,
                    message: "Provincia es requerida",
                  },
                })}
              />
            )}
          </div>
        </div>
      </div>

      <div>
        <input
          type="checkbox"
          name="aceptaTerminos"
          className="me-2"
          {...register("aceptaTerminos", {
            required: {
              value: true,
              message: "Acepta los términos y condiciones",
            },
          })}
        />
        <label>Acepto los términos y condiciones</label>
        {errors.aceptaTerminos && <span className="modal-content__span">{errors.aceptaTerminos.message}</span>}
      </div>

      <button type="submit" className="modal-content__button">Enviar</button>

      {/* <pre style={{ width: "400px" }}>{JSON.stringify(watch(), null, 2)}</pre> */}
      <h3 className="principal">Welcome {watch("nombre")} !</h3>
    </form>
  );
}

export default Formulario;