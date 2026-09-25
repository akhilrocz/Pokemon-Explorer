import Link from "next/link";

import Image from "next/image";

interface PokemonCardProps {
  id: number;
  name: string;
}
const PokemonCard = ({ id, name }: PokemonCardProps) => {
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

  return (
    <Link
      href={`/pokemon/${id}`}
      className="bg-slate-800 border border-[#3B4CCA] transition-all duration-200 hover:border-yellow-400 hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/20 overflow-hidden rounded-md"
    >
      <div className="aspect-square relative">
        <Image
          alt={name}
          width={400}
          height={400}
          src={imageUrl}
          className="w-full h-full object-contain scale-90"
        />
      </div>
      <div className="p-4 md:p-8">
        <p className="text-blue-500 text-sm md:text-lg md:font-semibold font-poppins">
          Pokemon Id: #{id}
        </p>
        <p className="font-montserrat font-bold text-xl md:text-2xl mb-3">
          {name.charAt(0).toUpperCase() + name.slice(1)}
        </p>
      </div>
    </Link>
  );
};

export default PokemonCard;
