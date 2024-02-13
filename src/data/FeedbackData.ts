import { v4 as uuid } from 'uuid';

const FeedbackData = [
	{
		id: uuid(),
		rating: 10,
		text: "This is feedback number 1",
	},
	{
		id: uuid(),
		rating: 9,
		text: "This is feedback number 2.",
	},
	{
		id: uuid(),
		rating: 8,
		text: "This is feedback number 3.",
	},
	{
		id: uuid(),
		rating: 7,
		text: "This is feedback number 4.",
	},
];

export default FeedbackData;
