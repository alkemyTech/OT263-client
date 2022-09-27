import ClipLoader from 'react-spinners/ClipLoader'

function Loader({ color = null, size = '7rem', weight = 15 }) {
  const colors = ['red', 'yellow', 'blue']
  const index = Date.now() % 3

  const override = {
    display: 'block',
    margin: 'auto',
    border: `${weight}px solid ${color ? color : colors[index]}`
  }

  return <ClipLoader cssOverride={override} size={size} color={color ? color : colors[index]} />
}

export default Loader
