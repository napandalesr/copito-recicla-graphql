"use client"

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button, Form, Input, InputNumber, message, Radio, RadioChangeEvent, Select, Upload, UploadProps } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import axios from 'axios';

import { useMutationEntity } from '@/hooks/mutation/useMutationEntity';
import { EntityType, EntityTypeGet } from '@/types/entity';
import { useMutationUpdateEntity } from '@/hooks/mutation/useMutationUpdateEntity';
import Loading from '@/components/Loading';

type props = {
  entity?: dataProps
}

type dataProps = {
  category?: "JAC" | "CE";
  name?: string;
  nameEntity?: string;
  position?: string;
  email?: string;
  phone?: number;
  city?: string;
  address?: string;
  neighborhood?: string;
  commune?: number;
  acopio?: boolean;
  acopioName?: string;
  prae?: boolean;
  praeName?: string;
  proceda?: boolean;
  procedaProject?: string;
  committee?: boolean;
  attachment?: string;
  id?: number;
}

const Register = ({ 
  entity 
}: props) => {
  const { useHandleCreateEntity, loading: loadingCreateEntity } = useMutationEntity();
  const { useHandleUpdateEntity, loading: loadingUpdateEntity } = useMutationUpdateEntity();
  const [category, setCategory] = useState<"JAC" | "CE">(entity?.category ?? 'JAC');
  const [attachmentState, setAttachmentState] = useState<(File | undefined)>();
  const [form] = Form.useForm();

  useEffect(() => {
    if(entity) {
      form.setFieldsValue({
        ...entity
      })
    }
  }, []);

  const getCategory = (e: RadioChangeEvent) => {
    setCategory(e.target.value);
  }

  const props: UploadProps = {
    name: 'file',
    multiple: false,
    onChange(info: any) {
      const { status } = info.file;
      if (status !== 'uploading') {
        
        console.log(info.file, info.fileList[0].originFileObj);
        setAttachmentState(info.fileList[0].originFileObj);
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log('Dropped files', e.dataTransfer.files);
    },
  };

  const handleSubmit = async (data: EntityType) => {
    data.category = category
    try {
      if(attachmentState) {
        const formData = new FormData();
        formData.append('file', attachmentState); 
        let config = {
          headers: {
            'Content-Type': 'multipart/form-data',
          }
        }
        const responseFile = await axios.post('/api/upload', formData, config);
        data.attachment = responseFile.data.filePath;
        await useHandleCreateEntity({
          ...data
        })

        message.success({
          content: "Datos guardado correctamente"
        });
        form.resetFields();
      }
    } catch (error) {
      message.error({
        content: "Error - El correo ya se encuentra registrado"
      })
      console.log("Error - "+error);
    }
  }

  const handleUpdate = async (data: EntityTypeGet) => {
    const dataToUpdate:EntityTypeGet = data
    try {
      useHandleUpdateEntity({
        ...dataToUpdate,
        ...cleanObject(data)
      })
    } catch (error) {
      message.error({
        content: "Error al actualizar los datos"
      })
      console.log("Error - "+error);
    }
  }

  function cleanObject<T extends object>(obj: T): T {
    return Object.fromEntries(
      Object.entries(obj).filter(([_, value]) => value !== null && value !== undefined)
    ) as T;
  }

  return <section className='flex flex-col justify-center items-center md:px-8 mb-8'>
    <h3 className='text-[#3C3C3B] text-4xl font-bold pb-4'>Formulario de {entity?.name ? <>Actualización</> : <>Registro</>}</h3>
    {
      loadingCreateEntity || loadingUpdateEntity && <Loading text='Guardando' type='balls'/>
    }
    <Form
      form={form}
      onFinish={entity?.name ? handleUpdate : handleSubmit}
      className={"flex flex-wrap flex-col md:flex-row md:justify-between px-8 max-w-[100vw]"}>
        <Form.Item name='category' required className='flex flex-col gap-4 w-full'>
          <p className='font-bold mb-1 text-2xl md:text-3xl'>Elija una opción</p>
          <Radio.Group onChange={getCategory} value={category} defaultValue={'JAC'}>
            <Radio value='JAC' className='md:!text-xl'>Junta de Acción Comunal</Radio>
            <Radio value='CE' className='md:!text-xl'>Comunidad Educativa</Radio>
          </Radio.Group>
        </Form.Item>
        {
          category && 
          <>
            <Form.Item
              labelCol={{span: entity?.name ? 24 : 0}}
              wrapperCol={{span: 23}}
              name='name'
              label={`${entity?.name && 'Nombre completo de quién diligencia este formulario'}`}
              required
              className={"md:w-1/2"}>
              <Input className={"md:text-2xl py-2"} placeholder='Nombre completo de quién diligencia este formulario'/>
            </Form.Item>
            <Form.Item
              labelCol={{span: entity?.position ? 24 : 0}}
              label='Función o cargo de quién diligencia este formulario'
              wrapperCol={{span: 23}}
              name='position'
              required
              className={"md:w-1/2"}>
              <Input className={"w-full md:text-2xl py-2"} placeholder='Función o cargo de quién diligencia este formulario'/>
            </Form.Item>
            <Form.Item
            labelCol={{span: entity?.email ? 24 : 0}}
            label='Correo electrónico de la entidad'
            className={"w-full md:w-1/2"}
            wrapperCol={{span: 23}}
            name="email"
              rules={[
                { type: 'email', message: 'Correo no válido' },
                { required: true, message: 'El Correo es obligatorio' }
              ]}
              required>
              <Input className={"!w-full md:text-2xl"} placeholder='Correo electrónico de la entidad'/>
            </Form.Item>
            <Form.Item
            labelCol={{span: entity?.phone ? 24 : 0}}
            label='Teléfono de contacto'
            className={"w-full md:w-1/2"}
            wrapperCol={{span: 23}}
            name="phone"
            required>
              <InputNumber defaultValue={entity?.phone} className={"!w-full md:text-2xl"} placeholder='Teléfono de contacto'/>
            </Form.Item>
            <Form.Item
              labelCol={{span: entity?.name ? 24 : 0}}
              label={`${category == 'JAC' ? 'Nombre de la junta de acción comunal' : 'Nombre de la entidad educativa'}`}
              wrapperCol={{span: 23}}
              name='nameEntity'
              required
              className={"md:w-1/2"}>
              <Input defaultValue={entity?.name} className={"w-full md:text-2xl"} placeholder={`${category == 'JAC' ? 'Nombre de la junta de acción comunal' : 'Nombre de la entidad educativa'}`}/>
            </Form.Item>
            <Form.Item
              labelCol={{span: entity?.city ? 24 : 0}}
              label='Municipio'
              className={"w-full md:w-1/2"}
              wrapperCol={{span: 23}}
              name="city"
              required>
              <Select className='md:!text-2xl' placeholder='Municipio'>
                <Select.Option value="cali">Cali</Select.Option>
                <Select.Option value="guadalajara">Guadalajara de Buga</Select.Option>
                <Select.Option value="yumbo">Yumbo</Select.Option>
                <Select.Option value="tulua">Tuluá</Select.Option>
                <Select.Option value="jamundi">Jamundí</Select.Option>
                <Select.Option value="candelaria">Candelaria</Select.Option>
                <Select.Option value="buenaventura">Buenaventura</Select.Option>
                <Select.Option value="palmira">Palmira</Select.Option>
                <Select.Option value="cartago">Cartago</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item
              labelCol={{span: entity?.address ? 24 : 0}}
              label='Dirección de la Entidad'
              className={"w-full md:w-1/2"}
              wrapperCol={{span: 23}}
              name="address"
              required>
              <Input defaultValue={entity?.address} className={"!w-full md:text-2xl"} placeholder='Dirección de la Entidad'/>
            </Form.Item>
            <Form.Item
              labelCol={{span: entity?.neighborhood ? 24 : 0}}
              label='Barrio'
              className={"w-full md:w-[25%]"}
              wrapperCol={{span: 23}}
              name="neighborhood"
              required>
              <Input defaultValue={entity?.neighborhood} className={"w-full md:text-2xl"} placeholder='Barrio'/>
            </Form.Item>
            <Form.Item
              labelCol={{span: entity?.commune ? 24 : 0}}
              label='Comuna'
              className={"w-full md:w-[24%] mr-[1%]"}
              wrapperCol={{span: 23}}
              name="commune"
              required>
              <InputNumber defaultValue={entity?.commune} className={"!w-full md:text-2xl"} placeholder='Comuna'/>
            </Form.Item>
            <Form.Item
              className={"w-[90%]"}
              wrapperCol={{span: 5}}
              name="acopio"
              label={<p className='md:text-2xl'>Cuenta con punto de Acopio de Reciclaje</p>}
              required>
              <Select 
                className={"!w-full"} 
                placeholder='Si/No' 
                options={[{ value: true, label: 'Si' }, { value: false, label: 'No' }]}/>
            </Form.Item>
            {
              category == 'CE' && 
              <>
                <Form.Item
                className={"w-full md:text-2xl pr-[2%]"}
                labelCol={{span: 6}}
                wrapperCol={{span: 18, offset: 1}}
                name="acopioName"
                label={<p className='md:text-2xl'>¿Con qué punto de acopio cuentan?:</p>}>
                  <Input className='md:text-2xl' defaultValue={entity?.acopioName}/>
                </Form.Item>
                <Form.Item
                className={"md:w-1/2"}
                labelCol={{span: 7}}
                wrapperCol={{span: 15, offset: 1}}
                name="prae"
                label={<span className='md:text-2xl'>Cuenta con el PRAE</span>}
                required>
                  <Select 
                    className={"!w-full"} 
                    placeholder='(Proyectos Ambientales escolares)' 
                    options={[{ value: true, label: 'Si' }, { value: false, label: 'No' }]}/>
                </Form.Item>
                <Form.Item
                  className={"md:w-1/2"}
                  labelCol={{span: 11}}
                  wrapperCol={{span: 11, offset: 1}}
                  name="praeName"
                  label={<span className='md:text-2xl'>Mencione el nombre del proyecto</span>}>
                    <Input className='md:text-2xl' defaultValue={entity?.praeName}/>
                </Form.Item>
              </>
            }
            {
              category == 'JAC' &&
              <>
                <Form.Item
                  className={"w-full md:w-[48%]"}
                  labelCol={{span: 9}}
                  wrapperCol={{span: 23, offset: 1}}
                  name="proceda"
                  label={<span className='md:text-2xl'>Cuenta con el PROCEDA</span>}
                  required>
                  <Select 
                    className={"!w-full"} 
                    placeholder='(Proyectos Ciudadanos de Educación Ambiental)' 
                    options={[{ value: true, label: 'Si' }, { value: false, label: 'No' }]}/>
                </Form.Item>
                <Form.Item
                  wrapperCol={{span: 24}}
                  name='procedaProject'
                  className={"md:w-1/2 md:pr-[1%]"}>
                  <Input defaultValue={entity?.procedaProject} className={"w-full md:text-2xl"} placeholder='Mencione el proyecto de la pregunta anterior'/>
                </Form.Item>
              </>
            }
            <Form.Item
              className={"md:w-[48%]"}
              labelCol={{span: 12}}
              wrapperCol={{span: 14, offset: 1}}
              name="committee"
              label={<p className='md:text-2xl'>Cuenta con con Comité Ambiental</p>}
              required>
                <Select 
                  className={"!w-full"} 
                  placeholder='Si/No' 
                  options={[{ value: true, label: 'Si' }, { value: false, label: 'No' }]}/>
            </Form.Item>
            {
              entity?.attachment && <Link href={entity.attachment ?? ''} target='_blank' className='text-blue-600'>Ver Adjunto</Link>
            }
            {
              !entity?.attachment && <Form.Item name="dragger" valuePropName="fileList" noStyle
              className={"w-full"}>
                <label htmlFor="" className='md:text-2xl w-full mt-8'>
                  
                  {
                    category== 'JAC' ?
                    <p className='md:text-2xl'>Adjuntar personería Jurídica de la Junta de Acción Comunal</p>
                    :
                    <p className='md:text-2xl'>Adjuntar resolución de reconcomiendo de establecimiento educativo</p>
                  }
                </label>
              <Upload.Dragger name="files" className={"w-full mb-4"} maxCount={1} {...props}>
                <p className="ant-upload-drag-icon">
                  <InboxOutlined />
                </p>
                <p className="ant-upload-text md:!text-2xl">
                  Haga clic o arrastre el archivo a esta área para cargarlo.
                </p>
              </Upload.Dragger>
            </Form.Item>
            }
          
            <Form.Item className={"w-full mt-6"} wrapperCol={{span: 24}}>
              <Button className={'w-full md:text-3xl md:py-7 font-bold'} type="primary" htmlType="submit">
                {
                  entity?.name ? <>Actualizar</> : <>Guardar</>
                }
              </Button>
            </Form.Item>
          </>
        }
    </Form>
  </section>;
}

export default Register;