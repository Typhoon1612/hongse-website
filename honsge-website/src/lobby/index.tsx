import { useEffect, useState } from "react";
import Login from "../login";
import SignUp from "../signup";
import MainPage from "../mainpage";


function Lobby(){
    //Change to what page to using useState
    const [customerID, setCustomerID] = useState<Number>(0);
    const [canLogin, setCanLogin] = useState<boolean>();
    const [pageState, setPageState] = useState<string>("Login");
    //useEffect(() => {console.log(canLogin)},[canLogin]);
    const handleLoginInfo = (loginInfo : boolean, customerID : Number) => {
        setCanLogin(loginInfo);
        setCustomerID(customerID);
        console.log(loginInfo, customerID);
    }
    return (
        <div>
            {pageState == "SignUp" ? (<SignUp setPageState={setPageState}/>):(<Login loginInfo={handleLoginInfo} setPageState={setPageState}/>)}
            {/* {!canLogin ? (<Login loginInfo={handleLoginInfo} setPageState={setPageState}/>) : <MainPage customerID={customerID}/>} */}
        </div>
    )
}

export default Lobby;

// customerID={customerID}