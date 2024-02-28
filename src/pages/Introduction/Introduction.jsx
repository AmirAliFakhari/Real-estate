import IntroCart from "../../components/IntroCart";
import useIntroduction from "../Introduction/useIntroduction";

function Introduction() {
  const { data } = useIntroduction();
  console.log(data);

  return (
    <div>
      <p>سقفینو چطور به خانه‌دار شدن شما کمک می‌کند </p>
      <div className="">
        <IntroCart />
      </div>
    </div>
  );
}

export default Introduction;
