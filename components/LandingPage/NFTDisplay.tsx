const NFTDisplay = () => {
  return (
    <div className="bg-slate-900 p-1">
      <div className="aspect-square relative bg-[url('https://arweave.net/ZBTD_T0pnhUsT6TyZLrhct998gZJa2LjJQyb_B1-dEo')] bg-cover bg-center rounded-lg overflow-hidden mb-4">
        <div className="absolute top-4 left-4 text-white text-sm font-medium">
          Maravilla Gallery
        </div>
        <div className="absolute top-12 left-4 bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
          Limited Edition
        </div>
      </div>
      <h3 className="text-md font-bold text-white mb-2 px-1">Maravilla Gallery</h3>
      <p className="text-slate-400 text-xs mb-4 px-1">
        {`The Maravilla Gallery Pass unlocks early access to the album and a growing collection of visuals, artworks, and process media that document its evolution.

Each piece in the gallery shows part of how the world and music came together, from early concepts to finished works.

Holders gain access to the inventory page, where the full album, videos, downloads, and interactive experiences will live as the project unfolds leading up to release.`}
      </p>
    </div>
  )
}

export default NFTDisplay
