import Fade from 'react-reveal/Fade'
import { Link } from 'react-router-dom'
import Loader from '../Components/Loader/Loader'
import useAxios from '../hooks/useAxios'
import NotFound from './NotFound'
import MemberCard from '../Components/Members/MemberCard'

import { routes } from '../Config/routes'

const About = () => {
  const { error, loading, response } = useAxios({
    url: 'http://localhost:3001/members'
  })
  const testimonialMemberId = 5

  const membersRoles = {
    'María Iraola': 'Presidenta',
    'Marita Gomez': 'Fundadora',
    'Miriam Rodriguez': 'Terapista Ocupacional',
    'Cecilia Mendez': 'Psicopedagoga',
    'Mario Fuentes': 'Psicólogo',
    'Rodrigo Fuente': 'Contador',
    'Maria Garcia': 'Prof. de Artes Dramáticas',
    'Marco Fernandez': ' Prof. de Ed. Física',
    'Luca Petroroso': 'Miembro',
    'Julio Rivas': 'Miembro',
    'Maria Dolores Paz': 'Miembro'
  }

  return loading ? (
    <div className='hero is-large'>
      <div className='hero-body'>
        <div className='container has-text-centered'>
          <Loader />
        </div>
      </div>
    </div>
  ) : error ? (
    <NotFound />
  ) : (
    <Fade>
      <div className='container is-clipped my-5'>
        <div>
          <h2 className='title is-1 has-text-black has-text-weight-bold has-text-centered my-6'>
            ¡Nuestro staff!
          </h2>
        </div>
        <div className='columns mx-2 my-5'>
          <div className='column is-full-mobile has-text-black is-justify-content-center'>
            {response.data
              .filter(e => e.id === testimonialMemberId)
              .map(m => {
                return (
                  <>
                    <div className='title mb-2 has-text-black' key={m.id}>
                      {m.name}
                    </div>

                    <div className='title has-text-weight-normal mb-2 has-text-black'>
                      {membersRoles[m.name]}
                    </div>
                  </>
                )
              })}
            <p className='has-text-black'>
              Desde 1997 trabajamos con los chicos, chicas, mamás, papás, abuelos y vecinos del
              barrio La Cava. Gracias a la unión de las manos de todas las familias, del barrio y
              las que viven fuera de él, es que podemos pensar, crear y garantizar los procesos de
              inserción y crecimiento social. Hoy somos un centro comunitario que acompaña a más de
              700 personas a través de las áreas de: educación, deportes, primera infancia, salud,
              alimentación y trabajo social.
            </p>

            <div className='buttons is-flex is-flex-direction-column is-align-items-start'>
              <span
                className='button box has-text-weight-bold my-3 is-medium is-responsive'
                style={{ background: 'red', color: 'white', borderRadius: '1rem' }}
              >
                <Link to={routes.signup} style={{ color: 'white' }}>
                  ¡Quiero ser parte!
                </Link>
              </span>
            </div>
          </div>
          <div
            className='column is-one-third is-full-mobile is-justify-content-center'
            style={{
              background: `url(${response.data[4].image})`,
              backgroundSize: 'cover',
              borderRadius: '1.5rem ',
              minHeight: '300px'
            }}
          ></div>
        </div>

        <div className='columns is-multiline'>
          {response.data
            .filter(e => e.id !== testimonialMemberId)
            .map(({ id, name, image }) => (
              <div className='column is-flex is-justify-content-center' key={id}>
                <MemberCard name={name} role={membersRoles[name]} src={image} key={id} />
              </div>
            ))}
        </div>
      </div>
    </Fade>
  )
}

export default About
