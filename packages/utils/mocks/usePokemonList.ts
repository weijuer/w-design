import { ref, watchEffect } from 'vue'

export type Pokemon = {
    name: string
    url: string
}

export type UsePokemonListProps = {
    fetchDelay?: number
}

export function usePokemonList({ fetchDelay = 0 }: UsePokemonListProps = {}) {
    const items = ref<Pokemon[]>([])
    const hasMore = ref(true)
    const isLoading = ref(false)
    const offset = ref(0)
    const limit = 10

    const loadPokemon = async (currentOffset: number) => {
        const controller = new AbortController()
        const { signal } = controller

        try {
            isLoading.value = true

            if (offset.value > 0) {
                // Delay to simulate network latency
                await new Promise(resolve => setTimeout(resolve, fetchDelay))
            }

            const res = await fetch(
                `https://pokeapi.co/api/v2/pokemon?offset=${currentOffset}&limit=${limit}`,
                { signal }
            )

            if (!res.ok) {
                throw new Error('Network response was not ok')
            }

            const json = await res.json()

            hasMore.value = json.next !== null
            // Append new results to existing ones
            items.value = [...items.value, ...json.results]
        } catch (error: any) {
            if (error.name === 'AbortError') {
                console.log('Fetch aborted')
            } else {
                console.error('There was an error with the fetch operation:', error)
            }
        } finally {
            isLoading.value = false
        }
    }

    watchEffect(() => {
        loadPokemon(offset.value)
    })

    const onLoadMore = () => {
        const newOffset = offset.value + limit

        offset.value = newOffset
        loadPokemon(newOffset)
    }

    return {
        items,
        hasMore,
        isLoading,
        onLoadMore
    }
}
