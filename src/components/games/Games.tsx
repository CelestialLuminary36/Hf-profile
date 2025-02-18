import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";
import Genshin_Impact from "@/assets/images/games/Genshin_Impact.png";
import Honkai_Star_Rail from "@/assets/images/games/Honkai_Star_Rail.png";
import Zenless_Zone_Zero from "@/assets/images/games/Zenless_Zone_Zero.png";
import League_of_Legends from "@/assets/images/games/League_of_Legends.png";
import PUBG from "@/assets/svg/games/PUBG.svg";
import Counter_Strike_Global_Offensive from "@/assets/images/games/Counter_Strike_Global_Offensive.png";
import Red_Dead_Redemption_2 from "@/assets/images/games/Red_Dead_Redemption_2.jpg";
import NARAKA_BLADEPOINT from "@/assets/images/games/NARAKA_BLADEPOINT.webp";
import Overwatch from "@/assets/svg/games/Overwatch.svg";
import Crossfire from "@/assets/images/games/Crossfire.png"
import League_of_Legends_Wild_Rift from "@/assets/images/games/League_of_Legends_Wild_Rift.png"
import Naruto_Mobile from "@/assets/images/games/Naruto_Mobile.jpg"

const game_2d_reviews = [
  {
    name: "Genshin Impact",
    img: Genshin_Impact,
  },
  {
    name: "Honkai: Star Rail",
    img: Honkai_Star_Rail,
  },
  {
    name: "Zenless Zone Zero",
    img: Zenless_Zone_Zero,
  },
];

const game_online_reviews = [
  {
    name: "League of Legends",
    img: League_of_Legends,
  },
  {
    name: "PUBG",
    img: PUBG,
  },
  {
    name: "Counter-Strike: Global Offensive",
    img: Counter_Strike_Global_Offensive,
  },
];

const game_other_reviews = [
  {
    name: "Red Dead Redemption 2",
    img: Red_Dead_Redemption_2,
  },
  {
    name: "NARAKA:BLADEPOINT",
    img: NARAKA_BLADEPOINT,
  },
  {
    name: "Overwatch",
    img: Overwatch,
  },
];

const game_mixed_reviews = [
  {
    name: "Crossfire",
    img: Crossfire,
  },
  {
    name: "League of Legends: Wild Rift",
    img: League_of_Legends_Wild_Rift,
  },
  {
    name: "Naruto Mobile",
    img: Naruto_Mobile,
  },
];

const firstRow = game_2d_reviews.slice(0, game_2d_reviews.length);
const secondRow = game_online_reviews.slice(0, game_online_reviews.length);
const thirdRow = game_other_reviews.slice(0, game_other_reviews.length);
const fourthRow = game_mixed_reviews.slice(0, game_mixed_reviews.length);

const ReviewCard = ({ img, name }: { img: string; name: string }) => {
  return (
    <figure
      className={cn(
        "relative h-full w-48 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-200/[.1] dark:bg-gray-200/[.10] dark:hover:bg-gray-200/[.15]"
      )}
    >
      <img
        className="w-full h-48 object-cover rounded-lg"
        alt={name}
        src={img}
      />
      <figcaption className="mt-2 text-center text-sm font-medium dark:text-white">
        {name}
      </figcaption>
    </figure>
  );
};

export function GameMarquee3D() {
  return (
    <div className="w-2/4 mx-auto bg-white p-20 rounded-2xl shadow-lg mt-40 flex flex-col items-center">
      <div className="bg-black rounded-3xl shadow-lg mb-16 p-2">
        <p className="text-sm font-bold text-center text-white">我玩过的</p>
      </div>
      <div className="relative flex h-[500px] w-full flex-row items-center justify-center gap-4 overflow-hidden [perspective:300px]">
        <div
          className="flex flex-row items-center gap-4"
          style={{
            transform:
              "translateX(-100px) translateY(0px) translateZ(-100px) rotateX(20deg) rotateY(-10deg) rotateZ(20deg)",
          }}
        >
          <Marquee pauseOnHover vertical className="[--duration:20s]">
            {firstRow.map((review) => (
              <ReviewCard key={review.name} {...review} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:20s]" vertical>
            {secondRow.map((review) => (
              <ReviewCard key={review.name} {...review} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:20s]" vertical>
            {thirdRow.map((review) => (
              <ReviewCard key={review.name} {...review} />
            ))}
          </Marquee>
          <Marquee pauseOnHover className="[--duration:20s]" vertical>
            {fourthRow.map((review) => (
              <ReviewCard key={review.name} {...review} />
            ))}
          </Marquee>
        </div>

        <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-background"></div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
      </div>
    </div>
  );
}
