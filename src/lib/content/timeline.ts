import {
	Bot,
	School,
	FileCode,
	type Icon,
	Users,
	AudioLines,
	University,
	Church,
	Rocket,
	FileJson
} from 'lucide-svelte';
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
		title: 'Software Developer/Instructor/R&D',
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
		subTitle: 'MateoHacks 2024 - 2nd Place',
		icon: FileCode,
		startYear: 2024,
		endYear: 2024
	},
	{
		title: 'Software Developer/Team Lead',
		subTitle: 'KhanLab Hackathon 2024',
		icon: FileCode,
		startYear: 2024,
		endYear: 2024
	},
	{
		title: 'Officer',
		subTitle: 'ROAR Club Valley Christian High School',
		icon: Users,
		startYear: 2024
	},
	{
		title: 'Teacher',
		subTitle: 'Junior High International Space Station Program',
		icon: Rocket,
		startYear: 2025
	},
	{
		title: 'Teacher',
		subTitle: 'High School International Space Station Program',
		icon: Rocket,
		startYear: 2025
	},
	{
		title: 'Instructor/Curriculum Developer',
		subTitle: 'Software Workshops for High School Students',
		icon: FileJson,
		startYear: 2025
	},
	{
		title: 'Vice President',
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
		title: 'Software/Innovation Mentor',
		subTitle: 'Delta Rovers 57600',
		icon: University,
		startYear: 2024
	},
	{
		title: 'Mentor',
		subTitle: 'Cosmic Builders 30705',
		icon: University,
		startYear: 2024
	},
	{
		title: 'Instructor',
		subTitle: 'Alviso Yacht Club Summer Robotics',
		icon: School,
		startYear: 2024,
		endYear: 2024
	},
	{
		title: 'Crafts Teacher/Small Group Leader',
		subTitle: 'Scuba KidzCamp @ Westgate Church',
		icon: Church,
		startYear: 2024,
		endYear: 2024
	}
];

export default timeline;
