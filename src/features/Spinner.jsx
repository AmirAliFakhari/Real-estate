import { Triangle } from "react-loader-spinner";

function Spinner() {
  return (
    <Triangle
      visible={true}
      height="80"
      width="80"
      color="#a94d4d"
      ariaLabel="triangle-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
  );
}

export default Spinner;
