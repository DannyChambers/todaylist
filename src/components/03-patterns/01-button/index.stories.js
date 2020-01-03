import { storiesOf } from '@storybook/vue'
import store from '@/store';

import Button from './index.vue'

storiesOf('Components/Patterns/Button', module)
  .add('Default', () => ({
	store,
    components: { Button },
    template: Button
  }));