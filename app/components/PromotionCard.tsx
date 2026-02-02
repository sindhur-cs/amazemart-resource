import { PromotionCard as PromotionCardType } from "@/lib/types";
import Image from "next/image";

interface PromotionCardProps {
  promotion: PromotionCardType;
}

export default function PromotionCard({ promotion }: PromotionCardProps) {
  const { promotion_card } = promotion;
  
  return (
    <article className="group relative w-full aspect-[528/458] rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer hover:-translate-y-0.5 bg-gray-50">
      {promotion_card.image?.url ? (
        <Image
          src={`${promotion_card.image.url}?environment=${process.env.NEXT_PUBLIC_CONTENTSTACK_ENVIRONMENT}`}
          alt={promotion_card.title}
          fill
          className="object-contain group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      ) : (
        <div className="w-full h-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center">
          <span className="text-white text-xl font-bold">{promotion_card.title}</span>
        </div>
      )}
    </article>
  );
}
