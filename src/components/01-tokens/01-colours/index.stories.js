import { storiesOf } from '@storybook/vue'
import store from '@/store';

import Colours from './index.vue'

storiesOf('Components/Tokens/Colours', module)
  .add('Primary pallette', () => ({
	store,
    components: { Colours },
    template: Colours
  }));