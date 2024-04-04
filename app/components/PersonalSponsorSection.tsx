import Link from "next/link";

const PersonalSponsors = [
  {
    name: "大石 貴則 (おおいし)",
    image: "	https://pbs.twimg.com/profile_images/1671084783122907139/ovRsFdyJ_400x400.jpg",
    href: "https://bicstone.me/",
  },
  {
    name: "shige",
    image: "https://avatars.githubusercontent.com/u/844012?v=4",
    href: "https://github.com/shige/",
  },
  {
    name: "onk",
    image: "https://avatars.githubusercontent.com/u/203046?v=4",
    href: "https://github.com/onk",
  },
  {
    name: "yamanoku",
    image: "https://avatars.githubusercontent.com/u/1996642?v=4",
    href: "https://yamanoku.net",
  },
  {
    name: "JJ",
    image: "https://pbs.twimg.com/profile_images/1755180781599956992/PjYZLSja_400x400.png",
    href: "https://0xjj.dev",
  },
  {
    name: "cilly",
    image: "https://avatars.githubusercontent.com/u/16274232?v=4",
    href: "https://twitter.com/cilly_yllic",
  },
  {
    name: "フラクト",
    image: "https://avatars.githubusercontent.com/u/87593133?v=4",
    href: "https://twitter.com/Fract_x",
  },
  {
    name: "tacck",
    image: "https://pbs.twimg.com/profile_images/1571789838097207297/V2aYM6_A_400x400.jpg",
    href: "https://twitter.com/tacck",
  },
  {
    name: "km-tr",
    image: "https://avatars.githubusercontent.com/u/4058100?v=4",
    href: "https://github.com/km-tr",
  },
] as const;

const StaffCard = (props: (typeof PersonalSponsors)[number]) => {
  const { name, image, href } = props;

  return (
    <div className="w-32 pb-8 mx-auto">
      <Link href={href} rel="noopener noreferrer" target="_blank">
        <div className="flex-col">
          <div className="avatar">
            <div className="rounded-full bg-neutral-950">
              <img src={image} alt={name} />
            </div>
          </div>
          <p className="text-center">{name}</p>
        </div>
      </Link>
    </div>
  );
};

export const PersonalSponsorSection = () => {
  return (
    <div className="pb-10 md:pb-40">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-center text-accent lg:text-3xl mb-20 scroll-mt-20">
          個人スポンサー
        </h2>
      </div>
      <div className="mx-auto px-2 w-5/6 md:px-20">
        <div className="grid grid-cols-2 gap-4 mx-auto md:grid-cols-3 lg:grid-cols-5">
          {PersonalSponsors.map((PersonalSponsor) => (
            <StaffCard key={PersonalSponsor.name} {...PersonalSponsor} />
          ))}
        </div>
      </div>
    </div>
  );
};
