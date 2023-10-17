import {Config} from '@stencil/core';
import {reactOutputTarget} from '@stencil/react-output-target';
import dotenvPlugin from 'rollup-plugin-dotenv';
import {postcss} from "@stencil/postcss";
import autoprefixer from "autoprefixer";

const purgeCss = require("@fullhuman/postcss-purgecss")({
  content: ["./src/**/*.tsx", "./src/**/*.css", "./src/index.html"],
  defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
});

export const config: Config = {
  namespace: 'stencil-library',
  globalStyle: 'src/cart.css',
  plugins: [
    dotenvPlugin(),
    postcss({
      plugins: [
        require("tailwindcss")("./tailwind.config.js"),
        autoprefixer(),
        ...(process.env.NODE_ENV === "production"
          ? [purgeCss, require("cssnano")]
          : [])
      ]
    })
  ],
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
    reactOutputTarget({
      componentCorePackage: 'stencil-library',
      proxiesFile: '../react-library/lib/components/stencil-generated/index.ts',
      includePolyfills: true
    }),
  ],
  testing: {
    browserHeadless: "new",
  },
};
