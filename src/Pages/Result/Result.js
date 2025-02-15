import { useEffect } from "react";
<<<<<<< HEAD
import { useHistory } from "react-router";
import { Button } from "@material-ui/core";
import "./Result.css";
const Result=({name,score})=>{
    const history=useHistory();

       useEffect(() => {
             if(!name)
             {
                history.push("/");
             }
       },[name,history]);  

       return  <div className="result">
        
        <div className="nam"><h2>{name},Your Quiz is completed.</h2>
        <span className="title">Final score:{score}</span>
        </div>
        <Button 
         variant="contained"
         color="secondary"
         size="large"
         style={{alignSelf:"center",marginTop:20}}
         href="/"
         >Go To HomePage</Button>
=======
import { useNavigate } from "react-router";
import { Button } from "@mui/material";
import "./Result.css";
const Result = ({ name, score }) => {
    const history = useNavigate();

    useEffect(() => {
        if (!name) {
            history("/");
        }
    }, [name, history]);

    return <div className="result">

        <div className="nam"><h2>{name},Your Quiz is completed.</h2>
            <span className="title">Final score:{score}</span>
        </div>
        <Button
            variant="contained"
            color="secondary"
            size="large"
            style={{ alignSelf: "center", marginTop: 20 }}
            href="/"
        >Go To HomePage</Button>
>>>>>>> fbb9a19555c0bbec51ed6ad2128705d60bde9a3f
    </div>;
};
export default Result;