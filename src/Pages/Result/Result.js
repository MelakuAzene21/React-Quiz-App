import { useEffect } from "react";
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
    </div>;
};
export default Result;