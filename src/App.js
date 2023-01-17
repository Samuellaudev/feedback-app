import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutIconLink from "./components/AboutIconLink";
import FeedbackData from "./data/FeedbackData";
import AboutPage from "../src/pages/AboutPage";
import { FeedbackProvider } from "../src/context/FeedbackContext";

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
		<FeedbackProvider>
			<Router>
				<Header />
				<div className="container">
					<Routes>
						<Route
							exact
							path="/"
							element={
								<>
									<FeedbackForm handleAdd={addFeedback} />
									<FeedbackStats />
									<FeedbackList
										handleDelete={deleteFeedback}
									/>
									<AboutIconLink />
								</>
							}
						></Route>
						<Route path="/about" element={<AboutPage />} />
					</Routes>
				</div>
			</Router>
		</FeedbackProvider>
	);
}

export default App;
