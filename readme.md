<div></div>

# esbuild-plugin-svg

Svg files import plugin for [esbuild](https://github.com/evanw/esbuild).

<br>

### Install

```zsh
npm install esbuild-plugin-svg -D
```

<br>

### String

```js
import iconLogo from './logo.svg';

render() {
    return `
        ${iconLogo}
    `;
}
```

<br>

### Custom element

```js
import iconLogo from './logo.svg';

render() {
    return `
        <icon-logo></icon-logo>
    `;
} // namespace + filename
```

<br>

### Use

`esbuild.config.json`

```js
import esbuild from 'esbuild';
import svg from 'esbuild-plugin-svg';

esbuild
    .build({
        entryPoints: ['index.js'],
        bundle: true,
        outfile: 'main.js',
        plugins: [svg()]
    })
    .catch(() => process.exit(1));
```

`package.json`

```json
{
    "type": "module",
    "scripts": {
        "start": "node esbuild.config.js"
    }
}
```

<br>

### Configure

`esbuild.config.json`

```js
svg({
    customElement: false,
    namespace: 'icon', // namespace custom elements
    minify: false, // with svgo
    minifyOptions: {} // svgo options
});
```

<br>

### Includes

[SVGO](https://github.com/svg/svgo) &nbsp; → &nbsp; Optimizes svg files.

<br>

### Check

[esbuild-serve](https://github.com/nativew/esbuild-serve) &nbsp; → &nbsp; Serve with live reload for esbuild.

[esbuild-plugin-pipe](https://github.com/nativew/esbuild-plugin-pipe) &nbsp; → &nbsp; Pipe esbuild plugins output.

[esbuild-plugin-babel](https://github.com/nativew/esbuild-plugin-babel) &nbsp; → &nbsp; Babel plugin for esbuild.

[esbuild-plugin-postcss-literal](https://github.com/nativew/esbuild-plugin-postcss-literal) &nbsp; → &nbsp; PostCSS tagged template literals plugin for esbuild.

<br>
