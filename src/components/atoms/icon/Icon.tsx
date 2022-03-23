import React from 'react';
import { SvgXml } from 'react-native-svg';
import type { Props } from './Icon.types';

export default function Icon({
  svg,
  fill = '#050505',
  height = 24,
  width = 24,
}: Props): JSX.Element {
  const xml = svg.includes('fill')
    ? svg.replace(/fill="([^"]+)"/i, `fill="${fill}"`)
    : svg.replace('<svg ', `<svg fill="${fill}" `);

  return <SvgXml xml={xml} height={height} width={width} />;
}
