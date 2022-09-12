import React from "react";
import RegisterForm from "../Auth/RegisterForm";
import "bulma/css/bulma.min.css";

function Register() {
    return (
        <div className="columns my-0">
            <div className="column is-flex is-flex-direction-column is-justify-content-center is-align-items-center">
                <p className="subtitle">Bienvenido</p>
                <span className="title">Crea una cuenta</span>
                <RegisterForm />
                <p className="">
                    ¿Ya tienes una cuenta?{" "}
                    <strong style={{ color: "red" }}>Inicia Sesión</strong>
                </p>
            </div>
            <div className="column is-hidden-mobile py-0">
                <figure className="image">
                    <img src="images/Rectangle-4.png" alt="manos unidas en circulo" />
                </figure>
            </div>
        </div>
    );
}

export default Register;
