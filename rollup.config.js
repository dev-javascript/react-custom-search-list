const terser = require('@rollup/plugin-terser');
const commonjs = require('@rollup/plugin-commonjs');
const nodeResolve = require('@rollup/plugin-node-resolve');
const pkg = require('./package.json');
const Config = ({
    en,
    inputPath = '',
    outputFile = 'react-custom-search-list',
    outputName = 'ReactCustomSearchList',
    pf = false,
  }) => {
    var pfName = pf ? '.including-polyfills' : '';
    return {
      input: `lib/${pf ? 'esm-including-polyfills' : 'esm'}/${inputPath}index.js`,
      output: {
        file: `dist/${outputFile}${pfName}.umd${en === 'dev' ? '' : '.min'}.js`,
        format: 'umd',
        name: outputName,
        globals: {
          'react-dom': 'ReactDOM',
          react: 'React',
          '@popperjs/core/lib/popper-lite': 'Popper',
          '@popperjs/core/lib/modifiers/flip': 'Popper.flip',
          '@popperjs/core/lib/modifiers/preventOverflow': 'Popper.preventOverflow',
          '@popperjs/core/lib/modifiers/computeStyles': 'Popper.computeStyles',
        },
        sourcemap: true,
        banner:
          '' +
          `/**
 * ${pkg.name} - ${pkg.description}
 *
 * @version v${pkg.version}
 * @homepage ${pkg.homepage}
 * @author ${pkg.author.name} ${pkg.author.email}
 * @license ${pkg.license}
 */`,
      },
      plugins: (function () {
        const _plugins = [nodeResolve({preferBuiltins: false}), commonjs()];
        if (en === 'prod') {
          _plugins.push(terser());
        }
        return _plugins;
      })(),
      external: function (id) {
        return /^@popperjs|prop-types$|react$|react-dom$|.test.js$|.js.snap$|.css$/g.test(id);
      },
    };
  },
  ConfigFactory = (op) => [Config({en: 'dev', ...op}), Config({en: 'prod', ...op})];
module.exports = ConfigFactory();
