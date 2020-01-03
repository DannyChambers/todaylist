import { storiesOf } from '@storybook/vue'
import store from '@/store';

import Today from './index.vue'

storiesOf('Components/Pages/Today', module)
  .add('Default', () => ({
	store,
    components: { Today },
    template: Today
  }));