export default function SocialIcon({ children, to }) {
  return (
    <div
      style={{
        background: 'black',
        borderRadius: '50%',
        width: '4rem',
        height: '4rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '2rem',
        margin: '0 1rem',
        cursor: 'pointer'
      }}
    >
      <a href={to} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {children}
      </a>
    </div>
  )
}
