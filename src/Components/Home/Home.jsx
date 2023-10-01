import { useContext } from "react";
import { Authcontext } from "../Usecontext/Authprovider";

const Home = () => {
    const authinfo = useContext(Authcontext)
    console.log(authinfo)
    return (
        <div>
            <h2 className=" text-3xl font-bold">This name is: {authinfo.name}</h2>
        </div>
    );
};

export default Home;