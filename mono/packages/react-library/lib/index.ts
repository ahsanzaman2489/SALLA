'use strict';
export * from "./components/stencil-generated";
export { defineCustomElements , applyPolyfills } from "stencil-library/loader";

export default function reactLibrary() {
  return 'Hello from react Library';
}