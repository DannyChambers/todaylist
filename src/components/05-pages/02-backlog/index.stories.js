import { storiesOf } from '@storybook/vue'
import store from '@/store';

import Todo from './index.vue'

storiesOf('Components/Pages/Backlog', module)
  .add('Default', () => ({
	store,
    components: { Todo },
    template: Todo
  }));