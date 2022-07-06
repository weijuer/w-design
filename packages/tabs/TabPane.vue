<script>
import { defineComponent, ref, computed, inject } from 'vue';
export default defineComponent({
  name: 'w-tab-pane',
  props: {
    label: {
      type: [String, Number]
    },
    name: {
      type: [String, Number],
      require: true
    },
    disabled: Boolean
  },
  setup(props, { slots }) {
    const { setTabPanes } = inject('tabs');
    setTabPanes({ ...props, ...slots });
  },
  render() {
    return null;
  }
});
</script>
