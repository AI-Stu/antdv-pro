import type { LayoutSetting } from '@/stores/app';

export default {
  title: 'Cosing Plus',
  theme: 'light',
  logo: '/logo.svg',
  collapsed: false,
  drawerVisible: false,
  colorPrimary: '#1677FF',
  layout: 'mix',
  contentWidth: 'Fluid',
  fixedHeader: false,
  fixedSider: true,
  splitMenus: false,
  header: true,
  menu: true,
  watermark: true,
  menuHeader: true,
  footer: false,
  colorWeak: false,
  colorGray: false,
  multiTab: true,
  multiTabFixed: false,
  keepAlive: true,
  accordionMode: true,
  leftCollapsed: true,
  compactAlgorithm: false,
  headerHeight: 48,
  copyright: 'Cosing Plus Team 2024',
  animationName: 'slide-fadein-right'
} as LayoutSetting;

export const animationNameList = [
  {
    label: 'None',
    value: 'none'
  },
  {
    label: 'Fadein Up',
    value: 'slide-fadein-up'
  },
  {
    label: 'Fadein Right',
    value: 'slide-fadein-right'
  },
  {
    label: 'Zoom Fadein',
    value: 'zoom-fadein'
  },
  {
    label: 'Fadein',
    value: 'fadein'
  }
];
export type AnimationNameValueType = 'none' | 'slide-fadein-up' | 'slide-fadein-right' | 'zoom-fadein' | 'fadein'
