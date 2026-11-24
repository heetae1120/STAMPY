export const C = {
  ink: '#4A3A42',
  ink2: '#7a6870',
  cream: '#FFF8EB',
  ivory: '#FFFCF5',
  lav: '#BCA7F5',
  lavL: '#e3d9fd',
  grape: '#7652BA',
  grapeD: '#5a3d93',
  butter: '#FFE39A',
  butterD: '#f5c95c',
  peach: '#FFAE98',
  peachD: '#f38f75',
  coral: '#ff8b7b',
  mint: '#B7DFC4',
  mintD: '#7cc596',
  leaf: '#5fa77a',
  sky: '#B7DBF3',
  skyD: '#86bfe6',
  skyL: '#dff0fb',
  pink: '#F7BBD0',
  pinkD: '#ef93b4',
  wood: '#d9a77c',
  water: '#d4eaf8',
} as const;

/** Stroke props for the hand-drawn ink outline. */
export const ink = (w = 3.2) => ({ stroke: C.ink, strokeWidth: w, strokeLinejoin: 'round' as const, strokeLinecap: 'round' as const });
