import { storiesOf } from '@storybook/vue'
import store from '@/store';

import Completed from './index.vue'

storiesOf('Components/Pages/Completed', module)
  .add('Default', () => ({
	store,
    components: { Completed },
    template: Completed
  }));