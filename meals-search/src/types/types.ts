
export interface Meal {
    idMeal: string;
    idIngredient?: string;

    strMeal: string;
    strMealThumb?: string;
    strCategory?: string;
    strArea?: string;
    strTags?: string;

    strIngredients?: string;
    strMeasure?: string;
    strYoutube?: string;
    strSource?: string;
    strDescription?: string;
    
    [key: string]: any;
}