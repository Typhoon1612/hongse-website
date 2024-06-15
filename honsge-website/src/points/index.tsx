import RedeemEarnRules from "./redeemEarnRules";
import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "../navbar";

interface PointsProps{
    customerID : Number,
    setPageState: React.Dispatch<React.SetStateAction<string>>
}
function Points({customerID, setPageState}:PointsProps){
    //USE STATE
    const[points, setPoints] = useState<Number>(0);

    //USE EFFECT
    useEffect(()=>{FetchPoints(customerID)},[customerID]);
    useEffect(()=>{console.log(points)},[points]);

    //AXIOS BACKEND
    const FetchPoints = async (customerID : Number) => {
        try {
            const response = await axios.get(
                `http://localhost:8800/FetchPoints?customerID=${customerID}`
            );
            setPoints(response.data[0].points.toFixed(2));
            console.log("From Points", response.data[0].points.toFixed(2));
        } catch(err){
            console.log("Error", err);
        }
    };
    return( 
        <>
        {/*Navbar*/}
        <Navbar setPageState = {setPageState}/>
        <div className="h-full flex items-center justify-center">
            <div className="flex w-[80%] px-20 h-[90%] py-12 flex-col shadow-2xl">
                <div className="flex flex-start pb-2 pt-5">
                    <h5 className="font-black text-2xl">Your Point(s)</h5>
                </div>
                <div className="">
                    <p className={`w-full h-[6.5rem] text-[4rem] bg-white font-bold`}>{`${points}`}</p>
                </div> 
                <div className="py-4">
                    <hr className="h-[1px] bg-black"/>
                </div>
                <RedeemEarnRules />
            </div>
        </div>
        </>
    );
}

export default Points; 