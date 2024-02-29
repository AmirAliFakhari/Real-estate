import IntroCart from "./IntroCart";
import useIntroduction from "../Introduction/useIntroduction";
import Spinner from "../../features/Spinner";

function Introduction() {
  const { data, isLoading } = useIntroduction();

  if (isLoading || !data) {
    return <Spinner />;
  }

  return (
    <div className="flex flex-col gap-7 mt-12 ">
      <p className="font-bold text-slate-700 text-center sm:text-xl ms-5 underline underline-offset-8 decoration-red-600">
        سقفینو چطور به خانه‌دار شدن شما کمک می‌کند
      </p>
      <div className="flex flex-wrap flex-col md:flex-row gap-5  justify-center items-center sm:justify-evenly">
        {data.map((res) => (
          <IntroCart
            buttonText={res.buttonText}
            img={res.img}
            text={res.text}
            title={res.title}
            key={res.img}
          />
        ))}
      </div>
    </div>
  );
}

export default Introduction;
