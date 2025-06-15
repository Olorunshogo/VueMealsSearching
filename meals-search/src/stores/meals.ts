
import { defineStore } from "pinia";
import axiosClient from "@/axiosClient";
import type { Meal } from "@/types/types";

export const useMealStore = defineStore('meals', {
    state: () => ({
        meals: ['Salmon', 'Egusi'],
        searchedMeals: {
            loading: false,
            data: [] as Meal[]
        }
    }),

    actions: {
        async searchMeals(keyword: string) {
            this.searchedMeals.loading = true;

            try {
                const response = await axiosClient.get(`search.php?s=${keyword}`);
                this.searchedMeals.data = response.data.meals || [];
            } catch (error) {
                console.error("Failed to search meals", error);
                this.searchedMeals.data = [];
            } finally {
                this.searchedMeals.loading = false;
            }
        }
    }
})