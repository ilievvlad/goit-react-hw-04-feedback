import PropTypes from 'prop-types';

import { Button, List } from "./FeedbackOptions.styled";

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
	const optionsArr = Object.keys(options);

	return (
		<List>
			{optionsArr.map(option => {
				const btnName = option[0].toUpperCase() + option.slice(1);

				return (
					<li key={option}>
						<Button type="button" name={btnName} onClick={() => onLeaveFeedback(option)}>
							{btnName}
						</Button>
					</li>
				);
			})}
		</List>
	);
};

FeedbackOptions.propTypes = {
	options: PropTypes.object.isRequired,
	onLeaveFeedback: PropTypes.func.isRequired
};