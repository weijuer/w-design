import { ref, onMounted, onBeforeUnmount } from 'vue';

export function useHover() {
    const isHovered = ref(false);

    const onMouseEnter = () => {
        isHovered.value = true;
    };

    const onMouseLeave = () => {
        isHovered.value = false;
    };

    onMounted(() => {
        document.addEventListener('mouseenter', onMouseEnter);
        document.addEventListener('mouseleave', onMouseLeave);
    });

    onBeforeUnmount(() => {
        document.removeEventListener('mouseenter', onMouseEnter);
        document.removeEventListener('mouseleave', onMouseLeave);
    });

    return isHovered;
}