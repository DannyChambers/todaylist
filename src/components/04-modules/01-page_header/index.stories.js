import { storiesOf } from '@storybook/vue'
import store from '@/store';

import PageHeader from './index.vue'

storiesOf('Components/Modules/Page header', module)
  .add('Default', () => ({
	store,
    components: { PageHeader },
    template: PageHeader
  }));