const themeConstants: Constants = {
  spacing: {
    xs: 8,
    s: 16,
    m: 20,
    l: 24,
    xl: 40,
  },
  fontSize: {
    s: 8,
    m: 16,
    l: 24,
    xl: 32,
  },
  borderRadius: {
    s: 4,
    m: 8,
    l: 12,
    xl: 16,
  },
};

export type Spacing = {
  xs: number;
  s: number;
  m: number;
  l: number;
  xl: number;
};

export type FontSize = {
  s: number;
  m: number;
  l: number;
  xl: number;
};

export type BorderRadius = {
  s: number;
  m: number;
  l: number;
  xl: number;
};

export type Constants = {
  spacing: Spacing;
  fontSize: FontSize;
  borderRadius: BorderRadius;
};

export default themeConstants;
