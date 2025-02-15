<<<<<<< HEAD
import { CircularProgress } from "@material-ui/core";
=======
import { CircularProgress } from "@mui/material";
>>>>>>> fbb9a19555c0bbec51ed6ad2128705d60bde9a3f
import { useEffect, useState } from "react";
import Question from "../../components/Question/Question";
import "./Quiz.css";

const Quiz = ({ name, questions, score, setScore, setQuestions }) => {
<<<<<<< HEAD
  const [options, setOptions] = useState();
  const [currQues, setCurrQues] = useState(0);

  useEffect(() => {
    setOptions(
      questions &&
        handleShuffle([
          questions[currQues]?.correct_answer,
          ...questions[currQues]?.incorrect_answers,
        ])
    );
  }, [currQues, questions]);

  console.log(options);
  const handleShuffle = (options) => {
    return options.sort(() => Math.random() - 0.5);
  };

  return (
    <div className="quiz">
      <span className="subtitle">Welcome to the Quiz, {name}</span>

      {questions ? (
        <>
        <div className="quizInfo">
          <span>{questions[currQues].category}</span>
          <span>Score : {score}</span>  
        </div>

        <Question
        currQues={currQues}
        setCurrQues={setCurrQues}
        questions={questions}
        options={options}
        correct={questions[currQues]?.correct_answer}
        score={score}
        setScore={setScore}
        />
        </>
      ) : (
        <CircularProgress
          style={{ margin: 100 }}
          color="inherit"
          size={150}
          thickness={1}
        />
      )}
    </div>
  );
=======
    const [options, setOptions] = useState();
    const [currQues, setCurrQues] = useState(0);

    useEffect(() => {
        setOptions(
            questions &&
            handleShuffle([
                questions[currQues]?.correct_answer,
                ...questions[currQues]?.incorrect_answers,
            ])
        );
    }, [currQues, questions]);

    console.log(options);
    const handleShuffle = (options) => {
        return options.sort(() => Math.random() - 0.5);
    };

    return (
        <div className="quiz">
            <span className="subtitle">Welcome to the Quiz, {name}</span>

            {questions ? (
                <>
                    <div className="quizInfo">
                        <span>{questions[currQues].category}</span>
                        <span>Score : {score}</span>
                    </div>

                    <Question
                        currQues={currQues}
                        setCurrQues={setCurrQues}
                        questions={questions}
                        options={options}
                        correct={questions[currQues]?.correct_answer}
                        score={score}
                        setScore={setScore}
                    />
                </>
            ) : (
                <CircularProgress
                    style={{ margin: 100 }}
                    color="inherit"
                    size={150}
                    thickness={1}
                />
            )}
        </div>
    );
>>>>>>> fbb9a19555c0bbec51ed6ad2128705d60bde9a3f
};

export default Quiz;