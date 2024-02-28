import IntroCart from "../../components/IntroCart";
import useIntroduction from "../Introduction/useIntroduction";
import Spinner from "../../features/Spinner";

function Introduction() {
  const { data, isLoading } = useIntroduction();
  // console.log(data.map(res => ));
  // data.map((res) => console.log(res));

  if (isLoading || !data) {
    return <Spinner />;
  }

  return (
    <div className="flex flex-col gap-7 mt-24">
      <p>سقفینو چطور به خانه‌دار شدن شما کمک می‌کند </p>
      <div className="flex flex-wrap flex-col md:flex-row gap-5  justify-center items-center sm:justify-evenly">
        {data.map((res) => (
          <IntroCart
            buttonText={res.buttonText}
            img={res.img}
            text={res.text}
            title={res.title}
            key={res.title}
          />
        ))}
      </div>
    </div>
  );
}

export default Introduction;
