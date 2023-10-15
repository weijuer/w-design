import { onMounted, onUnmounted } from 'vue';

export function useEventListener<K extends Window | Document | HTMLElement, T extends keyof DocumentEventMap | keyof DocumentEventMap>(target: K, event: T, callback: EventListenerOrEventListenerObject) {
    onMounted(() => target.addEventListener(event, callback))
    onUnmounted(() => target.removeEventListener(event, callback))
}