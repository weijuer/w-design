import Select from './src/select.vue';
import SelectOption from './src/select-option.vue';
import SelectOptionGroup from './src/select-option-group.vue';
import { withInstall } from '@w-design/utils'

export const WSelect = withInstall(Select)
export const WSelectOption = withInstall(SelectOption)
export const WSelectOptionGroup = withInstall(SelectOptionGroup)

export default WSelect;