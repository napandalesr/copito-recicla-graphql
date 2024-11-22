"use client"

import React from 'react';

import { Button, Form, FormProps, Input } from 'antd';
import Image from 'next/image';

type FieldType = {
  email?: string;
  password?: string;
  remember?: string;
};

type props = {
  login: (email: string, password: string) => Promise<void>
}

const LoginForm = ({login}: props) => {
  const onFinish: FormProps<FieldType>['onFinish'] = async (values) => {
    if(values.email && values.password) {
      await login(values.email, values.password);
    }
  };

  return <Form
  name="basic"
  wrapperCol={{ span: 24 }}
  initialValues={{ remember: true }}
  onFinish={onFinish}
  autoComplete="off"
  className='py-12 !px-16 rounded-2xl shadow-md text-2xl lg:w-[36rem]'
>
  <Image className='w-1/2 mx-auto my-3' src={'/images/copito-login.png'} alt='Copito Logo' width={899} height={908}/>
  <Form.Item<FieldType>
    name="email"
    rules={[{ required: true, type: 'email', message: 'Por favor ingrese su correo!' }]}
  >
    <Input className='px-4 py-2' placeholder='Correo' />
  </Form.Item>

  <Form.Item<FieldType>
    name="password"
    rules={[{ required: true, message: 'Por favor ingrese su contraseña!' }]}
  >
    <Input.Password className='px-4 py-2' placeholder='Contraseña' />
  </Form.Item>

  <Form.Item wrapperCol={{span: 24 }} className={"flex items-center justify-center"}>
    <Button className={'w-44 lg:w-72'} type="primary" htmlType="submit">
      Iniciar
    </Button>
  </Form.Item>
</Form>;
}

export default LoginForm;