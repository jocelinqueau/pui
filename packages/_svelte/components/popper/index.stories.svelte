<script>
  import { Template, Story, Meta } from '@storybook/addon-svelte-csf';
  import SveltePopper from './popper.svelte';


</script>

<Meta title="Popper" component={SveltePopper}/>

<Template let:args>
  <SveltePopper {...args}/>
</Template>

<Story name="Primary" />