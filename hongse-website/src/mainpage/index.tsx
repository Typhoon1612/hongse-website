import {Form, Input, Checkbox, Button, Upload, Progress} from "@arco-design/web-react"
import { IconPlus, IconEdit } from '@arco-design/web-react/icon';
 import "@arco-design/web-react/dist/css/arco.css";
import React, { useState } from "react";
import { UploadItem } from "@arco-design/web-react/es/Upload";

// interface FileObject {
//     name: string,
//     size: number,
//     type: string,
//     url: string,
//     status: string,
//     uid: string,
// }
function MainPage() {
    const [file, setFile] = useState<UploadItem>();
    //const cs = `arco-upload-list-item${file && file.status === 'error' ? ' is-error' : ''}`;
    return(
 
        <div className="h-full flex items-center justify-center">
        <div className="flex w-[80%] px-20 h-[90%] py-12 flex-col shadow-2xl">
        <div className="flex justify-center pb-20 pt-5">
            <h1 className="font-black text-4xl">General Information</h1>
        </div>
            <Form layout="vertical" className={`flex flex-row justify-between  h-full`}>
                <div className={`w-[20%] h-[20%]`}>
                <Form.Item>
                {/*Add default image*/}
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
                </div>
                <div className="w-[35%]" >
                <Form.Item label="Name" >
                    <Input defaultValue="Pang Kah Poh" className={`bg-white`}/>
                </Form.Item>
                <Form.Item label="Age" >
                    <Input defaultValue="18" className={`bg-white`}/>
                </Form.Item>
                <Form.Item label="Email" >
                    <Input defaultValue="kp20-wp21@student.tarc.edu.my" className={`bg-white`}/>
                </Form.Item>
                </div>
                <div className="w-[35%]">
                <Form.Item label="Hp" >
                    <Input defaultValue="+6012-3456789" className={`bg-white`}/>
                </Form.Item>
                <Form.Item label="Gender" >
                    <Input defaultValue="Female" className={`bg-white`}/>
                </Form.Item>
                <Form.Item label="University" >
                    <Input defaultValue="Tunku Abdul Rahman University of Management and Technology" className={`bg-white`}/>
                </Form.Item>
                </div>          
            </Form>
        </div>
        
        </div>
    )
}

export default MainPage;