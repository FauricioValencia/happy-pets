import React from 'react'
import PropTypes from 'prop-types'
import { Modal, Carousel } from 'antd'
import { isEmpty } from 'lodash'

const ModalDetails = ({ petSelected, visible, onCancel }) => {
  const hasImages = !isEmpty(petSelected.imgsUrls)
  const { imgsUrls, name, description, age, typeAges, race } = petSelected
  const details = `${description} Edad:${age} ${typeAges} Raza: ${race}`

  return (
    <Modal title='Detalle' centered visible={visible} onCancel={onCancel} onOk={onCancel}>
      <Carousel autoplay>
        {hasImages &&
          imgsUrls.map(img => {
            return <img src={img.url} alt={img.id} />
          })}
      </Carousel>
      <h1>Nombre: {name}</h1>
      <h2>{details}</h2>
    </Modal>
  )
}

ModalDetails.propTypes = {
  petSelected: PropTypes.shape({
    id: PropTypes.number.isRequired,
    imgsUrls: PropTypes.arrayOf(
      PropTypes.shape({ id: PropTypes.number, url: PropTypes.string })
    ),
    age: PropTypes.number.isRequired,
    typeAges: PropTypes.oneOf(['Months', 'Years']),
    name: PropTypes.string.isRequired,
    race: PropTypes.string.isRequired,
    description: PropTypes.string
  }),
  visible: PropTypes.bool,
  onCancel: PropTypes.func
}

export default ModalDetails
