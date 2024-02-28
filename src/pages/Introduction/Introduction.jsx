import IntroCart from "../../components/IntroCart";
import useIntroduction from "../Introduction/useIntroduction";

function Introduction() {
  const { data, isLoading } = useIntroduction();
  console.log(data);

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div>
      <p>سقفینو چطور به خانه‌دار شدن شما کمک می‌کند </p>
      <div className="">{data.map((item) => console.log(item))}</div>
    </div>
  );
}

export default Introduction;
