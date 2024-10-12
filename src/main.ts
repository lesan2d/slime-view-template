import { createApp } from 'vue';
import App from './App.vue';
import SetsUi from 'sets-ui';

import 'slime-view/style';
import 'sets-ui/theme-default';

const app = createApp(App);
app.use(SetsUi);
app.mount('#app');
