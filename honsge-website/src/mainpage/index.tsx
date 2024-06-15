import {Form, Input, Button, Drawer} from "@arco-design/web-react"
import "@arco-design/web-react/dist/css/arco.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../navbar";

interface MainPageProps {
    customerID: Number,
    setPageState: React.Dispatch<React.SetStateAction<string>>
,
}

interface CustomerInfo{
    customer_id: Number,
    customer_name: string,
    age: Number,
    email: string,
    phone_number: string,
    gender: string,
    university: string,
    created_time: string,
}

function MainPage({customerID, setPageState} : MainPageProps) {
    //USESTATE
    const [customerInfo, setCustomerInfo] = useState<CustomerInfo[]>([]);

    //USEEFFECT
    useEffect(()=>{
        console.log("MainPage " + JSON.stringify(customerInfo));
        console.log(customerID);
    }, [customerInfo])
    useEffect(()=>{
        UpdateCustomerInfo(customerInfo);
    }, [customerInfo])
    useEffect(() => {console.log("MainPage" + customerID)},[customerID]);
    useEffect(()=>{FetchCustomerInfo(customerID)}, [customerID])

    //AXIOS BACKEND
    const FetchCustomerInfo = async (customerID : Number) =>{
        const payload = {
            customerID: customerID,
        };
        try {
            const response = await axios.post(
                "http://localhost:8800/FetchCustomerInfo", payload
            );
            console.log(response);
            setCustomerInfo(response.data);
        } catch(err){
            console.log("Error", err);
        }
    };
    const UpdateCustomerInfo = async (customerInfo : CustomerInfo[]) => {
        try {
            const response = await axios.put("http://localhost:8800/UpdateCustomerInfo", customerInfo[0]);
            console.log(response)
        } catch(err){
            console.log("Error", err)
        } 
    }
    
    return(
        <>
        {/*Navbar*/}
        <Navbar setPageState={setPageState}/> 
        {/*Content*/}
        <div className="h-full flex items-center justify-center">
        <div className="flex w-[80%] px-20 h-[90%] py-12 flex-col shadow-2xl">
        <div className="flex justify-center pb-20 pt-5">
            <h1 className="font-black text-4xl">General Information</h1>
        </div>
            <Form layout="vertical" className={`flex flex-row justify-between  h-full`}>
                {/* <div className={`w-[20%] h-[20%]`}>
                <Form.Item>
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
                </div> */}
                <div className="w-[35%]" >
                <Form.Item label="Name" >
                    <Input value={customerInfo[0]?.customer_name} className={`bg-white`} onChange={
                        (value)=> {
                            setCustomerInfo(prevCustomerInfo => prevCustomerInfo.map((customers, index)=>index === 0 ? { ...customers, customer_name: value } : customers))}} />
                </Form.Item>
                <Form.Item label="Age" >
                    <Input value={customerInfo[0]?.age?.toString()} className={`bg-white`} onChange={
                        (value)=> {
                            setCustomerInfo(prevCustomerInfo => prevCustomerInfo.map((customers, index)=>index === 0 ? { ...customers, age: parseInt(value, 10) } : customers))}} />
                </Form.Item>
                <Form.Item label="Email" >
                    <Input value={customerInfo[0]?.email} className={`bg-white`} onChange={
                        (value)=> {
                            setCustomerInfo(prevCustomerInfo => prevCustomerInfo.map((customers, index)=>index === 0 ? { ...customers, email: value } : customers))}} />
                </Form.Item>
                </div>
                <div className="w-[35%]">
                <Form.Item label="Hp" >
                    <Input value={customerInfo[0]?.phone_number} className={`bg-white`} onChange={
                        (value)=> {
                            setCustomerInfo(prevCustomerInfo => prevCustomerInfo.map((customers, index)=>index === 0 ? { ...customers, phone_number: value } : customers))}} />
                </Form.Item>
                <Form.Item label="Gender" >
                    <Input value={customerInfo[0]?.gender} className={`bg-white`} onChange={
                        (value)=> {
                            setCustomerInfo(prevCustomerInfo => prevCustomerInfo.map((customers, index)=>index === 0 ? { ...customers, gender: value } : customers))}} />
                </Form.Item>
                <Form.Item label="University" >
                    <Input value={customerInfo[0]?.university} className={`bg-white`} onChange={
                        (value)=> {
                            setCustomerInfo(prevCustomerInfo => prevCustomerInfo.map((customers, index)=>index === 0 ? { ...customers, university: value } : customers))}} />
                </Form.Item>
                </div>      
                {/* <Button onClick={()=> UpdateCustomerInfo(customerInfo)}>Update</Button>     */}
            </Form>
        </div>
            
            </div>
        </>
    )
}

export default MainPage;