<script setup>
import { withBase, useData, useRoute } from 'vitepress'

const { theme } = useData()
const route = useRoute();

</script>


<img :src="withBase(theme.logo)" />

