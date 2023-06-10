import { PlusOutlined } from '@ant-design/icons';
import { Button, Form, Input, Upload } from 'antd';

import { useForm } from '../../hooks/useForm';

import './FormEvidencias.css';

const { TextArea } = Input;
const normFile = (e) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

const FormEvidencias = () => {
  const { formValues, handleChange } = useForm({
    dato: '',
    mensaje: '',
    fileList: [],
  });

  const { fileList, mensaje, dato } = formValues;

  const handleSubmit = () => {
    console.log({ dato, mensaje, fileList });
  };

  const handleFileChange = ({ fileList }) => {
    handleChange({
      target: {
        name: 'fileList',
        value: fileList,
      },
    });
  };

  return (
    <>
      <Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout='horizontal'
        style={{
          maxWidth: 600,
          marginTop: '2rem',
        }}
        onFinish={handleSubmit}
      >
        <h1 className='title'>Formulario evidencias</h1>

        <Form.Item label='Dato'>
          <Input
            name='dato'
            value={dato}
            onChange={handleChange}
            autoComplete='off'
          />
        </Form.Item>

        <Form.Item
          label='Imagen'
          valuePropName='fileList'
          getValueFromEvent={normFile}
        >
          <Upload
            action='/upload.do'
            listType='picture-card'
            name='fileList'
            fileList={fileList}
            onChange={handleFileChange}
          >
            <div>
              <PlusOutlined />
              <div
                style={{
                  marginTop: 8,
                }}
              >
                Upload
              </div>
            </div>
          </Upload>
        </Form.Item>

        <Form.Item label='Mensaje'>
          <TextArea
            rows={4}
            name='mensaje'
            value={mensaje}
            onChange={handleChange}
          />
        </Form.Item>

        {/* <Form.Item label='s'> */}
        <div className='button-container'>
          <Button type='primary' htmlType='submit'>
            Guardar
          </Button>
        </div>
        {/* </Form.Item> */}
      </Form>
    </>
  );
};

export default FormEvidencias;
