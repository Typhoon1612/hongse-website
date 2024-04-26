 import {Form, Input, Checkbox, Button} from "@arco-design/web-react"
 import "@arco-design/web-react/dist/css/arco.css";

function Login() {
    
    return (
    <div className="h-full flex justify-center items-center ">
    <div className=" w-[40%] px-18 py-12"> 
    
    <Form className={`w-full shadow-md flex justify-center px-[10%]`} size={`small`} autoComplete='off'>
    <h1 className="flex justify-center py-5 text-2xl font-black">Login/Sign Up</h1>
      <Form.Item label='Username' labelAlign='left' className={`text-sm flex justify-between `}>
        <Input placeholder='Enter Username' className='w-[100%]'/>
      </Form.Item>
      <Form.Item label='Post' labelAlign='left' className={`text-sm flex justify-between `}>
        <Input placeholder='Enter Password' className='w-[100%]'/>
      </Form.Item>
      <Form.Item>
        <Checkbox>I have read the manual</Checkbox>
      </Form.Item>
      <Form.Item>
        <Button type='primary'>Login</Button>
      </Form.Item>
      <p className="pb-6">Haven't have an account yet? <span className="text-[#1a43bf] underline cursor-pointer">Sign Up</span></p>
    </Form>
    {/* <Button type={`primary`} className="p-5">
        Click
    </Button> */}
    </div>
    </div>)
}

export default Login;