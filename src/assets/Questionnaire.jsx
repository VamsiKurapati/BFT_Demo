import  React, { useState, useEffect, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Questionnaire() {

    const navigate = useNavigate();
    const location = useLocation();
    const [questionnaire, setQuestionnaire] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Fetch questionnaire data from the server
        fetch("https://api.example.com/questionnaire")
            .then((response) => response.json())
            .then((data) => {
                setQuestionnaire(data);
                setIsLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching questionnaire data:", error);
                setIsLoading(false);
            });
    }, []);
    useEffect(() => {
        // Check if the user is logged in
        const isLoggedIn = localStorage.getItem("isLoggedIn");
        if (!isLoggedIn) {
            navigate("/login");
        }
    }, [navigate]);
    const handleAnswerChange = (event) => {
        const { name, value } = event.target;
        setAnswers((prevAnswers) => ({
            ...prevAnswers,
            [name]: value,
        }));
    };
    const handleNextQuestion = () => {
        if (currentQuestionIndex < questionnaire.length - 1) {
            setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
        } else {
            // Submit the questionnaire
            fetch("https://api.example.com/submit-questionnaire", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(answers),
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log("Questionnaire submitted successfully:", data);
                    navigate("/thank-you");
                })
                .catch((error) => {
                    console.error("Error submitting questionnaire:", error);
                });
        }
    };
    const handlePreviousQuestion = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
        }
    };
    if (isLoading) {
        return <div>Loading...</div>;
    }
    if (questionnaire.length === 0) {
        return <div>No questionnaire available.</div>;
    }
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold mb-4">Questionnaire</h1>
            <div className="bg-white shadow-md rounded-lg p-6">
                <h2 className="text-xl font-semibold mb-4">
                    {questionnaire[currentQuestionIndex].question}
                </h2>
                <div className="mb-4">
                    {questionnaire[currentQuestionIndex].options.map((option, index) => (
                        <div key={index} className="mb-2">
                            <input
                                type="radio"
                                id={`option-${index}`}
                                name={`question-${currentQuestionIndex}`}
                                value={option}
                                onChange={handleAnswerChange}
                            />
                            <label htmlFor={`option-${index}`} className="ml-2">
                                {option}
                            </label>
                        </div>
                    ))}
                </div>
                <div className="flex justify-between">
                    {currentQuestionIndex > 0 && (
                        <button
                            onClick={handlePreviousQuestion}
                            className="bg-gray-500 text-white px-4 py-2 rounded"
                        >
                            Previous
                        </button>
                    )}
                    <button
                        onClick={handleNextQuestion}
                        className="bg-blue-500 text-white px-4 py-2 rounded"
                    >
                        {currentQuestionIndex === questionnaire.length - 1
                            ? "Submit"
                            : "Next"}
                    </button>
                </div>
            </div>
        </div>
    );
}