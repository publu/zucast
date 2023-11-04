export enum Cookie {
  ZucastToken = "zucastToken",
  SortAlgo = "sortAlgo",
}

export const EXTERNAL_NULLIFIER = BigInt(420);

export const MAX_POST_LENGTH = 1000;

export const RATE_LIMIT_ACTIONS_PER_HOUR = 1000;

export const PROFILE_COLORS = (function () {
  const colors: string[] = [];
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 8; j++) {
      const hue = j === 7 ? 0 : j * 48;
      const sat = j === 7 ? 0 : 60 - i * 10;
      const light = 85 - i * 10;
      colors.push(`hsl(${hue}, ${sat}%, ${light}%)`);
    }
  }
  return colors;
})();

import tailwind from "../../tailwind.config";
export const THEME_COLORS = tailwind?.theme?.colors as Record<string, string>;

export const LOGO_160 = `data:image/png;base64,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`;
