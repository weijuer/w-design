import { ref, SetupContext } from 'vue'
import { type AvatarEmits, type AvatarProps } from './interface'

export const useAvatar = (props: AvatarProps, emit: SetupContext<AvatarEmits>['emit']) => {

    const _ref = ref<HTMLElement>()

    const onClick = (event: MouseEvent) => {
        emit('click', event)
    }

    // const avatarGroupContext: any = inject(AVATAR_KEY);

    return { _ref, onClick }
}
