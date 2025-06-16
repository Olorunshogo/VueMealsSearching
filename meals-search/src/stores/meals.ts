
import { defineStore } from "pinia";
import axiosClient from "@/axiosClient";
import type { Meal } from "@/types/types";

export const useMealStore = defineStore('meals', {
    state: () => ({
        meals: ['Salmon', 'Egusi'],
        searchedMeals: {
            loading: false,
            data: [] as Meal[]
        },
        mealDetails: null as Meal | null,
        searchedMealsByLetter: {
            loading: false,
            data: [] as Meal[]
        },
        searchedMealsByIngredients: {
            loading: false,
            data: [] as Meal[]
        }
    }),

    actions: {
        // Search Meals By Name
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
        },

        // Get Name By Id for Meal Details
        async getMealsById(id: string) {
            try {
                const response = await axiosClient.get(`lookup.php?i=${id}`);
                this.mealDetails = response.data.meals?.[0] || null;
            } catch (error) {
                console.error("Failed to fetch meal by ID ", error)
                this.mealDetails = null;
            }
        },

        // Search Name by Letter
        async searchMealsByLetter(letter: string) {
            this.searchedMealsByLetter.loading = true;

            try {
                const response = await axiosClient.get(`search.php?f=${letter}`);
                this.searchedMealsByLetter.data = response.data.meals || [];
            } catch (error) {
                console.error("Failed to search meals", error);
                this.searchedMealsByLetter.data = [];
            } finally {
                this.searchedMealsByLetter.loading = false;
            }
        },

        // Search Meals by Ingredients
        async searchMealsByIngredients(ingredient: string) {
            this.searchedMealsByIngredients.loading = true;

            try {
                const response = await axiosClient.get(`filter.php?i=${ingredient}`);
                this.searchedMealsByIngredients.data = response.data.meals || [];
            } catch (error) {
                console.error("Failed to search meals", error);
                this.searchedMealsByIngredients.data = [];
            } finally {
                this.searchedMealsByIngredients.loading = false;
            }
        },

    }
})