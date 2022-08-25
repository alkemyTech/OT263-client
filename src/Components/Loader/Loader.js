import ClipLoader from "react-spinners/ClipLoader"


function Loader({ color, size, weight, image }) {
    const override = {
        display: "block",
        margin: "0 auto",   
        border:`${weight}px solid`,
        backgroundImage: `url(${image})`
    }

return (
    <ClipLoader cssOverride={override} size={size} color={color} />
)
}

export default Loader

