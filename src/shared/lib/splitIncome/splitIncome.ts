export const splitIncome = (number: number): string => number
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
