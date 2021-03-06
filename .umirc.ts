import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [{ path: '/', component: '@/pages/index' }],
  fastRefresh: {},
  outputPath: '/docs/',
  publicPath: './',
  history: {
    type: 'hash',
  },
});
