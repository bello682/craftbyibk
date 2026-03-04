import { Star } from "lucide-react";

export default function Marquee() {
  return (
    <div className="bg-black py-4 overflow-hidden border-y border-black">
      <div className="flex whitespace-nowrap animate-marquee items-center gap-8">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="flex items-center gap-8">
            <span className="text-white text-xl font-black uppercase tracking-tighter">
              Craft_ByIbk Fashion
            </span>
            <Star className="text-white fill-white" size={16} />
          </div>
        ))}
      </div>
    </div>
  );
}
