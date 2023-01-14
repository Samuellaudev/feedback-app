import { useState } from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedbackData";

function App() {
  const [feedbacks, setFeedbacks] = useState(FeedbackData);
  const deleteFeedback = (id) => {
    if (window.confirm(`Are you sure you want to delete id:${id}?`)) {
      setFeedbacks(feedbacks.filter((item) => item.id !== id));
    }
  };
  return (
    <>
      <Header />
      <FeedbackList feedbacks={feedbacks} handleDelete={deleteFeedback} />
    </>
  );
}

export default App;
