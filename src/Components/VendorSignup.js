import React, {useState} from 'react'
import { Button, Checkbox, Form, Input } from 'antd';
const onFinish = (values) => {
  console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

export default function VendorSignup() {

    return(
        <section className="signup" id="signup">
            <div className="login__container  bd-grid">
                <div className="login-form">
                    <Form
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <div className="content">
                        <div className="input-field">

                            <Form.Item
                            label="Username"
                            name="username"
                            rules={[
                                {
                                required: true,
                                message: 'Please input your username!',
                                },
                            ]}
                            >
                                <div className="input-field">
                                    <Input />
                                </div>
                            </Form.Item>

                            <Form.Item
                            label="Password"
                            name="password"
                            rules={[
                                {
                                required: true,
                                message: 'Please input your password!',
                                },
                            ]}
                            >
                                <div className="input-field">
                                    <Input.Password />
                                </div>
                            </Form.Item>

                            <Form.Item
                            name="remember"
                            valuePropName="checked"
                            wrapperCol={{
                                offset: 8,
                                span: 16,
                            }}
                            >
                            <Checkbox>Remember me</Checkbox>
                            </Form.Item>

                            <Form.Item
                            wrapperCol={{
                                offset: 8,
                                span: 16,
                            }}
                            >
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                            </Form.Item>
                        </div>
                        </div>
                    </Form>
                </div>
            </div>
        </section>
    )
}