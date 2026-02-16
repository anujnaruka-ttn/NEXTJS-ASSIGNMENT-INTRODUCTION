class RecipeApi {
    constructor(){
        this.baseUrl = process.env.RECIPE_API_URL;
    }

    async get10Recipes(){
        const response = await fetch(this.baseUrl);
        if(!response.ok) throw new Error('Failed to fetch recipes.');
        const apiData = await response.json();
        return apiData.recipes.slice(0,10);
    }
}

export const recipeApi = new RecipeApi();