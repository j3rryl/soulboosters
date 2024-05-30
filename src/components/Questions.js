import { useState } from "react";

const Questions = ({ question, answer }) => {
  const [faq, setFaq] = useState(false);
  function toggleFaq() {
    setFaq(!faq);
    console.log(faq);
  }
  function handleKeyDown(event) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleFaq();
    }
  }
  return (
    <>
      <div
        className={`faq ${faq ? "active" : ""}`}
        onClick={toggleFaq}
        onKeyDown={handleKeyDown}
      >
        <div className="question">
          <h3>{question}</h3>
          <svg width="15" height="10" viewBox="0 0 42 25">
            <path
              d="M3 3L21 21L39 3"
              stroke="white"
              strokeWidth="7"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <div className="answer">
          <p>{answer}</p>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Questions;
