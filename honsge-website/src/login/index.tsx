 import {Form, Input, Checkbox, Button} from "@arco-design/web-react"
 import "@arco-design/web-react/dist/css/arco.css";
import { useEffect, useState } from "react";
import axios from "axios";

// interface LoginInfo {
//   username:string,
//   password:string,
// }
interface LoginInfoProps {
  loginInfo: (canLogin : boolean, customerID : Number) => void,
  setPageState: React.Dispatch<React.SetStateAction<string>>,
  //customerID: Number,
  //setCustomerID: React.Dispatch<React.SetStateAction<Number>>
}

function Login({loginInfo, setPageState} : LoginInfoProps) {
    const [phoneNumber, setPhoneNumber] = useState<string>("");
    // useEffect(()=>{
    //   console.log("UserName: ", phoneNumber)
    // }, [phoneNumber]);
    const [password, setPassword] = useState<string>("");
    const [canLogin, setCanLogin] = useState<boolean>(false);
    const [customerID, setCustomerID] = useState<Number>(0);
    const sendToMain = (canLogin : boolean) =>{
      loginInfo(canLogin, customerID);
    };
    useEffect(()=>{
      sendToMain(canLogin);
    }, [canLogin]);

    const HandleLoginInfo = async (phoneNumber: string, password: string) => {
      const payload = {
        phoneNumber: phoneNumber,
        password: password,
      };
      try {
        const response = await axios.post(
          "http://localhost:8800/CheckLoginInfo", payload
        );
        if(response.data.message === "Data Exist"){
          setCanLogin(true);
          setCustomerID(response.data.customer_id);
        }else{
          setCanLogin(false);
          setCustomerID(response.data.customer_id);
        };

      } catch(err){
        console.log("Error", err);
      }
    }

    return (
    <div className="flex justify-center items-center h-full">
      <div className=" w-[40%] py-12"> 
        <Form className={`w-full shadow-md flex justify-center px-[10%]`} size={`small`} autoComplete='off'>
          <h1 className="flex justify-center py-5 text-2xl font-black">Login/Sign Up</h1>
          <Form.Item label='Username' labelAlign='left' className={`text-sm flex justify-between `}>
            <Input placeholder='Enter Phone Number' className='w-[100%]' onChange={(value)=> {setPhoneNumber(value)}}/>
          </Form.Item>
          <Form.Item label='Post' labelAlign='left' className={`text-sm flex justify-between `}>
            <Input placeholder='Enter Password' className='w-[100%]' onChange={(value)=> {setPassword(value)}}/>
          </Form.Item>
          <Form.Item>
            <Checkbox>I have read the manual</Checkbox>
          </Form.Item>
          <Form.Item>
            <Button type='primary' onClick={() => HandleLoginInfo(phoneNumber, password)}>Login</Button>
          </Form.Item>
          <p className="pb-6">Haven't have an account yet? <span className="text-[#1a43bf] underline cursor-pointer" onClick={()=>setPageState("SignUp")}>Sign Up</span></p>
        </Form>
      </div>
    </div>)
}

export default Login;