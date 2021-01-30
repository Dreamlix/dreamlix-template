import { addDecorator } from '@storybook/vue';
import vuetify from '@/plugins/vuetify';
import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/dist/vuetify.min.css';

addDecorator(() => ({
	vuetify: vuetify,
	template: '<v-app><v-content><v-container><v-layout column><story/></v-layout></v-container></v-content></v-app>'
}));
