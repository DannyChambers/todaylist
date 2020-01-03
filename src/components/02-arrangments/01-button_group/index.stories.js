import { storiesOf } from '@storybook/vue'
import store from '@/store';

import ButtonGroup from './index.vue'

storiesOf('Components/Arrangements/Button group', module)
  .add('Default', () => ({
	store,
    components: { ButtonGroup },
    template: ButtonGroup
  }));