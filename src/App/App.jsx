import { useState } from "react";

import { Section } from "Components/Section/Section";
import { FeedbackOptions } from "Components/FeedbackOptions/FeedbackOptions";
import { Statistics } from "Components/Statistics/Statistics";
import { Notification } from "Components/Notification/Notification";

export const App = () => {
	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);

	const data = { good, neutral, bad };

	const updateFeedback = feedback => {
		switch (feedback) {
			case 'good':
				setGood(good + 1);
				break;

			case 'neutral':
				setNeutral(neutral + 1);
				break;

			case 'bad':
				setBad(bad + 1);
				break;
			default:
				break;
		}
	};

	const countTotalFeedback = () => {
		return Object.values(data).reduce((total, d) => total + d, 0);
	};

	const countPositiveFeedbackPercentage = () => {
		return countTotalFeedback()
			? Math.floor((good / countTotalFeedback()) * 100)
			: 0;
	};

	const totalFeedback = countTotalFeedback();
	const totalPercentage = countPositiveFeedbackPercentage();

	return (
		<div className="container">
			<Section title={"Please leave feedback"}>
				<FeedbackOptions
					options={data}
					onLeaveFeedback={updateFeedback}
				/>
			</Section>
			<Section title={"Statistics"}>
				{totalFeedback > 0 ? (
					<Statistics
						good={good}
						neutral={neutral}
						bad={bad}
						total={totalFeedback}
						positivePercentage={totalPercentage}
					/>
				) : (
					<Notification message={"There is no feedback"} />
				)}
			</Section>
		</div>
	);
}
