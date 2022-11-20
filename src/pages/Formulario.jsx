import React from "react";
import { useForm } from "react-hook-form";
import '../css/Formulario.css'

const Formulario = () => {
  const { register, formState: { errors }, watch, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const incluirServicio = watch('incluirServicio');

  return (
    <div className="formulario">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3>Regístrate</h3>
        <div>
          <input type="number" {...register("cedula")} placeholder="Cedula"/>
        </div>
        
        <div>
          <input
            type="text" placeholder="Nombre completo"
            {...register("nombre", { required: true, maxLength: 30, })}/>
            {errors.nombre?.type === "required" && <p>El campo es requerido</p>}
            {errors.nombre?.type === "maxLength" && <p>Maximo 30 caracteres</p>}
        </div>

        <div>
          <input type="tel" {...register("celular")} placeholder="Número de telefono"/>
        </div>

        <div>
          <input type="email" placeholder="Correo electronico"
            {...register("correo", {
              pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
            })}
          />
          {errors.correo?.type === "pattern" && <p>El correo no cumple</p>}
        </div>

        <div>
          <input type="password" {...register("contraseña")} placeholder="Contraseña"/>
        </div>


{/* --------- incluir servicio ------------ */}
        <div className="servicios">
        <div className="agregarServicio">
          <label name="marca">incluir servicio</label>
          <input type="checkbox" name="marca" className="marcar" {...register('incluirServicio')}/>
        </div>
        {incluirServicio && (
        <div>
          <select {...register("tipo-servicio")}>
            <option value="slc">Ninguno</option>
            <option value="Int+Para">Internet + Parabólica</option>
            <option value="i">Internet 60MBS</option>
            <option value="p">Parabólica</option>
          </select>

          <div>
            <input type="text" {...register("incluir-servicio")} placeholder="nombre"/>
          </div>

            <div>
            <input type="text" {...register("incluir-servicio")} placeholder="apellido"/>
            </div>

          <div>
            <input type="tel" {...register("incluir-servicio")} placeholder="número celular"/>
          </div>

          <div>
            <input type="text" {...register("incluir-servicio")} placeholder="barrio"/>
          </div>

          <div>
          <input type="text" {...register("incluir-servicio")} placeholder="dirección"/>
          </div>
        </div>
        
        )}
        </div>  



        <input type="submit" value="Crear cuenta" placeholder="Barrio"/>
      </form>
    </div>
  );
};

export default Formulario;