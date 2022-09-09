import React from "react";
import "bulma/css/bulma.min.css";
import { deleteRequest } from "../../Services/privateApiService";
import { RiDeleteBack2Fill } from "react-icons/ri";

function DeleteButton({endpoint, id}) {
    return (
        <button
            className="button is-danger is-inverted is-rounded"
            onClick={() => deleteRequest(endpoint, id)}
        >
            <span className="icon">
                <RiDeleteBack2Fill size='2em'/>
            </span>
        </button>
    );
}

export default DeleteButton;
