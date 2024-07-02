const SITE_URL = 'ryanabraham.org';

export const siteConfig = {
	name: "Ryan's Portfolio",
	author: 'Ryan Abraham',
	url: SITE_URL,
	description: 'Personal website of Ryan Abraham',
	ogImage: `https://${SITE_URL}/og.png`,
	links: {
		linkedIn: 'https://www.linkedin.com/in/ryan-abraham-b245ba300/',
		gitHubProfile: 'https://github.com/chaoticthegreat',
		gitHubProject: 'https://github.com/bartvdbraak/hellob.art',
		shadcnSvelte: 'https://www.shadcn-svelte.com/'
	},
	keywords: `Ryan Abraham`
};

export type SiteConfig = typeof siteConfig;
