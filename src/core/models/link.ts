export default class Link {
	link: string;
	name: string;
	label: string;

	constructor(link: string, name = '', label = '') {
		this.link = link;
		this.name = name ? name : link;
		this.label = label;
	}
}
