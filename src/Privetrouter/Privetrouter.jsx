import { useContext } from "react";
import { Authcontext } from "../Components/Usecontext/Authprovider";
import { Navigate } from "react-router-dom";

const Privetrouter = ({children}) => {
    const { user, loading } = useContext(Authcontext)
    if(loading){
        return <span className="loading loading-dots loading-lg"></span>
    }

    if(user){
        return children;
    }

    return <Navigate to="/login" />;
};

export default Privetrouter;