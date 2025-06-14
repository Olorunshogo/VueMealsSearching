
import { defineStore } from "pinia";

export const useMealStore = defineStore('meals', {
    state: () => ({
        meals: ['Salmon', 'Egusi']
    })
})