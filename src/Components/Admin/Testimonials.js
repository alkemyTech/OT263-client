import React, { useEffect, useState } from 'react'
import useAxios from '../../hooks/useAxios'
import Fade from 'react-reveal/Fade'

import Form from '../Admin/ActivityForm/Form'
import Input from '../Admin/ActivityForm/Input'
import TextEditor from '../Admin/ActivityForm/TextEditor'
import Button from './ActivityForm/Button'
import ImageInput from './Common/ImageInput'

import { GrEdit } from 'react-icons/gr'
import { RiDeleteBin5Line } from 'react-icons/ri'
import { IoIosSave } from 'react-icons/io'
import { BsCardImage } from 'react-icons/bs'
import { MdOutlineImageNotSupported } from 'react-icons/md'
import { VscNewFile } from 'react-icons/vsc'

import './Testimonials.css'
import 'react-quill/dist/quill.snow.css'
import RichTextInput from './Common/RichTextInput'

function ImageIcon({ showModal, hasImage }) {
  return (
    <abbr title='Mostrar Imagen' style={{ textDecoration: 'none' }}>
      <span className='icon' onClick={showModal} style={{ cursor: 'pointer' }}>
        {hasImage ? <BsCardImage /> : <MdOutlineImageNotSupported />}
      </span>
    </abbr>
  )
}

function Header({ onClick }) {
  return (
    <thead>
      <tr>
        <th>
          <abbr title='Número'>N°</abbr>
        </th>
        <th>Nombre</th>
        <th>Imagen</th>
        <th>Mensaje</th>
        <th>
          <div className='buttons has-addons is-flex is-flex-wrap-nowrap'>
            <button className='button' onClick={onClick}>
              <span className='icon'>
                <VscNewFile />{' '}
              </span>
              <span>Nuevo</span>
            </button>
          </div>
        </th>
      </tr>
    </thead>
  )
}

function Row({ index, data, onChange, onDelete, onSubmit, isNew = false }) {
  const [editable, setEditable] = useState(isNew)
  const [showModal, setShowModal] = useState(false)
  const toggleClass = editable ? 'has-background-primary-light' : ''
  const [error, setError] = useState({ name: '', message: '' })

  useEffect(() => {
    setEditable(false)
  }, [data])

  return (
    <>
      <tr key={index}>
        <th className={toggleClass}>{index + 1}</th>
        <td className={toggleClass}>
          {editable ? (
            <input
              data-index={index}
              onChange={e => onChange(index, 'name', e.target.value)}
              type='text'
              value={data?.name}
              className={`${toggleClass} input`}
            ></input>
          ) : (
            data.name
          )}
        </td>
        <td className={toggleClass}>
          {editable ? (
            <ImageInput onChange={e => onChange(index, 'image', e.target.files)} />
          ) : (
            <ImageIcon showModal={() => setShowModal(true)} hasImage={data.image} />
          )}
        </td>
        <td className={toggleClass}>
          {editable ? (
            <RichTextInput
              className={toggleClass}
              value={data.message}
              onChange={value => onChange(index, 'message', value)}
            />
          ) : (
            <div
              className='static-text'
              dangerouslySetInnerHTML={{ __html: editable ? '' : data.message }}
            ></div>
          )}
        </td>
        <td className={toggleClass}>
          <div className='buttons has-addons is-flex is-flex-wrap-nowrap'>
            <button
              disabled={(editable && !data.name) || !data.message || data.message === '<p><br></p>'}
              className='button'
              onClick={() => {
                if (editable) onSubmit(index)
                setEditable(!editable)
              }}
            >
              <span className='icon'>{editable ? <IoIosSave /> : <GrEdit />}</span>
            </button>
            <button data-index={index} className='button' onClick={onDelete}>
              <span className='icon'>
                <RiDeleteBin5Line />
              </span>
            </button>
          </div>
        </td>
        <td hidden={!showModal}>
          <Modal show={showModal} onClick={() => setShowModal(false)} imgUrl={data.image} />
        </td>
      </tr>
    </>
  )
}

function Testimonials() {
  const [data, setData] = useState(mockData())
  const [showForm, setShowForm] = useState(false)

  const handleChange = (index, name, value) => {
    const newData = [...data]

    const newRow = data[index]
    newRow[name] = value
    newData[index] = newRow

    setData(newData)
  }

  const handleDelete = e => {
    const { index } = e.currentTarget.dataset
    const newData = data.filter((val, i) => i !== Number(index))

    setData(newData)
  }

  const handleSubmit = index => {
    console.log('PUT htttp://localhost:3000/testimonials/' + index)
    console.log('data:', JSON.stringify(data[index]))
    // TODO: dispatch
  }

  return (
    <Fade>
      <div className='table-container'>
        <table className='table is-fullwidth'>
          <Header onClick={() => setShowForm(true)} />
          <tbody>
            {data?.map((row, index) => (
              <Row
                key={index}
                index={index}
                data={row}
                onChange={handleChange}
                onDelete={handleDelete}
                onSubmit={handleSubmit}
              />
            ))}
          </tbody>
        </table>
        <FormModal showForm={showForm} onClose={() => setShowForm(false)} />
      </div>
    </Fade>
  )
}

function Modal({ show, onClick, imgUrl }) {
  return (
    <div className={`modal ${show ? 'is-active' : ''}`}>
      <div className='modal-background'></div>
      <div className='modal-content'>
        <p className='image is-4by3'>
          <img src={imgUrl} alt='' />
        </p>
      </div>
      <button className='modal-close is-large' aria-label='close' onClick={onClick}></button>
    </div>
  )
}

function FormModal({ showForm, onClose }) {
  const [name, setName] = useState('')
  const [image, setImage] = useState('')
  const [content, setContent] = useState('')

  const { fetchData, error, response } = useAxios({
    method: 'post',
    headers: JSON.stringify({
      'Content-Type': 'application/json',
      Accept: '*/*',
      Authorization: 'Bearer token' // TODO: add user token
    }),
    url: 'http://localhost:3001/testimonials',
    body: JSON.stringify({
      name,
      image,
      content
    }),
    autoRun: false
  })

  const handleSubmit = e => {
    e.preventDefault()
    // fetchData()

    if (error) return

    // TODO: dispatch
    console.log(response)

    setName('')
    setImage('')
    setContent('')
  }

  return (
    <div className={`modal ${showForm ? 'is-active' : ''}`}>
      <div className='modal-background'></div>
      <div className='modal-content has-background-white'>
        <Form onSubmit={handleSubmit} title='Testimonio'>
          <Input
            label={'Nombre'}
            placeholder={'Agregá tu nombre completo'}
            onChange={setName}
            value={name}
          />
          <ImageInput onChange={console.log} label='Imagen' />
          <TextEditor
            label={'Descripción'}
            placeholder={'Agregá la descripción'}
            onChange={setContent}
            value={content}
          />
          <Button text={'Guardar'} disabled={!name || !content || content === '<p><br></p>'} />
        </Form>
      </div>
      <button onClick={onClose} className='modal-close is-large' aria-label='close'></button>
    </div>
  )
}

// TODO: delete
function mockData() {
  return [
    {
      name: 'Moana Larsen',
      image:
        'https://images.unsplash.com/photo-1508779544523-dd1b27685be3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      message:
        'magna. Duis dignissim tempor arcu. Vestibulum ut eros non enim commodo hendrerit. Donec porttitor tellus non magna. Nam ligula elit, pretium et, rutrum non, hendrerit id, ante. Nunc mauris sapien, cursus in, hendrerit consectetuer, cursus et, magna. Praesent interdum ligula eu enim. Etiam'
    },
    {
      name: 'Bertha Hebert',
      image:
        'https://images.unsplash.com/photo-1535090042247-30387644aec5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1375&q=80',
      message:
        'purus. Maecenas libero est, congue a, aliquet vel, vulputate eu, odio. Phasellus at augue id ante dictum cursus. Nunc mauris elit, dictum eu, eleifend nec, malesuada ut, sem. Nulla interdum.'
    },
    {
      name: 'Elijah Gallegos',
      image:
        'https://images.unsplash.com/photo-1617450365226-9bf28c04e130?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',

      message:
        'tincidunt aliquam arcu. Aliquam ultrices iaculis odio. Nam interdum enim non nisi. Aenean eget metus. In nec orci. Donec nibh. Quisque nonummy ipsum non arcu. Vivamus sit amet risus. Donec egestas. Aliquam nec enim. Nunc ut erat. Sed nunc est, mollis non, cursus non, egestas a, dui. Cras pellentesque. Sed dictum. Proin eget odio. Aliquam vulputate ullamcorper'
    },
    {
      name: 'Amery Dickson',
      image:
        'https://images.unsplash.com/photo-1508779544523-dd1b27685be3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      message:
        'lobortis ultrices. Vivamus rhoncus. Donec est. Nunc ullamcorper, velit in aliquet lobortis, nisi nibh lacinia orci, consectetuer euismod est arcu ac orci. Ut semper pretium neque. Morbi quis urna. Nunc quis arcu vel quam dignissim pharetra. Nam ac nulla. In tincidunt congue turpis. In condimentum. Donec at arcu. Vestibulum ante ipsum primis in faucibus orci'
    },
    {
      name: 'Brynne Anderson',
      image:
        'https://images.unsplash.com/photo-1508779544523-dd1b27685be3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      message:
        'orci, adipiscing non, luctus sit amet, faucibus ut, nulla. Cras eu tellus eu augue porttitor interdum. Sed auctor odio a purus. Duis'
    },
    {
      name: 'Bryan Hebert',
      image:
        'https://images.unsplash.com/photo-1617450365226-9bf28c04e130?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',

      message:
        'purus. Maecenas libero est, congue a, aliquet vel, vulputate eu, odio. Phasellus at augue id ante dictum cursus. Nunc mauris elit, dictum eu, eleifend nec, malesuada ut, sem. Nulla interdum.'
    },
    {
      name: 'John Smith',
      image:
        'https://images.unsplash.com/photo-1535090042247-30387644aec5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1375&q=80',
      message:
        'purus. Maecenas libero est, congue a, aliquet vel, vulputate eu, odio. Phasellus at augue id ante dictum cursus. Nunc mauris elit, dictum eu, eleifend nec, malesuada ut, sem. Nulla interdum.'
    },
    {
      name: 'Lyan Scobedo',
      image:
        'https://images.unsplash.com/photo-1617450365226-9bf28c04e130?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      message:
        'purus. Maecenas libero est, congue a, aliquet vel, vulputate eu, odio. Phasellus at augue id ante dictum cursus. Nunc mauris elit, dictum eu, eleifend nec, malesuada ut, sem. Nulla interdum.'
    }
  ]
}

export default Testimonials
