<template>
	<v-footer padless color="primary" absolute dark class="pa-4">
		<v-container fluid>
			<v-row>
				<v-col cols="0" md="3"></v-col>
				<v-col cols="12" md="6">
					<v-row>
						<v-col cols="12" sm="4">
							<socials-card />
						</v-col>
						<v-col cols="12" sm="4">
							<link-list title="product" :links="productLinks" />
						</v-col>
						<v-col cols="12" sm="4">
							<link-list title="support" :links="supportLinks" />
						</v-col>
					</v-row>
				</v-col>
			</v-row>
		</v-container>
	</v-footer>
</template>

<script lang="ts">
import Vue from 'vue';

import SocialsCard from '@/core/components/SocialsCard.vue';
import LinkList from '@/core/components/LinkList.vue';
import Link from '@/core/models/link';

export default Vue.extend({
	components: { SocialsCard, LinkList },
	data: () => ({
		productLinks: [
			new Link('Facebook.com', 'Influencers'),
			new Link('Facebook.com', 'Competitor Tracking', 'Soon'),
			new Link('Facebook.com', 'Social Listening', 'Soon'),
			new Link('Facebook.com', 'Social Scheduling', 'Soon')
		],
		supportLinks: [new Link('Facebook.com', 'Contact Us'), new Link('Facebook.com', 'Watch Video'), new Link('Facebook.com', 'Guides', 'Soon')]
	})
});
</script>
