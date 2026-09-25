import Image from "next/image";

import Link from "next/link";

import { ArrowLeft } from "lucide-react";

import type {Pokemon} from "../../types/pokemon"

async function getPokemon(id: string): Promise<Pokemon> {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
    cache: "no-store",
  });

  if (!response.ok) throw new Error("Error fetching pokemon details");

  return response.json();
}

export default async function PokemonDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const pokemon = await getPokemon(id);

  return (
    <main className="min-h-screen p-6 md:p-10 font-poppins text-white flex flex-col items-center">
      <Link
        href="/"
        className="mb-8 text-blue-200 hover:text-yellow-400 transition-colors hover:underline"
      >
        <span className="flex items-center gap-3">
          <ArrowLeft size={20} /> Back to Explorer
        </span>
      </Link>

      <div className="w-full max-w-2xl bg-slate-800 border border-[#3B4CCA] rounded-xl p-6 md:p-10 flex flex-col items-center">
        <p className="text-blue-400 font-semibold"># {pokemon.id}</p>
        <h2 className="text-3xl sm:text-4xl font-bold mt-1 capitalize">{pokemon.name}</h2>

        <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56">
          <Image
            src={pokemon.sprites.other["official-artwork"].front_shiny}
            alt={pokemon.name}
            fill
            className="object-contain"
          />
        </div>

        <div className="flex gap-2 mt-4">
          {pokemon.types.map((item) => {
            return (
              <span
                className="bg-slate-400 px-4 py-1.5 text-white p-3 text-sm font-bold rounded-full"
                key={item.type.name}
              >
                {item.type.name}
              </span>
            );
          })}
        </div>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center w-full border-t border-slate-500 pt-4">
          <div>
            <p className="text-slate-400 text-sm">Height</p>
            <p className="text-lg font-semibold">
              Height: {pokemon.height / 10} m
            </p>
          </div>

          <div>
            <p className="text-slate-400 text-sm">Weight</p>
            <p className="text-lg font-semibold">
              Weight: {pokemon.weight / 10} kg
            </p>
          </div>

          <div>
            <p className="text-slate-400 text-sm">Base Experience</p>
            <p className="text-lg font-semibold">
              Base Exp: {pokemon.base_experience}
            </p>
          </div>
        </div>

        <section className="mt-8 w-full">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-yellow-400">Abilities</h2>
          <ul className="flex flex-wrap gap-2">
            {pokemon.abilities.map((item) => {
              return (
                <li
                  className="capitalize rounded-md bg-slate-400 text-sm px-3 py-1"
                  key={item.ability.name}
                >
                  {item.ability.name.replace("-", " ")}
                </li>
              );
            })}
          </ul>
        </section>

        <section className="mt-8 w-full">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-yellow-400">Stats</h2>
          {pokemon.stats.map((item) => {
            const percentage = Math.min((item.base_stat / 255) * 100, 100);
            return (
              <div key={item.stat.name} className="mb-3">
                <div className="flex justify-between">
                  <p className="capitalize text-slate-300">{item.stat.name}</p>
                  <p className="capitalize font-semibold text-slate-100">
                    {item.base_stat}
                  </p>
                </div>

                <div className="w-full bg-slate-700 h-2.5 rounded-full overflow-hidden">
                  <div
                    style={{ width: `${percentage}%` }}
                    className="bg-linear-to-r from-blue-500 to-yellow-400 h-full transition-all rounded-full"
                  ></div>
                </div>
              </div>
            );
          })}
        </section>

        <div className="w-full mt-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-yellow-400">Moves</h2>
          <div className="flex flex-wrap gap-2">
            {pokemon.moves.slice(0, 3).map((item) => {
              return (
                <span
                  className="bg-slate-400 capitalize px-4 py-1.5 text-white p-3 text-sm font-bold rounded-full"
                  key={item.move.name}
                >
                  {item.move.name.replace("-", " ")}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
