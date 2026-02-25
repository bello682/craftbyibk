import Image from "next/image";

const categories = [
  { id: 1, title: "Tote Bags", img: "/images/cat1.jpg", size: "tall" },
  { id: 2, title: "Crossbody", img: "/images/cat2.jpg", size: "tall" },
  {
    id: 3,
    title: "Stylish Winter T-Shirt",
    subtitle: "Woman Collection",
    size: "wide",
  },
  {
    id: 4,
    title: "Stylish Winter Shirt",
    subtitle: "Man Collection",
    size: "wide",
  },
];

export default function CategoryGrid() {
  return (
    <section className="px-10 py-20 max-w-[1440px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Vertical Card */}
        <div className="relative aspect-[3/4] bg-zinc-100 rounded-[2rem] overflow-hidden group">
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
            <button className="bg-white text-black px-8 py-3 text-xs font-bold uppercase rounded-sm shadow-xl hover:bg-black hover:text-white transition-all">
              Explore Now
            </button>
          </div>
        </div>

        {/* Middle Vertical Card */}
        <div className="relative aspect-[3/4] bg-zinc-100 rounded-[2rem] overflow-hidden">
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
            <button className="bg-white text-black px-8 py-3 text-xs font-bold uppercase rounded-sm shadow-xl">
              Explore Now
            </button>
          </div>
        </div>

        {/* Right Side: Two Horizontal Cards */}
        <div className="flex flex-col gap-6">
          <div className="h-full bg-zinc-50 rounded-[2rem] p-10 flex flex-col justify-between">
            <div>
              <p className="text-[10px] uppercase font-bold text-gray-400 mb-2">
                Woman Collection
              </p>
              <h3 className="text-2xl font-bold leading-tight max-w-[150px]">
                Stylish Winter T-Shirt for Woman
              </h3>
            </div>
            <button className="w-fit border border-zinc-300 px-6 py-2 text-[10px] font-bold uppercase">
              Check Now
            </button>
          </div>
          <div className="h-full bg-zinc-50 rounded-[2rem] p-10 flex flex-col justify-between">
            <div>
              <p className="text-[10px] uppercase font-bold text-gray-400 mb-2">
                Man Collection
              </p>
              <h3 className="text-2xl font-bold leading-tight max-w-[150px]">
                Stylish Winter Shirt for Man
              </h3>
            </div>
            <button className="w-fit border border-zinc-300 px-6 py-2 text-[10px] font-bold uppercase">
              Check Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
