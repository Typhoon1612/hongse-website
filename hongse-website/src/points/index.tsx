import { Input } from "@arco-design/web-react";
import RedeemEarnRules from "./redeemEarnRules";

function Points(){
    return( 
        <>
        <div className="h-full flex items-center justify-center">
            <div className="flex w-[80%] px-20 h-[90%] py-12 flex-col shadow-2xl">
                <div className="flex flex-start pb-2 pt-5">
                    <h5 className="font-black text-2xl">Your Point(s)</h5>
                </div>
                <div className="">
                    <p className={`w-full h-[6.5rem] text-[4rem] bg-white font-bold`}>20.00</p>
                </div> 
                <div className="py-4">
                    <hr className="h-[1px] bg-black"/>
                </div>
                <RedeemEarnRules />
            </div>
            
        </div>
        
        </>
    )
}

export default Points; 