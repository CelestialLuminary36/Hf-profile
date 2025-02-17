import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";
import onePiece from "@/assets/images/onePiece.jpg";
import naruto from "@/assets/images/naruto.jpg";
import bleach from "@/assets/images/bleach.jpg";
import whiteSnake from "@/assets/images/whiteSnake.jpg";
import nazha from "@/assets/images/nazha.jpg";
import fish from "@/assets/images/fish.jpg";
import outCast from "@/assets/images/outCast.jpg";
import degenerate from "@/assets/images/degenerate.jpg";

const reviews = [
  {
    name: "白蛇：缘起",
    img: whiteSnake,
  },
  {
    name: "哪吒之魔童闹海",
    img: nazha,
  },
  {
    name: "大鱼海棠",
    img: fish,
  },
  {
    name: "One Piece",
    img: onePiece,
  },
  {
    name: "Naruto",
    img: naruto,
  },
  {
    name: "Bleach",
    img: bleach,
  },
  {
    name: "一人之下",
    img: outCast,
  },
  {
    name: "画江湖之不良人",
    img: degenerate,
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img, name }: { img: string; name: string }) => {
  return (
    <figure
      className={cn(
        "relative h-full w-72 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <img
        className="w-full h-32 object-cover rounded-lg"
        alt={name}
        src={img}
      />
      <figcaption className="mt-2 text-center text-sm font-medium dark:text-white">
        {name}
      </figcaption>
    </figure>
  );
};

export function FilmTelevisionMarquee() {
    return (
      <div className="w-3/5 mx-auto flex flex-col items-center justify-center bg-white p-10 rounded-2xl shadow-lg mt-40">
        {/* "我看过的影视" 标题 */}
        <div className="bg-black rounded-3xl shadow-lg mb-8 p-2">
        <p className="text- font-bold text-center text-white">我看过的</p>
        </div>

  
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          <Marquee pauseOnHover className="[--duration:20s]">
            {firstRow.map((review) => (
              <ReviewCard key={review.name} {...review} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:20s]">
            {secondRow.map((review) => (
              <ReviewCard key={review.name} {...review} />
            ))}
          </Marquee>
        </div>
  
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
      </div>
    );
  }
  
