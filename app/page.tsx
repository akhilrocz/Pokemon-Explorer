"use client";

import { useState, useEffect } from "react";

import Image from "next/image";

import axios from "axios";

import Pokemon_favicon from "../public/pokemon_favicon.svg";

import PokemonCard from "./components/PokemonCard";

import type { Pokemon } from "./types/pokemon";

export default function Home() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        setLoading(true);

        const response = await axios.get(
          "https://pokeapi.co/api/v2/pokemon?limit=50",
        );

        setPokemons(response.data.results);
        setError("");
      } catch (error: unknown) {
        console.log("Error fetching pokemons", error);
        setError("Failed to load Pokemons. Please try later");
      } finally {
        setLoading(false);
      }
    };
    fetchPokemons();
  }, []);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedSearch(search);
    }, 300);

    return () => clearTimeout(timerId);
  }, [search]);

  const filteredPokemons = pokemons
    .map((pokemon, index) => ({ ...pokemon, id: index + 1 }))
    .filter((pokemon) =>
      pokemon.name.toLowerCase().includes(debouncedSearch.toLowerCase()),
    );

  return (
    <div className="min-h-screen p-8">
      <div className="flex items-center justify-center gap-3 mb-10">
        <Image
          src={Pokemon_favicon}
          className="w-10 h-10 md:w-12 md:h-12"
          alt="pokemon favicon"
        />
        <h1 className="font-bold text-2xl md:text-4xl text-[#FFCB05] text-center">
          Pokemon Explorer
        </h1>
      </div>
      <div className="max-w-lg mx-auto mb-10">
        <input
          type="text"
          placeholder="Search your favorite pokemon..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-blue-500 focus-outline-none focus:ring-1 focus:border-blue-500 rounded-md py-3 px-6 bg-transparent w-full"
        />
      </div>

      {loading && <p className="text-slate-400 text-center">Loading...</p>}
      {error && <p className="text-red-400 text-center">{error}</p>}

      {!loading && !error && (
        <>
          {filteredPokemons.length === 0 ? (
            <p className="text-center text-xl text-slate-400">
              No Pokemons Found 🥺
            </p>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              {filteredPokemons.map((pokemon) => {
                return (
                  <PokemonCard
                    key={pokemon.name}
                    id={pokemon.id}
                    name={pokemon.name}
                  />
                );
              })}
            </div>
          )}
        </>
      )}
    </div>
  );
}
