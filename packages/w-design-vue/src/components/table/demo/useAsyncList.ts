import { ref, Ref, onMounted, watchEffect } from 'vue';

interface UseAsyncListOptions<T, P> {
    load: (args: P) => Promise<T[]>;
}

interface UseAsyncListReturn<T> {
    isLoading: Ref<boolean>;
    error: Ref<string | null>;
    data: Ref<T[]>;
    loadMore: Ref<boolean>;
}

const useAsyncList = <T, P>({ load }: UseAsyncListOptions<T, P>): UseAsyncListReturn<T> => {
    const isLoading = ref(false);
    const error = ref<string | null>(null);
    const data = ref<any[]>([]);
    const loadMore = ref(false);

    const fetchData = async () => {
        isLoading.value = true;
        try {
            const params = {
                cursor: 1
            } as P;

            const result = await load(params);
            data.value = result;
            console.log(result)
        } catch (err) {
            error.value = 'Error fetching data';
        } finally {
            isLoading.value = false;
            loadMore.value = false;
        }
    };

    onMounted(() => {
        fetchData();
    });

    watchEffect(() => {
        if (loadMore.value) {
            fetchData()
        }
    })

    return { isLoading, error, data, loadMore };
};

export default useAsyncList;
