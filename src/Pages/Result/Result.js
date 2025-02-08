import { useEffect } from "react";
import { useHistory } from "react-router";
import { Button } from "@material-ui/core";
import "./Result.css";
const Result = ({ name, score }) => {
    const history = useHistory();

    useEffect(() => {
        if (!name) {
            history.push("/");
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