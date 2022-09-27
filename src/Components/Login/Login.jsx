import "bulma/css/bulma.min.css";
import LoginFooter from "./LoginFooter";
import LoginForm from "./LoginForm";
import image4 from "./Rectangle-4.png";

export const Login = () => {
    return (
        <div className="columns my-0">
            <div className="column is-flex is-flex-direction-column is-justify-content-center is-align-items-center has-text-black">
                <div style={{maxWidth: "500px"}}>
                    <LoginForm />
                    <LoginFooter />
                </div>
            </div>
            <div className="column is-hidden-mobile py-0">
                <figure className="image">
                    <img
                        src={image4}
                        width="708"
                        height="820"
                        alt="manos unidas"
                    />
                </figure>
            </div>
        </div>
    );
};
