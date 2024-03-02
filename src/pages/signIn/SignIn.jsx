import MultiStep from "react-multistep";
import ButtonNext from "./ButtonNext";

function SignIn() {
  return (
    <MultiStep activeStep={0} nextButton={<ButtonNext />}>
      <div className="">dsad</div>
      <div className="">dsad</div>
      <div className="">dsad</div>
    </MultiStep>
  );
}

export default SignIn;
