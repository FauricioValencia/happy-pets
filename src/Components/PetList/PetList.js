import React, { useEffect, useState } from 'react'
import { isEmpty } from 'lodash'
import 'antd/dist/antd.css'

import classes from './styles.module.scss'

import CardPets from '../Common/Card'
import ModalDetailsPet from '../Common/Modals'

// TODO: centrar los cards
function AllPetsContainer({ getPetList, PetList, putSelectedPet }) {
  const [visible, setVisible] = useState(false)
  const hasPets = !isEmpty(PetList)

  useEffect(() => {
    getPetList()
  }, [])

  const showDetailsPet = pet => (putSelectedPet(pet), setVisible(true))

  return (
    <div className={classes.root}>
      {hasPets &&
        PetList.map(pet => (
          <CardPets key={pet.id} {...pet} onClick={() => showDetailsPet(pet)} />
        ))}
      <ModalDetailsPet visible={visible} onCancel={() => setVisible(false)} />
    </div>
  )
}

export default AllPetsContainer
