import React, { useState } from "react";

const FlashCards = (props) => {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked);
    };

    return (
        <div 
            className={`flashcard ${props.color}`} 
            onClick={handleClick}
        >
            {isClicked ? `Answer: ${props.answer}` : props.question}
        </div>
    );
};

export default FlashCards;