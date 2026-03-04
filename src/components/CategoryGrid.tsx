// import Image from "next/image";
// import imagesLeft from "../../public/images/leftVerticalCard.png";
// import imagesMiddle from "../../public/images/leftVerticalCard.png";

// const categories = [
//   { id: 1, title: "Tote Bags", img: imagesLeft, size: "tall" },
//   {
//     id: 2,
//     title: "Crossbody",
//     img: "https://i.pinimg.com/736x/5f/96/8b/5f968b2c6a9530a846715e7425bbff52.jpg?auto=compress&cs=tinysrgb&w=1600",
//     size: "tall",
//   },
//   {
//     id: 3,
//     title: "Stylish Winter T-Shirt",
//     subtitle: "Woman Collection",
//     size: "wide",
//   },
//   {
//     id: 4,
//     title: "Stylish Winter Shirt",
//     subtitle: "Man Collection",
//     size: "wide",
//   },
// ];

// export default function CategoryGrid() {
//   return (
//     <section className="px-10 py-20 max-w-[1440px] mx-auto">
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         {/* Left Vertical Card */}
//         <div className="relative aspect-[3/4] bg-zinc-100 rounded-[2rem] overflow-hidden group">
//           <Image
//             src={imagesLeft}
//             alt="Left Vertical Card"
//             className="w-full h-full object-cover"
//           />
//           <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
//             <button className="bg-white text-black px-8 py-3 text-xs font-bold uppercase rounded-sm shadow-xl hover:bg-black hover:text-white transition-all">
//               Explore Now
//             </button>
//           </div>
//         </div>

//         {/* Middle Vertical Card */}
//         <div className="relative aspect-[3/4] bg-zinc-100 rounded-[2rem] overflow-hidden">
//           <Image
//             src={imagesMiddle}
//             alt="Middle Vertical Card"
//             className="w-full h-full object-cover"
//             // width={100}
//             // height={100}
//           />
//           <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
//             <button className="bg-white text-black px-8 py-3 text-xs font-bold uppercase rounded-sm shadow-xl">
//               Explore Now
//             </button>
//           </div>
//         </div>

//         {/* Right Side: Two Horizontal Cards */}
//         <div className="flex flex-col gap-6">
//           <div className="h-full bg-zinc-50 rounded-[2rem] p-10 flex flex-col justify-between">
//             <div>
//               <p className="text-[10px] uppercase font-bold text-gray-400 mb-2">
//                 Woman Collection
//               </p>
//               <h3 className="text-2xl font-bold leading-tight max-w-[150px]">
//                 Stylish Winter T-Shirt for Woman
//               </h3>
//             </div>
//             <button className="w-fit border border-zinc-300 px-6 py-2 text-[10px] font-bold uppercase">
//               Check Now
//             </button>
//           </div>
//           <div className="h-full bg-zinc-50 rounded-[2rem] p-10 flex flex-col justify-between">
//             <div>
//               <p className="text-[10px] uppercase font-bold text-gray-400 mb-2">
//                 Man Collection
//               </p>
//               <h3 className="text-2xl font-bold leading-tight max-w-[150px]">
//                 Stylish Winter Shirt for Man
//               </h3>
//             </div>
//             <button className="w-fit border border-zinc-300 px-6 py-2 text-[10px] font-bold uppercase">
//               Check Now
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import Image from "next/image";
import { Hammer, Scissors, MapPin } from "lucide-react"; // Examples of craft icons
import lagosImage from "../../public/images/lagosImage.png";
import lagosImage2 from "../../public/images/lagosImage2.png";
import lagosImage4 from "../../public/images/lagosImage3.png";

export default function CategoryGrid() {
  return (
    <section className="px-6 py-24 max-w-[1440px] mx-auto bg-white">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
        {/* SECTION 1: THE MASTERPIECE (Tall, Editorial) */}
        <div className="md:col-span-5 relative group">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-zinc-100">
            <Image
              src={lagosImage2}
              alt="Artisanal Tote"
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
            />
            {/* Editorial Overlay */}
            <div className="absolute top-8 left-8 text-white mix-blend-difference">
              <span className="text-xs tracking-[0.3em] font-light">
                COLLECTION 01
              </span>
              <h3 className="text-4xl font-display mt-2 italic">The Tote</h3>
            </div>
          </div>
          <div className="mt-6 flex justify-between items-start">
            <div className="max-w-[200px]">
              <p className="text-[10px] uppercase tracking-widest text-zinc-400 mb-2">
                Materials
              </p>
              <p className="text-sm font-medium leading-relaxed">
                Full-grain vegetable tanned leather from local tanneries.
              </p>
            </div>
            <Hammer size={20} className="text-zinc-300" />
          </div>
        </div>

        {/* SECTION 2: THE PROCESS & THE SECOND PIECE */}
        <div className="md:col-span-7 flex flex-col gap-12">
          {/* Top Row: Focus on Detail */}
          <div className="grid grid-cols-2 gap-8">
            <div className="flex flex-col justify-center border-l border-zinc-100 pl-8">
              <h4 className="text-5xl font-black text-zinc-100 mb-4 select-none">
                100%
              </h4>
              <p className="text-xs uppercase tracking-[0.2em] font-bold text-zinc-800 mb-2">
                Hand-Stitched
              </p>
              <p className="text-xs text-zinc-500 leading-loose">
                Every single saddle stitch is performed by hand, ensuring a bond
                that outlasts machine sewing.
              </p>
            </div>
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-zinc-50">
              <Image
                src={lagosImage4}
                alt="Detail view"
                unoptimized={true}
                fill
                className="object-cover opacity-90"
              />
            </div>
          </div>

          {/* Bottom Row: Large Horizontal Fashion Shot */}
          <div className="relative h-[400px] rounded-[3rem] overflow-hidden bg-zinc-900 group">
            <Image
              src={lagosImage}
              alt="Fashion context"
              fill
              className="object-cover opacity-60 group-hover:scale-110 transition-transform duration-[2s]"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-10">
              <MapPin className="text-white mb-4 animate-bounce" size={24} />
              <h3 className="text-white text-3xl font-light tracking-widest uppercase mb-4">
                Lagos <span className="font-black italic">to the</span> World
              </h3>
              <div className="h-[1px] w-24 bg-white/30 mb-4" />
              <p className="text-white/70 text-[10px] uppercase tracking-[0.4em] max-w-xs leading-loose">
                Global luxury rooted in traditional craftsmanship.
              </p>
            </div>

            {/* The Floating Faded Name Shadow you like */}
            <span className="absolute bottom-4 right-8 text-white/10 text-6xl font-black pointer-events-none select-none">
              CRAFT_BYIBK
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
