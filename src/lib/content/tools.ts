import gitHubLogo from '$lib/assets/tools/github.svg';
import warpLogo from '$lib/assets/tools/warp.svg';
import figmaLogo from '$lib/assets/tools/figma.svg';
import poetryLogo from '$lib/assets/tools/poetry.svg';
import pyCharmLogo from '$lib/assets/tools/pycharm.svg';
import dockerLogo from '$lib/assets/tools/docker.webp';
import cloudFlareLogo from '$lib/assets/tools/cloudflare.svg';
import visualStudioCodeLogo from '$lib/assets/tools/visual-studio-code.svg';
import notionLogo from '$lib/assets/tools/notion.svg';
import nvmLogo from '$lib/assets/tools/nvm.svg';
import karabinerElementsLogo from '$lib/assets/tools/karabiner-elements.png';
import oBSLogo from '$lib/assets/tools/obs.svg';
import slackLogo from '$lib/assets/tools/slack.svg';
import nmapLogo from '$lib/assets/tools/nmap.svg';
import gitLensLogo from '$lib/assets/tools/gitlens.png';

export {
	gitHubLogo,
	warpLogo,
	figmaLogo,
	poetryLogo,
	pyCharmLogo,
	dockerLogo,
	cloudFlareLogo,
	visualStudioCodeLogo,
	notionLogo,
	nvmLogo,
	karabinerElementsLogo,
	oBSLogo,
	slackLogo,
	nmapLogo,
	gitLensLogo
};

export type Tool = {
	name: string;
	tagLine: string;
	description: string;
	logo: string;
	url: string;
	enhanced: boolean;
};

const tools: Tool[] = [
	{
		name: 'GitHub',
		tagLine: 'A complete developer platform',
		description:
			'A platform for hosting and collaborating on code, providing version control, issue tracking, and code review.',
		logo: gitHubLogo,
		url: 'https://github.com',
		enhanced: false
	},

	{
		name: 'Warp',
		tagLine: 'Fast Terminal',
		description:
			'Warp is a modern, Rust-based terminal with AI built in so you and your team can build great software, faster.',
		logo: warpLogo,
		url: 'https://warp.dev',
		enhanced: false
	},
	{
		name: 'Figma',
		tagLine: 'Collaborative Design Tool',
		description:
			'Figma is a collaborative design tool that helps in creating, testing, and sharing user interfaces for applications and websites.',
		logo: figmaLogo,
		url: 'https://www.figma.com',
		enhanced: false
	},

	{
		name: 'Poetry',
		tagLine: 'Python Dependency Management Tool',
		description:
			'Poetry is a Python dependency management tool that simplifies package management and project environment setup.',
		logo: poetryLogo,
		url: 'https://python-poetry.org',
		enhanced: false
	},

	{
		name: 'PyCharm',
		tagLine: 'Integrated Development Environment for Python',
		description:
			'An Integrated Development Environment (IDE) for Python, providing intelligent code assistance and debugging tools.',
		logo: pyCharmLogo,
		url: 'https://www.jetbrains.com/pycharm/',
		enhanced: false
	},
	{
		name: 'Docker',
		tagLine: 'Containerization Platform',
		description:
			'A platform that enables the development, shipment, and running of applications inside containers, ensuring consistency across environments.',
		logo: dockerLogo,
		url: 'https://www.docker.com',
		enhanced: false
	},
	{
		name: 'CloudFlare',
		tagLine: 'Content Delivery Network and Security Services',
		description:
			'A company that offers CDN services, DDoS mitigation, and distributed domain name server services to optimize and secure online content.',
		logo: cloudFlareLogo,
		url: 'https://www.cloudflare.com',
		enhanced: false
	},
	{
		name: 'Visual Studio Code',
		tagLine: 'Code Editor',
		description:
			'A free, open-source code editor that offers powerful tools for code development, debugging, and extensions for various programming languages.',
		logo: visualStudioCodeLogo,
		url: 'https://code.visualstudio.com',
		enhanced: false
	},
	{
		name: 'Notion',
		tagLine: 'Collaboration Platform',
		description:
			'A collaboration platform that combines note-taking, task management, and workflow management.',
		logo: notionLogo,
		url: 'https://www.notion.so',
		enhanced: false
	},
	{
		name: 'nvm',
		tagLine: 'Node.js Version Manager',
		description:
			'A Node.js version manager that simplifies the installation and management of multiple Node.js versions.',
		logo: nvmLogo,
		url: 'https://github.com/nvm-sh/nvm',
		enhanced: false
	},
	{
		name: 'Karabiner Elements',
		tagLine: 'Keyboard Customizer for macOS',
		description:
			'A powerful keyboard customizer for macOS, providing multiple customization options for the keyboard.',
		logo: karabinerElementsLogo,
		url: 'https://karabiner-elements.pqrs.org',
		enhanced: false
	},
	{
		name: 'OBS',
		tagLine: 'Open Broadcaster Software',
		description:
			'Open Broadcaster Software, a free and open-source tool for video recording and live streaming.',
		logo: oBSLogo,
		url: 'https://obsproject.com',
		enhanced: false
	},
	{
		name: 'Slack',
		tagLine: 'Collaboration Hub',
		description:
			'A collaboration hub that connects my work with the people I work with through channels, where communication and files are placed in one place.',
		logo: slackLogo,
		url: 'https://slack.com',
		enhanced: false
	},
	{
		name: 'nmap',
		tagLine: 'Network Security Scanner',
		description:
			'A security scanner used to discover hosts and services on a computer network, providing a detailed view of the network.',
		logo: nmapLogo,
		url: 'https://nmap.org',
		enhanced: false
	},

	{
		name: 'GitLens',
		tagLine: 'Git Extension for Visual Studio Code',
		description:
			'An extension for Visual Studio Code that supercharges the Git capabilities, providing advanced blame annotations, code lens, and more.',
		logo: gitLensLogo,
		url: 'https://gitlens.amod.io',
		enhanced: true
	}
];

export default tools;
