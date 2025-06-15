
import { ref, watch, type Ref } from "vue";

export function useLocalStorage<T>(key: string, initialValue: T): Ref<T> {
    const storedValue = localStorage.getItem(key);
    const data = ref(storedValue ? JSON.parse(storedValue) : initialValue) as Ref<T>;

    watch (data, (val) => {
        localStorage.setItem(key, JSON.stringify(val));
    }, { deep: true });

    return data;
}