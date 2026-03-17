export const generateRandomDataset = (maxLength: number = 1): number[] => {
  return Array.from({ length: (maxLength ?? 1) }, () => Math.floor(Math.random() * 100)); // 0–99
}
