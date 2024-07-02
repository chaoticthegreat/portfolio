import picklistvoter from '$lib/assets/projects/picklistvoter.png?enhanced';
import robotichand from '$lib/assets/projects/robotichand.png?enhanced';
import coursegen from '$lib/assets/projects/mateohacks.png?enhanced';
import facialdetection from '$lib/assets/projects/facialdetection.png?enhanced';

// TODO: Use vite glob import to import all images from a folder and select them based on their name
// const gallery = Object.values(import.meta.glob('@assets/asso/*.{png,jpg,jpeg,PNG,JPEG}', { eager: true, as: 'url' }))

export type ProgrammingLanguage = {
	name: string;
	color: string;
};

export type Project = {
	logo: string;
	title: string;
	description: string;
	gitHubUrl?: string;
	projectUrl?: string;
	languages: ProgrammingLanguage[];
	license: string;
	year: string;
};

const projects: Project[] = [
	{
		logo: picklistvoter,
		title: 'Picklist Voter',
		description:
			"A voting system for Team 3256 that allows users to vote for what they think the team's picklist should be",
		projectUrl: 'https://picklist-voter-v2.vercel.app/',
		gitHubUrl: 'https://github.com/Team3256/PicklistVoterV2',
		year: '2024',
		license: 'GPLv3',
		languages: [
			{
				name: 'Svelte',
				color: 'text-orange-400'
			}
		]
	},
	{
		logo: robotichand,
		title: 'Robotic Hand',
		description:
			'My science fair project from 8th grade. A robotic hand using arduino and five servos.',
		year: '2023',
		license: 'None',
		languages: [
			{
				name: 'C',
				color: 'text-blue-400'
			}
		]
	},
	{
		logo: coursegen,
		title: 'CourseGen',
		description:
			'A react app for generating courses for a certain topic. Was made in MateoHacks 2024 (won 2nd place).',
		gitHubUrl: 'https://github.com/nikrp/client',
		year: '2024',
		license: 'None',
		languages: [
			{
				name: 'React',
				color: 'text-blue-200'
			},
			{
				name: 'Python',
				color: 'text-yellow-400'
			}
		]
	},
	{
		logo: facialdetection,
		title: 'Facial Detection',
		description: 'A Tensorflow CNN model for detecting human faces. Uses VGG16. ',
		gitHubUrl: 'https://github.com/chaoticthegreat/FacialDetection/',
		year: '2024',
		license: 'None',
		languages: [
			{
				name: 'Python',
				color: 'text-yellow-400'
			}
		]
	}
];

export default projects;
