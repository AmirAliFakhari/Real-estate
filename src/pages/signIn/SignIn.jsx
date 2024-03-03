import ButtonDir from "./ButtonDir";
import Stepper from "awesome-react-stepper";

function SignIn() {
  return (
    <Stepper
      strokeColor="none"
      fillStroke="#1a6ca7"
      stroke={2}
      barWidth="150px"
      contentBoxClassName="salam"
      btnPos="center"
      activeColor="#ff0d00"
      backBtn={<ButtonDir title="back" />}
      continueBtn={<ButtonDir title="next" />}
      submitBtn={<ButtonDir title="submit" />}
    >
      <div>
        <h1>Welcome to Awesome React Stepper</h1>
      </div>
      <div>
        <h1>Add your content here!!!</h1>
      </div>
      <div>
        <h1>Thank you for using Awesome React Stepper</h1>
      </div>
    </Stepper>
  );
}

export default SignIn;
