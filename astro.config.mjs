// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	vite: { plugins: [tailwindcss()] },
	integrations: [
		starlight({
			title: 'zzz',
			head: [
				{
					tag: 'script',
					content: `window.op=window.op||function(){var n=[];return new Proxy(function(){arguments.length&&n.push([].slice.call(arguments))},{get:function(t,r){return"q"===r?n:function(){n.push([r].concat([].slice.call(arguments)))}} ,has:function(t,r){return"q"===r}}) }();window.op('init',{clientId:'1b79848c-a999-443f-acd7-215131abf314',apiUrl:'https://opapi-to4gkg0k0wwcs0kkgwscs04s.indielab.link',trackScreenViews:true,trackOutgoingLinks:true,trackAttributes:true});`,
				},
				{
					tag: 'script',
					attrs: { src: 'https://opdashboard-to4gkg0k0wwcs0kkgwscs04s.indielab.link/op1.js', defer: true, async: true },
				},
			],
			logo: {
				light: './src/assets/logo-light.svg',
				dark: './src/assets/logo-dark.svg',
				replacesTitle: true,
			},
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/seemsindie/zzz.zig' },
			],
			editLink: {
				baseUrl: 'https://github.com/seemsindie/zzz_docs/edit/main/',
			},
			customCss: ['./src/styles/custom.css'],
			sidebar: [
				{
					label: 'Getting Started',
					items: [
						{ label: 'Installation', slug: 'getting-started/installation' },
						{ label: 'Quick Start', slug: 'getting-started/quick-start' },
						{ label: 'Project Structure', slug: 'getting-started/project-structure' },
						{ label: 'Configuration', slug: 'getting-started/configuration' },
					],
				},
				{
					label: 'Core',
					items: [
						{ label: 'Routing', slug: 'core/routing' },
						{ label: 'Middleware', slug: 'core/middleware' },
						{ label: 'Context', slug: 'core/context' },
						{ label: 'Controllers', slug: 'core/controllers' },
						{ label: 'Static Files', slug: 'core/static-files' },
						{ label: 'Error Handling', slug: 'core/error-handling' },
					],
				},
				{
					label: 'Templates',
					items: [
						{ label: 'Overview', slug: 'templates/overview' },
						{ label: 'Syntax', slug: 'templates/syntax' },
						{ label: 'Layouts & Partials', slug: 'templates/layouts-and-partials' },
						{ label: 'Pipes & Helpers', slug: 'templates/pipes-and-helpers' },
						{ label: 'htmx Integration', slug: 'templates/htmx' },
					],
				},
				{
					label: 'Database',
					items: [
						{ label: 'Overview', slug: 'database/overview' },
						{ label: 'Schema', slug: 'database/schema' },
						{ label: 'Repository', slug: 'database/repository' },
						{ label: 'Query Builder', slug: 'database/query-builder' },
						{ label: 'Changesets', slug: 'database/changesets' },
						{ label: 'Migrations', slug: 'database/migrations' },
						{ label: 'Transactions', slug: 'database/transactions' },
						{ label: 'Associations', slug: 'database/associations' },
						{ label: 'Testing', slug: 'database/testing' },
					],
				},
				{
					label: 'WebSockets',
					items: [
						{ label: 'Overview', slug: 'websockets/overview' },
						{ label: 'Channels', slug: 'websockets/channels' },
						{ label: 'Presence', slug: 'websockets/presence' },
						{ label: 'zzz.js Client', slug: 'websockets/zzz-js-client' },
					],
				},
				{
					label: 'Background Jobs',
					items: [
						{ label: 'Overview', slug: 'jobs/overview' },
						{ label: 'Workers', slug: 'jobs/workers' },
						{ label: 'Queues & Stores', slug: 'jobs/queues-and-stores' },
						{ label: 'Retry Strategies', slug: 'jobs/retry-strategies' },
						{ label: 'Cron Scheduling', slug: 'jobs/cron' },
						{ label: 'Unique Jobs', slug: 'jobs/unique-jobs' },
						{ label: 'Telemetry', slug: 'jobs/telemetry' },
					],
				},
				{
					label: 'Mailer',
					items: [
						{ label: 'Overview', slug: 'mailer/overview' },
						{ label: 'Adapters', slug: 'mailer/adapters' },
						{ label: 'Templates', slug: 'mailer/templates' },
					],
				},
				{
					label: 'Auth & Security',
					items: [
						{ label: 'Overview', slug: 'authentication/overview' },
						{ label: 'Bearer & Basic Auth', slug: 'authentication/bearer-and-basic' },
						{ label: 'JWT', slug: 'authentication/jwt' },
						{ label: 'Sessions & CSRF', slug: 'authentication/sessions-and-csrf' },
						{ label: 'Rate Limiting', slug: 'authentication/rate-limiting' },
					],
				},
				{
					label: 'Testing',
					items: [
						{ label: 'Overview', slug: 'testing/overview' },
						{ label: 'HTTP Test Client', slug: 'testing/http-test-client' },
						{ label: 'WebSocket Testing', slug: 'testing/websocket-testing' },
						{ label: 'Database Sandbox', slug: 'testing/database-sandbox' },
					],
				},
				{
					label: 'API Docs',
					items: [
						{ label: 'Overview', slug: 'api/overview' },
						{ label: 'Swagger & OpenAPI', slug: 'api/swagger-openapi' },
						{ label: 'JSON Schema', slug: 'api/json-schema' },
					],
				},
				{
					label: 'CLI',
					items: [
						{ label: 'Overview', slug: 'cli/overview' },
						{ label: 'New Project', slug: 'cli/new-project' },
						{ label: 'Generators', slug: 'cli/generators' },
						{ label: 'Migrations', slug: 'cli/migrations-cli' },
						{ label: 'Dev Server', slug: 'cli/dev-server' },
					],
				},
				{
					label: 'Deployment',
					items: [
						{ label: 'Overview', slug: 'deployment/overview' },
						{ label: 'Docker', slug: 'deployment/docker' },
						{ label: 'Environment Config', slug: 'deployment/environment-config' },
					],
				},
				{
					label: 'Advanced',
					items: [
						{ label: 'Server Backends', slug: 'advanced/server-backends' },
						{ label: 'Observability', slug: 'advanced/observability' },
						{ label: 'Performance', slug: 'advanced/performance' },
					],
				},
			],
		}),
	],
});
