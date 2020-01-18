import React from 'react'
import PropTypes from 'prop-types'
import { isEmpty } from 'lodash'

import { Card } from 'antd'
const { Meta } = Card

function CardComponent({
  imgsUrls,
  name,
  description,
  age,
  typeAges,
  race,
  ...otherProps
}) {
  const details = `${description} Edad:${age} ${typeAges} Raza: ${race}`
  return (
    <Card
      {...otherProps}
      hoverable
      loading={isEmpty(description)}
      style={{ width: 240, marginTop: 10, marginRight: 10 }}
      cover={<img alt='pet' src={imgsUrls[0].url} />}
      title={name}
    >
      <Meta description={details} />
    </Card>
  )
}

CardComponent.propTypes = {
  imgUrl: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string
}

export default CardComponent
