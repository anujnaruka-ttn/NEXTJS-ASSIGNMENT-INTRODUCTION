import { recipeApi } from "@/lib/recipes";
import Link from "next/link";
import { RecipeTable } from "../components/recipes/RecipeTable";

// export const revalidate = 60; //ISR After every 60 seconds

export default async function Recipes(){

    const data = await recipeApi.get10Recipes();
    return (
        <section className="w-full h-[80%] bg-[#36b752be] flex justify-center-safe items-center-safe border-2
        rounded-md flex-col-reverse gap-2 overflow-hidden p-3">

            <Link href={'/'} className="rounded-md px-6 py-3 text-shadow-white border-2 bg-[#82e928cc]">
                GO TO HOME
            </Link>

            <RecipeTable recipes={data}/>
        </section>
    )
};