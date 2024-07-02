<script lang="ts">
	import { page } from '$app/stores';
	import { Icons, ImageFadeCarousel, SiteHeader } from '$lib/components/site';
	import { buttonVariants } from '$lib/components/ui/button';
	import { siteConfig } from '$lib/config/site';
	import { cn } from '$lib/utils';

	import clashImg from '$lib/assets/root-clash.jpg';
	import tripleImg from '$lib/assets/root-triple.jpg';

	import { Bot, Swords } from 'lucide-svelte';

	const images = [
		{
			src: clashImg,
			alt: 'Photo of 3256 and 581 hitting each other',
			style: 'object-[50%_10%]',
			icon: Swords
		},
		{
			src: tripleImg,
			alt: 'Photo from CalGames 2023',
			style: '',
			icon: Bot
		}
	];

	$: title = $page.data.title;
	$: subTitle = $page.data.subTitle;
</script>

<SiteHeader {title} {subTitle}>
	<p class="text-center text-sm text-green-700 dark:text-green-400">
		In my free time, I love to give back to my community.
	</p>
	<div class="flex w-full items-center justify-center space-x-4 py-4 md:pb-10">
		<a href="/projects" class={cn(buttonVariants())}> My Projects </a>
		<a
			target="_blank"
			rel="noreferrer"
			href={siteConfig.links.gitHubProfile}
			class={cn(buttonVariants({ variant: 'outline' }))}
		>
			<Icons.gitHub class="mr-2 h-4 w-4" />
			GitHub
		</a>
	</div>
</SiteHeader>
<section class="flex">
	<div class="border-grey/15 relative border-t pb-16 pt-10 dark:border-white/20">
		<div
			class="pointer-events-none absolute left-[00%] top-0 h-40 w-[100%] select-none overflow-hidden"
		>
			<div
				class="absolute left-0 top-40 h-96 w-full -translate-y-full [background-image:radial-gradient(closest-side,rgba(123,175,224,0.12)_0%,transparent_100%)]"
			></div>
		</div>
		<sup class="mb-1 text-base text-blue-400 empty:hidden">Introduction</sup>
		<h2 class="text-5xl font-bold">
			Building bots and people<span class="text-blue-400">.</span>
		</h2>
		<div class="text-md mt-12 flex flex-col gap-8 md:flex-row">
			<div class="flex-1 empty:hidden">
				<p>
					I’m a high schooler attending Valley Christian High School in California, deeply immersed
					in the world of robotics and coding. As a proud member of FRC team 3256 Warriorborgs and
					the captain of FTC team 21463 Delta Robotics, I lead with passion and dedication.
					Additionally, I’ve had the privilege of mentoring two FLL Explore teams, sharing my
					knowledge and fostering a love for robotics among younger students.
				</p>
				<p class="mt-2">
					Over at <a
						target="_blank"
						rel="noreferrer"
						class="font-medium underline underline-offset-4"
						href="https://github.com/Team3256">Warriorborgs</a
					>, my role involves creating the code for the robot to run, and also testing/tuning the
					robot. I also create utilities for the team to run smoother and quicker. At
					<a
						target="_blank"
						rel="noreferrer"
						class="font-medium underline underline-offset-4"
						href="https://github.com/Team3256">Delta Robotics</a
					>, I served as a the software lead for one year and have been a captain for one year. My
					role involves managing the teams resources and making sure that tasks are getting done on
					time. I also help train new members who will keep the team sustainable.
				</p>
				<p class="mt-2">
					Outside of robotics, I enjoy playing basketball and dabbling in piano. My technical skills
					span a variety of languages and frameworks including Java, Python, C++, HTML, CSS, Svelte,
					React, PostgreSQL, and Kotlin.
				</p>
				<p class="mt-2">
					When I'm not busy with school or robotics, you can find me having fun with friends, diving
					into exciting projects, or unwinding with a good movie or video game.
				</p>
			</div>

			<div class="flex-1">
				<ImageFadeCarousel {images} />
			</div>
		</div>
	</div>
</section>
