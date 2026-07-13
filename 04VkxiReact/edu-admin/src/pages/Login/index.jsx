import "./login.scss"
import { Button, Checkbox, Form, Input,message } from 'antd';
import { useNavigate } from "react-router";
import md5 from "md5";

export default function Login() {

    // 导航
    const navigate = useNavigate();
    // 表单绑定
    const [form] = Form.useForm();

    const [messageApi, contextHolder] = message.useMessage();


    // 表单完成
    const onFinish = async values => {
        console.log('Success:', values);
        values.password=md5(values.password)
        console.log(values)
        form.resetFields();
        messageApi.success("登录成功",.5).then(()=>{navigate("/dashboard");})
    };

    // 表单失败
    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };


    return (
        <>
            {contextHolder}
          <div className="login">

              <div className="login-panel">
                  <h1>高校教务管理系统</h1>

                  <div className="login-form">

                      <Form
                          name="login"
                          form={form}
                          labelCol={{ span: 6 }}
                          wrapperCol={{ span: 16 }}
                          initialValues={{remember: true }}
                          onFinish={onFinish}
                          onFinishFailed={onFinishFailed}
                          autoComplete="off"
                      >
                          <Form.Item
                              label="Username"
                              name="username"
                              rules={[{ required: true, message: 'Please input your username!' }]}
                          >
                              <Input />
                          </Form.Item>

                          <Form.Item
                              label="Password"
                              name="password"
                              rules={[{
                                  required: true, message: 'Please input your password!' ,
                                  min:3,max:18
                              }]}
                          >
                              <Input.Password />
                          </Form.Item>

                        <div className="login-form-buttons">

                            <Form.Item name="remember" valuePropName="checked" wrapperCol={{ span: 16, offset: 4 }}  >
                                <Checkbox>Remember me</Checkbox>
                            </Form.Item>

                            <Form.Item>
                                <Button type="primary" htmlType="submit">
                                    Submit
                                </Button>
                            </Form.Item>

                        </div>

                      </Form>

                  </div>
              </div>
          </div>
        </>
    )
}
