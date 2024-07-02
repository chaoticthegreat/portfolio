import { Bot, School, FileCode, type Icon, Users, AudioLines, University } from 'lucide-svelte';
import type { ComponentType } from 'svelte';

export type TimelineItem = {
	title: string;
	subTitle: string;
	icon: ComponentType<Icon>;
	startYear: number;
	endYear?: number;
};

const timeline: TimelineItem[] = [
	{
		title: 'Software Developer',
		subTitle: 'Warriorborgs 3256',
		icon: Bot,
		startYear: 2023
	},
	{
		title: 'Team Captain',
		subTitle: 'Delta Robotics 21463',
		icon: Bot,
		startYear: 2023
	},
	{
		title: 'Software Lead',
		subTitle: 'Delta Robotics 21463',
		icon: Bot,
		startYear: 2022
	},
	{
		title: 'Software Developer/Instructor',
		subTitle: 'Little Sparks Robotics',
		icon: School,
		startYear: 2024
	},
	{
		title: 'CEO',
		subTitle: 'Free Python For Kids',
		icon: School,
		startYear: 2024
	},
	{
		title: 'Software Developer/Team Lead',
		subTitle: 'MateoHacks',
		icon: FileCode,
		startYear: 2024
	},
	{
		title: 'Software Developer/Team Lead',
		subTitle: 'KhanLab Hackathon',
		icon: FileCode,
		startYear: 2024
	},
	{
		title: 'Co-Founder',
		subTitle: 'AI Club Valley Christian High School',
		icon: Users,
		startYear: 2024
	},
	{
		title: 'Officer',
		subTitle: 'Software Development Club Valley Christian High School',
		icon: Users,
		startYear: 2024
	},
	{
		title: 'Audio/Visual Team',
		subTitle: 'MTCSV',
		icon: AudioLines,
		startYear: 2024
	},
	{
		title: 'Mentor',
		subTitle: 'Cosmic Coders 30760',
		icon: University,
		startYear: 2024
	},
	{
		title: 'Mentor',
		subTitle: 'Cosmic Builders 30705',
		icon: University,
		startYear: 2024
	}
];

export default timeline;
