
export interface Meal {
    idMeal: string;
    strMeal: string;
    strMealThumb?: string;
    strCategory?: string;
    strArea?: string;
    strTags?: string;
    strIngredients?: string;
    strMeasure?: string;
    strYoutube?: string;
    strSource?: string;
    [key: string]: any;
}