// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import mermaid from 'astro-mermaid';
import robotsTxt from 'astro-robots-txt';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://guardpact.us',
	integrations: [
		starlight({
			title: 'The Guard Pact',
			// social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{
					label: 'High-Level Goals',
					autogenerate: { directory: '01-hlg' },
				},
				{
					label: 'Essential Points',
					autogenerate: { directory: '02-essential-points' },
				},
				{
					label: 'State Labs',
					autogenerate: { directory: '03-state-labs' },
				},
				{
					label: 'Reference',
					autogenerate: { directory: '04-reference' },
				},
				{
					label: 'Blog',
					link: '/blog',
				},
				{
					label: 'Meta',
					autogenerate: { directory: '05-meta' },
				},
			],
		}),
		mermaid(),
		robotsTxt(),
		sitemap(),
	],
});
