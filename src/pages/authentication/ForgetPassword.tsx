import { Button, ConfigProvider, Form, FormProps, Input } from 'antd';
import { FieldNamesType } from 'antd/es/cascader';
import { useNavigate } from 'react-router';
import { useForgetPasswordMutation } from '../../redux/apiSlices/authSlice';
import { useEffect } from 'react';
import { errorType } from './Login';
import Swal from 'sweetalert2';

const ForgetPassword = () => {
    const navigate = useNavigate();
    const [forgetPassword,{isSuccess,error}]=useForgetPasswordMutation()

    useEffect(() => {
        if(isSuccess){
            
            navigate('/verify-otp')
        }
        else if(error){
            const errorMessage =
                (error as errorType)?.data?.errorMessages
                    ? (error as errorType)?.data?.errorMessages.map((msg: { message: string }) => msg?.message).join("\n")
                    : (error as errorType)?.data?.message || "Something went wrong. Please try again.";
            Swal.fire({
                title: "Failed to Login",
                text: errorMessage,
                icon: "error",
                timer: 1500,
                showConfirmButton: false
            })
        }
    }, [isSuccess,error]);
    const onFinish: FormProps<FieldNamesType>['onFinish'] = (values:any) => {
        
        forgetPassword(values);
       localStorage.setItem('forgetEmail',JSON.stringify(values.email))
    };

    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: '#083A65',

                    colorBgContainer: '#F1F4F9',
                },
                components: {
                    Input: {
                        borderRadius: 10,
                        colorBorder: 'transparent',
                        colorPrimaryBorder: 'transparent',
                        hoverBorderColor: 'transparent',
                        controlOutline: 'none',
                        activeBorderColor: 'transparent',
                    },
                },
            }}
        >
            <div className="flex  items-center justify-center h-screen" style={{
            backgroundImage: `url('/authBg.svg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'top',
            backgroundRepeat: 'no-repeat',
            objectFit: 'cover',
        }}>
                <div className="bg-white w-[630px] rounded-lg shadow-lg p-10 ">
                    <div className="text-primaryText space-y-3 text-center">
                        <h1 className="text-3xl  font-medium text-center mt-2">Forget Password</h1>
                    </div>

                    <Form
                        name="normal_ForgetPassword"
                        className="ForgetPassword-form"
                        layout="vertical"
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                    >
                        <Form.Item
                            label={
                                <label htmlFor="email" className="block text-primaryText mb-1 text-lg">
                                    Email
                                </label>
                            }
                            name="email"
                            rules={[{ required: true, message: 'Please input your email!' }]}
                        >
                            <Input placeholder="Enter your email address" type="email" className="h-12" />
                        </Form.Item>

                        <Form.Item>
                            <Button
                                shape="round"
                                type="primary"
                                htmlType="submit"
                                style={{
                                    height: 45,
                                    width: '100%',
                                    fontWeight: 500,
                                }}
                            >
                                Send Code
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </ConfigProvider>
    );
};

export default ForgetPassword;
