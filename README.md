# Pokemon Explorer

Pokemon Explorer is a Next.js Application it helps with exploring various kinds of Pokemon available from PokeAPI (https://pokeapi.co/) containing Pokemon Details.

[![Next.js Version](https://shields.io)](https://nextjs.org/)
[![Deployment](https://vercel.app)](https://vercel.com)

---

## Features

- **App Router:** Built using Next.js App Router (or Pages Router).
- **Data Fetching:** Leveraging Server Components and `fetch` with caching.
- **Styling:** Styled using Tailwind CSS / CSS Modules / Styled Components.

## Tech Stack

| **Next.js** (https://nextjs.org/)
| **Styling** (https://tailwindcss.com/)
| **Axios** | (https://axios.rest/)
| **PokeAPI** | (https://pokeapi.co/)
| **Deployment** | (https://vercel.com/) |

## Getting Started

Follow these steps to set up the project locally.

### Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org) (v18.x or higher recommended)
- npm, yarn, pnpm, or bun

### Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/akhilrocz/Pokemon-Explorer.git
   cd pokemon-explorer
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or yarn install / pnpm install / bun install
   ```

### Running Locally

Start the development server:

```bash
npm run dev
# or yarn dev / pnpm dev / bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Production Build

To build the application for production deployment:

```bash
npm run build
npm run start
```

## Project Structure (Optional)

```text
├── app/               # App Router pages and layouts
├── components/        # Reusable UI components
  └── PokemonCard.tsx  # Reusable Pokemon Cards
├── pokemon/[id]/
  └── page.tsx # Pokémon detail page
├── types/
  └── pokemon.ts # Shared TypeScript types
├── public/            # Static assets like images and fonts
```