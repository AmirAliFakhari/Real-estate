import AboutCart from "./AboutCart";

const TextData = [
  {
    text: "امکان خرید و اجاره ملک در اکثر نقاط کشور",
    img: "https://ecaeztmdfrcwezajiapg.supabase.co/storage/v1/object/public/aboutIcons/about2/aboutsection1.svg",
  },
  {
    text: "مقایسه و بررسی صدها ملک براحتی و در کمترین زمان ",
    img: "https://ecaeztmdfrcwezajiapg.supabase.co/storage/v1/object/public/aboutIcons/about2/aboutsection1.svg",
  },
  {
    text: "ارتباط آسان با برترین املاک و مشاورین کشور",
    img: "https://ecaeztmdfrcwezajiapg.supabase.co/storage/v1/object/public/aboutIcons/about2/aboutsection3.svg",
  },
];

function About() {
  return (
    <div className="mt-10 flex flex-col gap-2  text-center text-xl font-semibold text-gray-700 ">
      <div className="flex flex-col gap-2  ">
        <p className="underline decoration-red-600 underline-offset-8">
          همه به شما مشاوره می‌دهند!
        </p>
        <span className="text-base">
          اما در سقفینو مشاوران املاک کِنار شما می‌مانند
        </span>
      </div>
      <div className="mt-10 flex flex-wrap justify-center gap-16">
        {TextData.map((res) => (
          <AboutCart text={res.text} img={res.img} key={res.text} />
        ))}
      </div>
    </div>
  );
}

export default About;
