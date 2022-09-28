import React from 'react'
import Fade from 'react-reveal/Fade'
import useAxios from '../../hooks/useAxios'
import NotFound from '../../Pages/NotFound'
import Loader from '../Loader/Loader'

const Members = () => {
  const { loading, error, response } = useAxios({ url: 'http://localhost:3001/members' })

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
    <Loader />
  ) : error ? (
    <NotFound />
  ) : (
    <Fade>
      <div className='box'>
        <table className='table is-fullwidth'>
          <thead>
            <tr>
              <th>
                <abbr title='Identificacion'>#</abbr>
              </th>
              <th>Imagen</th>
              <th>Nombre</th>
              <th>Rol</th>
            </tr>
          </thead>
          <tbody>
            {response.data.map(member => (
              <tr key={member.id}>
                <th>{member.id}</th>
                <td>
                  <div
                    style={{
                      width: '128px',
                      height: '128px',
                      borderRadius: '50%',
                      background: `url(${member.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  ></div>
                </td>
                <td>{member.name}</td>
                <th>{membersRoles[member.name]}</th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Fade>
  )
}

export default Members
