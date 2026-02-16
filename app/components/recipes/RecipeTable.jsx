'use client'

import { Table, Tbody, Td, Th, Thead, Tr } from "react-super-responsive-table";

export const RecipeTable = ({recipes}) => {

    const tableColumns = ["id","name","prepTimeMinutes","servings"];
    return (
        <div className="w-full h-full bg-[#282429ee] flex flex-col justify-center-safe items-center-safe
        font-bold text-2xl rounded-sm gap-2 p-1.5">
            <p className="mt-2">
                <span>!!! </span> {recipes.length} RECIPES <span> !!!</span>
            </p>
            <Table className="bg-[#0a060d95] rounded-md border">
                <Thead>
                    <Tr className="capitalize gap-x-4">
                        {
                            tableColumns.map(
                                (column,index) => <Th key={index} className="border-[#e6e2e2] border-2 p-3">
                                {column}
                            </Th>
                            )
                        }
                    </Tr>
                </Thead>
                <Tbody>
                    {
                        recipes.map((recipe) => 
                            <Tr key={recipe.id}>
                                <Td className="[&>.tdBefore]:hidden border-[#e6e2e2] border-2 p-1.5"> 
                                    {recipe.id}
                                </Td>
                                <Td className="[&>.tdBefore]:hidden border-[#e6e2e2] border-2 p-1.5">
                                    {recipe.name}
                                </Td>
                                <Td className="[&>.tdBefore]:hidden border-[#e6e2e2] border-2 p-1.5">
                                    {recipe.prepTimeMinutes}
                                </Td>
                                <Td className="[&>.tdBefore]:hidden border-[#e6e2e2] border-2 p-1.5">
                                    {recipe.servings}
                                </Td>
                            </Tr>
                        )
                    }
                </Tbody>
            </Table>
    </div>
    );
};