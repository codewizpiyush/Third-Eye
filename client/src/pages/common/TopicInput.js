import { useState } from 'react';
import axiosInstance from '../../apicalls/index';

const TopicInput = () => {
  const [topic, setTopic] = useState('');
  const [quiz, setQuiz] = useState(null);
  const [loading, setLoading] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(null);


  const handleTopicChange = (e) => {
    setTopic(e.target.value);
  };

  const handleSubmit = async () => {
    setLoading(true);  // Show loading state while the quiz is being generated
    try {
      // Send a POST request to your backend to generate a quiz based on the input topic
      const response = await axiosInstance.post('/api/generate-quiz', { topic });
      setQuiz(response.data.quiz);
    } catch (error) {
      console.error('Error generating quiz:', error);
    }
    setLoading(false);
  };
  const handleSubmitAnswers = () => {
    const answers = [];
    quiz.forEach((q, index) => {
      const selectedAnswer = document.querySelector(`input[name="question-${index}"]:checked`);
      answers.push(selectedAnswer ? selectedAnswer.value : null);
    });



    // Optional: send answers to backend if needed
    axios.post('/api/submit-quiz', { userAnswers: answers, quiz })
      .then(response => {
        console.log('Score:', response.data.score);
        setScore(response.data.score);
        setUserAnswers(answers);
        setSubmitted(true);                 
      })
      .catch(error => console.error('Error submitting quiz:', error));
  };

  const handleOptionSelect = (questionIndex, selectedOption) => {
    const updatedAnswers = [...userAnswers];
    updatedAnswers[questionIndex] = selectedOption;
    setUserAnswers(updatedAnswers);
  };

  return (
    <div>
      <input
        type="text"
        value={topic}
        onChange={handleTopicChange}
        className='bri'
        placeholder="Enter a topic to practice (e.g., JavaScript)"
      />
      <button onClick={handleSubmit} disabled={loading} className='primary-contained-btn mt-2 w-50 bri placing'>
        {loading ? 'Generating Quiz...' : 'Generate Quiz'}
      </button>

      {quiz && (
        <div className="quiz-container">
          <h3>Quiz for {topic}</h3>
          {quiz.map((q, index) => (
            <div className="quiz-question" key={index}>
              <p><strong>Q{index + 1}.</strong> {q.question}</p>
              {q.options.map((opt, i) => {
                const isSelected = userAnswers[index] === opt;
                const isCorrect = q.correctAnswer === opt;
                const isWrong = isSelected && !isCorrect;

                let optionStyle = {};
                if (submitted) {
                  if (isCorrect) optionStyle = { backgroundColor: 'lightgreen' };
                  if (isWrong) optionStyle = { backgroundColor: '#f8d7da' };
                }

                return (
                  <div className="quiz-option" key={i} style={{ padding: '5px', borderRadius: '5px', ...optionStyle }}>
                    <input 
                    type="radio" 
                    name={`question-${index}`} 
                    value={opt} 
                    disabled={submitted} // Only disable after submission
                    onChange={() => handleOptionSelect(index, opt)} // Track selection 
                    />
                    <label>{opt}</label>
                  </div>
                );
              })}
              
              {submitted && userAnswers[index] !== q.correctAnswer && (
                <p style={{ color: 'green', marginTop: '4px' }}>
                  ✅ Correct Answer: <strong>{q.correctAnswer}</strong>
                </p>
              )}
            </div>
          ))}

        {submitted && (
              <h4 style={{ color: 'blue', marginTop: '20px' }}>
                Your Score: {score} / {quiz.length}
              </h4>
            )}

            {!submitted && (
              <button onClick={handleSubmitAnswers}>Submit Answers</button>
            )}
        </div>
      )}
    </div>
  );
};



export default TopicInput;