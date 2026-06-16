const fs = require('fs');
const path = require('path');

const srcPath = path.join(__dirname, 'public', 'hero-bg.svg.bak');
const destPath = path.join(__dirname, 'components', 'sub', 'HeroBg.tsx');

let svgContent = fs.readFileSync(srcPath, 'utf8');
const lines = svgContent.split('\n');

// The lines we need to replace are:
// AWS: 33, 34
// Firebase: 39
// Thunder/Vite: 63, 64
// Flower: 69

lines[33] = '<image href="/skills/visualstudiocode.svg" x="425" y="342" width="60" height="60" />';
lines[34] = ''; // remove second AWS path

lines[39] = '<image href="/skills/next.png" x="219" y="175" width="60" height="60" />';

lines[63] = '<image href="/skills/tailwind.png" x="139" y="425" width="60" height="60" />';
lines[64] = ''; // remove second thunder path

lines[69] = '<image href="/skills/figma.png" x="114" y="263" width="60" height="60" />';

svgContent = lines.join('\n');

// Convert SVG attributes to camelCase for React
svgContent = svgContent
  .replace(/fill-opacity/g, 'fillOpacity')
  .replace(/fill-rule/g, 'fillRule')
  .replace(/clip-rule/g, 'clipRule')
  .replace(/clip-path/g, 'clipPath')
  .replace(/stroke-width/g, 'strokeWidth')
  .replace(/stroke-opacity/g, 'strokeOpacity')
  .replace(/mask-type/g, 'maskType')
  .replace(/maskUnits/g, 'maskUnits')
  .replace(/color-interpolation-filters/g, 'colorInterpolationFilters')
  .replace(/filterUnits/g, 'filterUnits')
  .replace(/gradientUnits/g, 'gradientUnits')
  .replace(/gradientTransform/g, 'gradientTransform')
  .replace(/stdDeviation/g, 'stdDeviation')
  .replace(/class=/g, 'className=')
  .replace(/xmlns:xlink/g, 'xmlnsXlink');

// In React, style="mask-type:alpha" becomes style={{ maskType: 'alpha' }}
svgContent = svgContent.replace(/style="mask-type:alpha"/g, 'style={{ maskType: "alpha" }}');

const componentContent = `import React from 'react';

export const HeroBg = ({ className }: { className?: string }) => (
  <div className={className}>
    ${svgContent.replace('<svg ', '<svg className="w-full h-full" ')}
  </div>
);
`;

fs.writeFileSync(destPath, componentContent, 'utf8');
console.log("Successfully created HeroBg.tsx!");
