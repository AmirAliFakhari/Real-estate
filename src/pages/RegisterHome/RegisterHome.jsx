import { Input } from "postcss";
import ButtonDir from "../../components/ButtonDir";
import Stepper from "awesome-react-stepper";
import InputForm from "../../components/Input";

/// make a componetn for inputs and use react hook form

function RegiterHome() {
  return (
    <div className="flex h-screen  ">
      <div className="hidden h-screen    sm:flex">
        <img
          src="src\assets\imgs\register.svg"
          className=" max-h-svh w-60 sm:flex sm:object-cover  "
          alt=""
        />
      </div>
      <div className="flex flex-grow items-center justify-center    ">
        <Stepper
          strokeColor="red"
          fillStroke="#51515153"
          activeColor="#ff0d00"
          stroke={2}
          barWidth="150px"
          contentBoxClassName="stepper__contect"
          progressBarClassName="stepper__bar"
          btnPos="center"
          backBtn={<ButtonDir title="back" />}
          continueBtn={<ButtonDir title="next" />}
          submitBtn={<ButtonDir title="submit" />}
        >
          <form className="mx-auto mt-5 max-w-sm  ">
            <div className=" flex w-72 flex-col gap-6 sm:w-96 ">
              <InputForm title="شهر " type="text" textholder="زواره" />
              <InputForm title="منطقه" type="text" textholder="بنجیره" />
              <InputForm title="خیبان اصلی" type="text" textholder="طالقانی" />
              <InputForm title="خیابان فرعی" type="text" textholder="حشمت" />
            </div>
          </form>
          <div>
            <div className=" flex w-72 flex-col gap-6 sm:w-96 ">
              <InputForm title="شهر " type="text" textholder="زواره" />
              <InputForm title="منطقه" type="text" textholder="بنجیره" />
              <InputForm title="خیبان اصلی" type="text" textholder="طالقانی" />
              <InputForm title="خیابان فرعی" type="text" textholder="حشمت" />
            </div>
          </div>
          <div>
            <div className=" flex w-72 flex-col gap-6 sm:w-96 ">
              <InputForm title="شهر " type="text" textholder="زواره" />
              <InputForm title="منطقه" type="text" textholder="بنجیره" />
              <InputForm title="خیبان اصلی" type="text" textholder="طالقانی" />
              <InputForm title="خیابان فرعی" type="text" textholder="حشمت" />
            </div>
          </div>
        </Stepper>
      </div>
    </div>
  );
}

export default RegiterHome;
