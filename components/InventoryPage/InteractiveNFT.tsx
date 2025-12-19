const InteractiveNFT = () => {
  return (
    <div className="bg-slate-900 rounded-xl p-6">
      <div className="aspect-square relative bg-[url('https://arweave.net/ZBTD_T0pnhUsT6TyZLrhct998gZJa2LjJQyb_B1-dEo')] bg-cover bg-center rounded-lg overflow-hidden mb-4">
        <div className="absolute top-4 left-4 text-white text-sm font-medium">
          Maravilla Gallery
        </div>
        <div className="absolute top-12 left-4 bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
          Limited Edition
        </div>
      </div>
      <h3 className="text-xl font-bold text-white mb-2">Maravilla Gallery</h3>
      <p className="text-slate-400 text-sm mb-4">
        {`The Maravilla Gallery Pass unlocks early access to the album and a growing collection of visuals, artworks, and process media that document its evolution.

Each piece in the gallery shows part of how the world and music came together, from early concepts to finished works.

Holders gain access to the inventory page, where the full album, videos, downloads, and interactive experiences will live as the project unfolds leading up to release.`}
      </p>
      <div className="grid grid-cols-3 gap-4 mb-4">
        <div>
          <p className="text-slate-400 text-xs mb-1">Chain</p>
          <p className="text-white font-bold text-sm">Base</p>
        </div>
        <button
          className="flex items-center gap-2 border border-slate-600 text-white px-3 py-1 rounded hover:border-slate-400 transition-colors"
          onClick={() =>
            window.open(
              'https://opensea.io/item/base/0xeab564ad61777c6d50744a97088da545a0bce8de/9',
              '_blank',
            )
          }
        >
          <svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
          <span className="text-xs">View on OpenSea</span>
        </button>
      </div>
    </div>
  )
}

export default InteractiveNFT
