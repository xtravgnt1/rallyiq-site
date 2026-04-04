import { Dimensions, Platform, PixelRatio } from 'react-native';

const { width: SCREEN_W, height: SCREEN_H } = Dimensions.get('window');

// Base design is for iPhone 14 (390pt wide)
// iPad scales up, smaller iPhones scale down slightly
const BASE_WIDTH = 390;
const scale = SCREEN_W / BASE_WIDTH;

// Clamp scale so it doesn't go too small or too large
const clampedScale = Math.min(Math.max(scale, 0.85), 1.6);

// Use this for font sizes and spacing
function rs(size) {
  return Math.round(size * clampedScale);
}

// Detect device type
export const isTablet = SCREEN_W >= 768;
export const isLargeTablet = SCREEN_W >= 1024;

export const Colors = {
  bg:           '#111128',
  bgDeep:       '#0d0d1a',
  card:         '#1c1c40',
  cardAlt:      '#141430',
  border:       '#252542',
  borderBright: '#333358',

  primary:    '#6c6cff',
  primarySoft:'#a78bfa',
  white:      '#ffffff',
  offWhite:   '#e8e8f0',

  textPrimary:   '#ffffff',
  textSecondary: '#c4c4e8',
  textMuted:     '#aaaad8',
  textDim:       '#8888b8',

  success: '#4ADE80',
  warning: '#E8940A',
  danger:  '#E24B4A',
  info:    '#6c6cff',

  gradientPrimary: ['#6c6cff', '#a78bfa'],
  gradientDanger:  ['#E24B4A', '#c0392b'],
  gradientSuccess: ['#4ADE80', '#22c55e'],
};

export const Typography = {
  fontMono: 'Courier',
  sizes: {
    xs:   rs(12),
    sm:   rs(14),
    base: rs(16),
    md:   rs(17),
    lg:   rs(19),
    xl:   rs(22),
    xxl:  rs(26),
    hero: rs(34),
  },
  weights: {
    regular:  '400',
    medium:   '500',
    semibold: '600',
    bold:     '700',
  },
};

export const Spacing = {
  xs:  rs(4),
  sm:  rs(8),
  md:  rs(12),
  lg:  rs(16),
  xl:  rs(20),
  xxl: rs(28),
};

export const Radius = {
  sm:   rs(8),
  md:   rs(12),
  lg:   rs(16),
  xl:   rs(20),
  pill: 99,
};

// Tablet-specific layout helpers
// Use these for column counts, card widths, etc.
export const Layout = {
  screenW:      SCREEN_W,
  screenH:      SCREEN_H,
  isTablet,
  isLargeTablet,
  contentWidth: isLargeTablet ? SCREEN_W * 0.75 : isTablet ? SCREEN_W * 0.85 : SCREEN_W,
  columns:      isLargeTablet ? 3 : isTablet ? 2 : 1,
  cardMinWidth: isTablet ? 300 : '100%',
  horizontalPad: isTablet ? rs(32) : rs(20),
};
