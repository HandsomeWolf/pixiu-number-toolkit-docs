import { defineConfig } from 'dumi';

export default defineConfig({
  themeConfig: {
    name: 'pixiu-number-toolkit',
    footer: `Copyright © ${new Date().getFullYear()} 辰火流光`,
  },
  analytics: {
    baidu: '705d000d44a02e194903142e80f88b47',
  },
  base:'/open_source/pixiu-number-toolkit/',
  publicPath: '/open_source/pixiu-number-toolkit/',
  jsMinifierOptions: {
    target: ['chrome80', 'es2020']
  },
  title:'pixiu-number-toolkit',
  logo:'/open_source/pixiu-number-toolkit/logo.png'
});
