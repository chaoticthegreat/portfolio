import type { Icon as LucideIcon } from 'lucide-svelte';
import Logo from './logo.svelte';
import LogoIcon from '$lib/assets/RYan.png';
import Github from './github.svelte';
import Svelte from './svelte.svelte';
import Vercel from './vercel.svelte';
import LinkedIn from './linkedin.svelte';

export type Icon = LucideIcon;

export const Icons = {
	logo: Logo,
	logoIcon: LogoIcon,
	gitHub: Github,
	svelte: Svelte,
	vercel: Vercel,
	linkedIn: LinkedIn
};
