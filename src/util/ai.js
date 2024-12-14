import { Mistral } from '@mistralai/mistralai';


export default async function getRecipe(ingredients) {
    const apiKey = import.meta.env.VITE_MISTRAL_API_KEY;

    const client = new Mistral({ apiKey: apiKey });


    console.log(import.meta.env.VITE_MISTRAL_API_KEY);
    

    const chatResponse = await client.agents.complete({
        agentId: import.meta.env.VITE_aId,
        messages: [{ role: 'user', content: `You are an assistant that receives a list of ingredients that a user has and suggests a recipe could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page these are ingredients : ${ingredients}` }],
    });

    return chatResponse.choices[0].message.content
}

