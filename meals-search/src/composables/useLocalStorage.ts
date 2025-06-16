
import { ref, watch, type Ref } from "vue";

export function useLocalStorage<T>(key: string, initialValue: T): Ref<T> {

    const storedValue = localStorage.getItem(key);
    const data = ref<string>(storedValue ? JSON.parse(storedValue) : initialValue) as Ref<T>;

    watch (data, (val) => {
        const cleaned = typeof val === 'string' ? val.trim() : val;
        localStorage.setItem(key, JSON.stringify(cleaned));

    }, { deep: true });

    return data;
}