import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackData from "./data/FeedbackData";

function App() {
  const [feedbacks, setFeedbacks] = useState(FeedbackData);

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedbacks([newFeedback, ...feedbacks]);
  };

  const deleteFeedback = (id) => {
    if (window.confirm(`Are you sure you want to delete id:${id}?`)) {
      setFeedbacks(feedbacks.filter((item) => item.id !== id));
    }
  };
  return (
    <>
      <Header />
      <FeedbackForm handleAdd={addFeedback} />
      <FeedbackStats feedbacks={feedbacks} />
      <FeedbackList feedbacks={feedbacks} handleDelete={deleteFeedback} />
    </>
  );
}

export default App;
