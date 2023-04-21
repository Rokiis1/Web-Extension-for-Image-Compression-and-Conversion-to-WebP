import * as esbuild from 'esbuild';

await esbuild.build({
	entryPoints: {
		background: './src/background.ts',
		popup: './src/popup.ts',
		content: './src/content.ts'
	},
	bundle: true,
	minify: true,
	sourcemap: true,
	outdir: 'dist',
	target: ['chrome58', 'firefox57', 'safari11', 'edge16'],
	platform: 'browser'
});