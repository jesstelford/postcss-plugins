import { parseArguments, SignalValue } from './args';
import type { PluginCreator, Plugin } from 'postcss';
import { stdinToStdout } from './io-stdin-to-stdout';
import { stdinToFs } from './io-stdin-to-fs';
import { fsToStdout } from './io-fs-to-stdout';
import { fsToFs } from './io-fs-to-fs';

export { parseArguments } from './args';
export { helpTextLogger } from './help';

export type { Arguments, SignalValue } from './args';
export type PluginCreatorOptions = Record<string, unknown> | null;

export async function cli(plugin: PluginCreator<PluginCreatorOptions>, allowedPluginOpts: Array<string>, helpLogger: () => void, standalone = true) {
	// Get process and plugin options from the command line
	const argo = parseArguments(process.argv.slice(standalone ? 2 : 3), allowedPluginOpts, helpLogger);
	if (argo === SignalValue.InvalidArguments) {
		process.exit(1);
	}

	const pluginInstance = plugin(argo.pluginOptions) as Plugin;

	// Read from stdin and write to stdout
	if (argo.stdin && argo.stdout) {
		await stdinToStdout(pluginInstance, argo, helpLogger);
		return;
	}

	// Read from stdin and write to a file
	if (argo.stdin) {
		await stdinToFs(pluginInstance, argo, helpLogger);
		return;
	}

	// Read from one or more files and write to stdout
	if (argo.stdout) {
		await fsToStdout(pluginInstance, argo);
		return;
	}

	// Read from one or more files and write to as many files
	await fsToFs(pluginInstance, argo);
}
