import {h} from '@stencil/core';

export const LoadingComponent = (props: any) => <svg
  role="img"
  aria-labelledby="loading-aria"
  viewBox="0 0 510 434"
  preserveAspectRatio="none"
  xmlns="http://www.w3.org/2000/svg"
  width='100%'
  {...props}
>
  <title id="loading-aria">Loading...</title>
  <rect
    x="0"
    y="0"
    width="100%"
    height="100%"
    clip-path="url(#clip-path)"
    style={
      {fill: 'url("#fill")'}
    }
  ></rect>
  <defs>
    <clipPath id="clip-path">
      <rect x="0" y="1" rx="8" ry="8" width="83" height="15"/>
      <path d="M 99 8 a 1 1 0 11 -1 h 409 a 1 1 0 10 2 H 100 a 1 1 0 1 -1 -1 z"/>
      <rect x="0" y="36" rx="8" ry="8" width="510" height="263"/>
      <rect x="0" y="319" rx="8" ry="8" width="250" height="15"/>
      <rect x="430" y="319" rx="8" ry="8" width="80" height="15"/>
      <rect x="0" y="354" rx="8" ry="8" width="250" height="15"/>
      <rect x="430" y="354" rx="8" ry="8" width="80" height="15"/>
      <rect x="0" y="389" rx="6" ry="6" width="510" height="45"/>
    </clipPath>
    <linearGradient id="fill">
      <stop
        offset="0.599964"
        stop-color="#f3f3f3"
        stop-opacity="1"
      >
        <animate
          attributeName="offset"
          values="-2; -2; 1"
          keyTimes="0; 0.25; 1"
          dur="2s"
          repeatCount="indefinite"
        ></animate>
      </stop>
      <stop
        offset="1.59996"
        stop-color="#ecebeb"
        stop-opacity="1"
      >
        <animate
          attributeName="offset"
          values="-1; -1; 2"
          keyTimes="0; 0.25; 1"
          dur="2s"
          repeatCount="indefinite"
        ></animate>
      </stop>
      <stop
        offset="2.59996"
        stop-color="#f3f3f3"
        stop-opacity="1"
      >
        <animate
          attributeName="offset"
          values="0; 0; 3"
          keyTimes="0; 0.25; 1"
          dur="2s"
          repeatCount="indefinite"
        ></animate>
      </stop>
    </linearGradient>
  </defs>
</svg>


