'use client'

import Link from "next/link";

export const HomePage = () => {

    return (
        <section className="w-full h-full bg-[#36b752be] flex justify-center-safe items-center-safe border-2
        rounded-md">
            <div className="w-[50%] h-[50%] bg-[#282429ee] flex flex-col justify-center-safe items-center-safe
            font-bold text-2xl rounded-sm gap-4">
                <p>
                    <span>!!! </span> WELCOME TO HOME PAGE <span> !!!</span>
                </p>
                <Link href={'/recipes'} className="rounded-md px-12 py-6 text-shadow-white border-2 bg-[#82e928cc]">
                    GO TO RECIPES
                </Link>
            </div>
        </section>
    );
};