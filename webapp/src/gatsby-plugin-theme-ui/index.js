// example theme file
// Doc: https://theme-ui.com/packages/gatsby-plugin/
// Usage: https://theme-ui.com/getting-started#sx-prop (use the 'sx' prop for non rebass elemnts)
import { deep } from '@theme-ui/presets';

export default {
  ...deep,
  colors: {
    ...deep.colors,
    // override here
  },
};
