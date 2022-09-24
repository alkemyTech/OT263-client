import { IconContext } from 'react-icons'
import { FiFacebook } from 'react-icons/fi'
import { GrInstagram } from 'react-icons/gr'
import { FaLinkedinIn } from 'react-icons/fa'
import { BsTwitter } from 'react-icons/bs'
import SocialIcon from './socialIcon'

const SocialIcons = ({ data }) => {
  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
        height: '9rem',
        alignItems: 'center'
      }}
    >
      <IconContext.Provider value={{ color: 'white', className: 'hover:text-yellow-500' }}>
        <SocialIcon to={data.instagram}>
          <GrInstagram />
        </SocialIcon>
        <SocialIcon to={data.facebook}>
          <FiFacebook />
        </SocialIcon>
        <SocialIcon to={data.twitter}>
          <BsTwitter />
        </SocialIcon>
        <SocialIcon to={data.linkedin}>
          <FaLinkedinIn />
        </SocialIcon>
      </IconContext.Provider>
    </div>
  )
}

export default SocialIcons
