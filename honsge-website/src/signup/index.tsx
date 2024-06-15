import {Form, Input, Button} from "@arco-design/web-react"
import "@arco-design/web-react/dist/css/arco.css";
import React, { useState } from "react";
import axios from "axios";

interface SignUpProps{
    setPageState: React.Dispatch<React.SetStateAction<string>>,
}
interface SignUpInfo{
    customer_name:string,
    customer_password:string,
    age:number,
    email:string,
    phone_number:string,
    gender:string,
    university:string,
}

function SignUp({setPageState}:SignUpProps) {
    //USE STATE
    const [signUpInfo, setSignUpInfo] = useState<SignUpInfo>(
        {
            customer_name:"",
            customer_password:"",
            age:0,
            email:"",
            phone_number:"",
            gender:"",
            university:"",
        }
    );

    //FUNCTION
    const handleInput = (targetName : string, value : string) => {
        setSignUpInfo((prevSignUpInfo)=>({
            ...prevSignUpInfo, 
            [targetName]: value
        }))
    };

    //AXIOS FUNCTION
    const CreateCustomerInfo = async () =>{
        console.log(signUpInfo);
        try {
            const response = await axios.post(
                "http://localhost:8800/CreateCustomerInfo", signUpInfo
            );
            console.log(response);
            if(response.status == 200){
                setPageState("Login");
            }
        } catch(err){
            console.log("Error", err);
        }
    };
    return(
        <div className="h-full flex items-center justify-center">
        <div className="flex w-[80%] px-20 h-[90%] py-12 flex-col shadow-2xl">
        <div className="flex justify-center pb-20 pt-5">
            <h1 className="font-black text-4xl">Sign Up</h1>
        </div>
            <Form layout="vertical" className={`flex flex-row justify-between  h-full`}>
                <div className="w-[35%]">
                <Form.Item label="Name" >
                    <Input onChange={(value)=>{
                        handleInput("customer_name", value)
                    }}/>
                </Form.Item>
                <Form.Item label="Password" >
                    <Input onChange={(value)=>{
                        handleInput("customer_password", value)
                    }}/>
                </Form.Item>
                <Form.Item label="Age" >
                    <Input onChange={(value)=>{
                        handleInput("age", value)
                    }}/>
                </Form.Item>
                <Form.Item label="Email" >
                    <Input onChange={(value)=>{
                        handleInput("email", value)
                    }}/>
                </Form.Item>
                </div>
                <div className="w-[35%]">
                <Form.Item label="Phone Number" >
                    <Input onChange={(value)=>{
                        handleInput("phone_number", value)
                    }} />
                </Form.Item>
                <Form.Item label="Gender" >
                    <Input onChange={(value)=>{
                        handleInput("gender", value)
                    }}/>
                </Form.Item>
                <Form.Item label="University" >
                    <Input onChange={(value)=>{
                        handleInput("university", value)
                    }}/>
                </Form.Item>
                </div>
                
            </Form>
            <div className="flex justify-center w-full">
                <Button type='primary' className={`p-6 flex items-center text-[20px]`} onClick={()=>{CreateCustomerInfo()}}>Submit</Button>
            </div>
        </div>
        
        </div>
    )
}

export default SignUp;











/* <div className={`w-[20%] h-[20%]`}>
                <Form.Item>
                {/*Add default image*
                     <Upload
                        action='/'
                        fileList={file ? [file] : []}
                        showUploadList={false}
                        onChange={(_, currentFile) => {
                        setFile({
                            ...currentFile,
                            url: URL.createObjectURL(currentFile.originFile as Blob),
                        });
                        }}
                        onProgress={(currentFile) => {
                        setFile(currentFile);
                        }}
                        className={`w-[100%] h-[20%]`}
                    ><div className='arco-upload-list-item-picture custom-upload-avatar w-[100%] h-52'>
                            <img src={file?.url} className={`w-[100%]`}/>
                        </div>
                    </Upload>
                </Form.Item>
                </div> */