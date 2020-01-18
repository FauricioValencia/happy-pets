import React, { useState } from 'react'
import { useFormik } from 'formik'
import { Form, Icon, Input, Button, Upload, Modal } from 'antd'
import 'antd/dist/antd.css'

import classes from './styles.module.scss'

const CreatePost = () => {
  const [fileList, setFileList] = useState([])
  const [previewVisible, setPreviewVisible] = useState(false)
  const [previewImage, setPreviewImage] = useState(null)
  const getBase64 = file => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => resolve(reader.result)
      reader.onerror = error => reject(error)
    })
  }

  const handleCancel = () => setPreviewVisible(false)
  const handleChange = ({ fileList }) => {
    console.log({ fileList })
    setFileList(fileList)
  }

  const handlePreview = async file => {
    if (!file.url && !file.preview)
      file.preview = await getBase64(file.originFileObj)

    setPreviewImage(file.url || file.preview)
    setPreviewVisible(true)
  }

  const uploadButton = (
    <div>
      <Icon type='plus' />
      <div className='ant-upload-text'>Upload</div>
    </div>
  )
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: ''
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2))
    }
  })
  return (
    <Form onSubmit={formik.onSubmit} className={classes.root}>
      <Form.Item>
        <Input
          name='name'
          onChange={formik.handleChange}
          value={formik.values.name}
          prefix={<Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />}
          placeholder='Nombre de la mascota'
        />
      </Form.Item>
      <Form.Item>
        <Input
          name='race'
          onChange={formik.handleChange}
          value={formik.values.race}
          prefix={<Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />}
          placeholder='Raza'
        />
      </Form.Item>
      <Form.Item>
        <Input
          name='age'
          onChange={formik.handleChange}
          value={formik.values.age}
          prefix={<Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />}
          placeholder='Edad'
        />
      </Form.Item>
      <Form.Item>
        <Input
          name='description'
          onChange={formik.handleChange}
          value={formik.values.description}
          prefix={<Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />}
          placeholder='Descripción'
        />
      </Form.Item>
      <Form.Item>
        <Upload
          listType='picture-card'
          fileList={fileList}
          onPreview={handlePreview}
          onChange={handleChange}
        >
          {fileList.length >= 8 ? null : uploadButton}
        </Upload>
        <Modal visible={previewVisible} footer={null} onCancel={handleCancel}>
          <img alt='example' style={{ width: '100%' }} src={previewImage} />
        </Modal>
      </Form.Item>
      <Form.Item style={{ justifyContent: 'center', display: 'flex' }}>
        <Button type='primary' htmlType='submit'>
          Crear publicación
        </Button>
      </Form.Item>
    </Form>
  )
}

export default CreatePost
