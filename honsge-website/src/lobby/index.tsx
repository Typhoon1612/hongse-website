import { useEffect, useState } from "react";
import Login from "../login";
import SignUp from "../signup";
import MainPage from "../mainpage";
import Points from "../points";


function Lobby(){
    //USESTATE
    //Change to what page to using useState
    const [customerID, setCustomerID] = useState<Number>(0);
    const [canLogin, setCanLogin] = useState<boolean>();
    const [pageState, setPageState] = useState<string>("Login");

    //USEEFFECT
    useEffect(()=>{
    if (canLogin === true){   
        setPageState("MainPage");
        console.log("I am ", pageState);
    }
    },[canLogin]);
    
    //FUNCTION
    const handleLoginInfo = (loginInfo : boolean, customerID : Number) => {
        setCanLogin(loginInfo);
        setCustomerID(customerID);
    }
    return (
        <div>
            {pageState === "SignUp" && <SignUp setPageState={setPageState}/>}
            {pageState === "MainPage"  && <MainPage customerID={customerID} setPageState={setPageState}/>}
            {pageState === "Login" && <Login loginInfo={handleLoginInfo} setPageState={setPageState}/>}
            {pageState === "Points" && <Points customerID={customerID} setPageState={setPageState}/>}
        </div>
    )
}

export default Lobby;