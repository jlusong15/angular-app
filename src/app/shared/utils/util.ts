export const generateRandomDataset = (maxLength: number = 1, maxDefault = 100): number[] => {
  return Array.from({ length: (maxLength ?? 1) }, () => Math.floor(Math.random() * maxDefault));
}

export const hexToRgba = (hex: string, alpha = 1) => {
  const cleanHex = hex.replace('#', '');

  const bigint = parseInt(cleanHex, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;

  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}
