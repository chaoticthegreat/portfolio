import picklistvoter from '$lib/assets/projects/picklistvoter.png';
import robotichand from '$lib/assets/projects/robotichand.png';
import coursegen from '$lib/assets/projects/mateohacks.png';
import facialdetection from '$lib/assets/projects/facialdetection.png';
import snowshot from '$lib/assets/projects/snowshot.jpg';
import lsr_drone from '$lib/assets/projects/lsr_drone.png';
import freepython from '$lib/assets/projects/freepython.png';
import emotiondetection from '$lib/assets/projects/emotiondetection.png';
import siameseclassification from '$lib/assets/projects/siameseclassification.png';
import oneshotclassifier from '$lib/assets/projects/oneshotclassifier.png';

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
	},
	{
		logo:snowshot,
		title: 'SnowShot',
		description: 'A vision system for Orin Nanos to detect apriltags and run object detection models accelerated with CUDA',
		gitHubUrl: 'https://github.com/chaoticthegreat/SnowShot',
		year: '2024',
		license: 'MIT',
		languages: [
			{
				name: 'Python',
				color: 'text-yellow-400'
			}
		]
	},
	{
		logo: lsr_drone,
		title: "LSR Drone PCB",
		description: "KiCad PCB files for a drone prototype for Little Sparks Robotics",
		gitHubUrl: "https://github.com/chaoticthegreat/LSR-drone",
		year: '2024',
		license: 'MIT',
		languages: [
			{
				name: 'KiCad',
				color: 'text-blue-800'
			}
		]
	},
	{
		logo: freepython,
		title: "Free Python For Kids Website",
		description: "The website for my summer outreach: free python for kids",
		gitHubUrl: "https://github.com/chaoticthegreat/FreeClassWebsite",
		projectUrl: "https://freepython.ryanabraham.org/",
		year: '2024',
		license: 'None',
		languages: [
			{
				name: 'Svelte',
				color: 'text-orange-400'
			}
		]
	},
	{
		logo: emotiondetection,
		title: 'Emotion Detection Tensorflow Model',
		description: 'A tensorflow model for detection emotions such as happiness, sadness, anger, and fear',
		gitHubUrl: "https://github.com/chaoticthegreat/EmotionDetection",
		year: "2024",
		license: 'None',
		languages: [
			{
				name: "Python",
				color: "text-yellow-400"
			}
		]
	},
	{
		logo: siameseclassification,
		title: "Siamese Facial Classifier",
		description: "A tensorflow model that can classify faces using the siamese classification model.",
		gitHubUrl: "https://github.com/chaoticthegreat/SiameseClassification",
		year: "2024",
		license: 'None',
		languages: [
			{
				name: "Python",
				color: "text-yellow-400"
			}
		]

	},
	{
		logo: oneshotclassifier,
		title: 'One Shot Object Detector',
		description: "A tool to augment objects on to random backgrounds so that an YOLO model can be trained to detect it.",
		gitHubUrl: "https://github.com/chaoticthegreat/OneShotDetection",
		year: "2024",
		license: "MIT",
		languages: [
			{
				name: "Python",
				color: "text-yellow-400"
			}
		]
	}

];

export default projects;
