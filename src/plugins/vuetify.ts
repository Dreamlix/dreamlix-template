import Vue from 'vue';
import Vuetify from 'vuetify';

Vue.use(Vuetify);

export default new Vuetify({
	// TODO: Update theme colours.
	theme: {
		themes: {
			light: {
				primary: '#0075C2',
				secondary: '#454F51',
				accent: '#8c9eff',
				error: '#b71c1c'
			}
		}
	}
});
