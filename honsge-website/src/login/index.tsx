 import {Form, Input, Checkbox, Button} from "@arco-design/web-react"
 import "@arco-design/web-react/dist/css/arco.css";
import { useEffect, useState } from "react";
import axios from "axios";

interface LoginInfoProps {
  loginInfo: (canLogin : boolean, customerID : Number) => void,
  setPageState: React.Dispatch<React.SetStateAction<string>>,
}

function Login({loginInfo, setPageState} : LoginInfoProps) {
    //USE STATE
    const [phoneNumber, setPhoneNumber] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [canLogin, setCanLogin] = useState<boolean>(false);
    const [customerID, setCustomerID] = useState<Number>(0);

    //USE EFFECT
    useEffect(()=>{
      sendToMain(canLogin);
    }, [canLogin]);
    
    //FUNCTION
    const sendToMain = (canLogin : boolean) =>{
      loginInfo(canLogin, customerID);
      console.log("From Login: " + customerID)
    };

    //AXIOS FUNCTION
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
        }else if(response.data.message === "Data doesn't Exist"){
          setCanLogin(false);
          alert("Incorrect Phone Number or Password");
        }
        else{
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
        <Form className={`w-full shadow-md px-[10%]`} size={`small`} autoComplete='off' layout="vertical">
          <h1 className="flex justify-center py-5 text-2xl font-black">Login/Sign Up</h1>
          <Form.Item label='Phone Number' className={`text-sm  `}>
            <Input placeholder='Enter Phone Number' className='w-[100%]' onChange={(value)=> {setPhoneNumber(value)}}/>
          </Form.Item>
          <Form.Item label='Password' className={`text-sm`}>
            <Input placeholder='Enter Password' className='w-[100%]' onChange={(value)=> {setPassword(value)}}/>
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