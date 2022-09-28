import Fade from 'react-reveal/Fade'
import { useNavigate, Link } from 'react-router-dom'
import { BsChevronRight } from 'react-icons/bs'

import SliderContainer from '../Components/Slider/SliderContainer'
import TestimonialCard from '../Components/Testimonials/TestimonialCard'
import MemberCard from '../Components/Members/MemberCard'
import NewCard from '../Components/News/NewCard'
import Loader from '../Components/Loader/Loader'
import NotFound from './NotFound'

import { routes } from '../Config/routes'

import useAxios from '../hooks/useAxios'

const Home = ({ welcomeText }) => {
  const navigate = useNavigate()

  const {
    error: membersError,
    loading: membersLoading,
    response: members
  } = useAxios({
    url: 'http://localhost:3001/members'
  })

  const {
    error: testimonialsError,
    loading: testimonialsLoading,
    response: testimonials
  } = useAxios({
    url: 'http://localhost:3001/testimonials'
  })

  const {
    error: newsError,
    loading: newsLoading,
    response: news
  } = useAxios({
    url: 'http://localhost:3001/news'
  })

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

  const loading = membersLoading && testimonialsLoading && newsLoading
  const error = membersError && testimonialsError && newsError

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
      <section className='hero is-medium'>
        <div className='hero-body'>
          <div className='columns is-vcentered is-centered'>
            <div className='rows column is-5'>
              <h1 className='row title is-2 has-text-black'>Hola! Bienvenidx</h1>
              <span className='row has-text-black'>{welcomeText}</span>
              <div className='my-4'>
                <Link
                  to={routes.contact}
                  className='button is-rounded has-text-weight-medium is-size-5'
                  style={{ backgroundColor: '#FF0000', color: 'white' }}
                >
                  Contactanos
                </Link>
              </div>
            </div>
            <div className='column is-5' style={{ maxHeight: '25%' }}>
              <div>
                <SliderContainer data={news?.data} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className='rows'>
        <div className='container is-clipped mt-5'>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <h2 className='subtitle is-3 is-inline has-text-black has-text-weight-bold'>
              Nuestro Staff
            </h2>
            <span
              className='is-flex is-align-items-center has-text-black'
              style={{ cursor: 'pointer' }}
              onClick={() => {
                navigate(routes.about)
              }}
            >
              Ver todos <BsChevronRight />
            </span>
          </div>
          <div className='columns is-multiline'>
            {members?.data.slice(0, 5).map(member => (
              <div className='column is-flex is-justify-content-center' key={member.id}>
                <MemberCard
                  name={member.name}
                  role={membersRoles[member.name]}
                  src={member.image}
                />
              </div>
            ))}
          </div>
        </div>

        <div className='container is-clipped mt-5'>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <h2 className='subtitle is-3 is-inline has-text-black has-text-weight-bold'>
              Testimonios
            </h2>
            <span
              className='is-flex is-align-items-center has-text-black'
              style={{ cursor: 'pointer' }}
              onClick={() => {
                navigate(routes.testimonials)
              }}
            >
              Ver todos <BsChevronRight />
            </span>
          </div>
          <div className='columns is-multiline'>
            {testimonials?.data.slice(0, 4).map(testimonial => (
              <div className='column is-flex is-justify-content-center' key={testimonial.id}>
                <TestimonialCard
                  name={testimonial.name}
                  content={testimonial.content}
                  image={testimonial.image}
                />
              </div>
            ))}
          </div>
        </div>

        <div className='container is-clipped my-5'>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <h2
              className='subtitle is-3 is-inline has-text-black has-text-weight-bold'
              style={{ color: 'black', fontWeight: '800' }}
            >
              Ultimas Novedades
            </h2>
            <span
              className='is-flex is-align-items-center has-text-black'
              style={{ cursor: 'pointer' }}
              onClick={() => {
                navigate(`/novedades`)
              }}
            >
              Ver todos <BsChevronRight />
            </span>
          </div>
          <div className='columns is-multiline  is-variable is-2-mobile is-4-tablet is-5-desktop is-8-widescreen is-2-fullhd mx-2'>
            {news?.data.slice(0, 2).map(newItem => (
              <div className='column is-flex is-justify-content-center my-4' key={newItem.id}>
                <NewCard
                  title={newItem.title}
                  text={newItem.content}
                  url={`/news/${newItem.id}`}
                  image={newItem.image}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Fade>
  )
}

Home.defaultProps = {
  welcomeText:
    'Desde 1997 trabajamos con los chicos, chicas, mamás, papás, abuelos y vecinos del barrio La Cava. Gracias a la unión de las manos de todas las familias, del barrio y las que viven fuera de él, es que podemos pensar, crear y garantizar los procesos de inserción y crecimiento social. Hoy somos un centro comunitario que acompaña a más de 700 personas a través de las áreas de: educación, deportes, primera infancia, salud, alimentación y trabajo social.'
}
export default Home
