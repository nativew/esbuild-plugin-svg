import fs from 'fs';
import path from 'path';
import { optimize } from 'svgo';

const pluginSvg = (options = {}) => ({
	name: 'svg',
	setup(build) {
		const {
			customElement = false,
			namespace = 'icon',
			minify = false,
			minifyOptions = {}
		} = options;
		const loader = customElement ? 'js' : 'text';

		build.onLoad({ filter: /\.svg$/ }, async args => {
			const fileName = path.basename(args.path, '.svg');
			let contents = await fs.promises.readFile(args.path, 'utf8');

			if (minify) {
				contents = optimize(contents, {
					path: args.path,
					...minifyOptions
				}).data;
			}

			if (customElement) {
				contents = `
					class SvgIcon extends HTMLElement {
						connectedCallback() {
							this.innerHTML = \`${contents}\`;
						}
					}
					window.customElements.define('${namespace ? `${namespace}-` : ''}${fileName}', SvgIcon);
					export default SvgIcon;
				`;
			}

			return { contents, loader };
		});
	}
});

export default pluginSvg;
