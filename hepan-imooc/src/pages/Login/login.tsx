import "./index.scss"
import {Form, Button, Input} from "antd";
import {login} from "../../api"
import type {Login} from "../../types/api.ts"

export default function Login() {

  const onFinish = (values: Login.params) => {
    login(values).then(r => {
      console.log("hahah", r)
    })
    console.log('Success:', values);
  };

  const onFinishFailed = () => {
    console.log('Failed:');
  };


  return (
    <div className="login">

      {/*登陆框*/}
      <div className="login-wrapper">

        <div className="title">
          <h2>货拉拉后台管理系统</h2>
        </div>

        <Form
          name="basic"
          // style={{width: '80%'}}
          labelCol={{span: 8}}
          wrapperCol={{span: 16}}
          initialValues={{remember: true}}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          // autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="userName"
            rules={[{required: true, message: 'Please input your username!'}]}
          >
            <Input/>
          </Form.Item>

          <Form.Item
            label="Password"
            name="userPwd"
            rules={[{required: true, message: 'Please input your password!'}]}
          >
            <Input.Password/>
          </Form.Item>

          <Form.Item label={null}>
            <Button type="primary" htmlType="submit" block={true}>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
