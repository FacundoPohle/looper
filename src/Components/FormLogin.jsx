import { Height } from "@mui/icons-material";
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
              <label >Name:</label>
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
            {errors.nombre?.type === "required" && <span className="modal-content__span">Name required</span>}
            {errors.nombre?.type === "maxLength" && (
              <span className="modal-content__span">Name must not be longer than 20 characters</span>
            )}
            {errors.nombre?.type === "minLength" && (
              <span className="modal-content__span">Name must be longer than 2 characters</span>
            )}
          </div>

          <div>
            <div className="modal-content__labels">
              <label>Email adress:</label>
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
              <label>Date of birth:</label>
              <input
                type="date"
                name="fechaNacimiento"
                
                {...register("fechaNacimiento", {
                  required: {
                    value: true,
                    message: "Date of birth required",
                  },
                  validate: (value) => {
                    const fechaNacimiento = new Date(value);
                    const fechaActual = new Date();
                    const edad =
                      fechaActual.getFullYear() - fechaNacimiento.getFullYear();
                    return edad >= 18 || "You must be of legal age";
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
              <label>Password:</label>
              <input
                type="password"
                name="password"
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password required",
                  },
                  minLength: {
                    value: 6,
                    message: "Password must be longer than 6 characters",
                  },
                })}
              />
            </div>
            {errors.password && <span className="modal-content__span">{errors.password.message}</span>}
          </div>

          <div>
            <div className="modal-content__labels">
              <label>Confirm:</label>
              <input
                type="password"
                name="confirmarPassword"
                {...register("confirmarPassword", {
                  required: {
                    value: true,
                    message: "Confirm password is required",
                  },
                  minLength: {
                    value: 6,
                    message: "Confirm password must be longer than 6 charaters",
                  },
                  validate: (value) =>
                    value === password.current || "Passwords do not match",
                })}
              />
            </div>
            {errors.confirmarPassword && (
              <span className="modal-content__span">{errors.confirmarPassword.message}</span>
            )}
          </div>

          <div>
            <div className="modal-content__labels">
              <label htmlFor="pais">Country:</label>
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
        <label>I accept terms and conditions</label>
        {errors.aceptaTerminos && <span className="modal-content__span">{errors.aceptaTerminos.message}</span>}
      </div>

      <button type="submit" className="modal-content__button">Send</button>

      {/* <pre style={{ width: "400px" }}>{JSON.stringify(watch(), null, 2)}</pre> */}
      <h3 className="principal">Welcome {watch("nombre")} !</h3>
    </form>
  );
}

export default Formulario;