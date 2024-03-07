import StepperStructure from "./StepperStructure";

function RegisterHome() {
  return (
    <div className="flex h-screen rounded-xl bg-gray-100 sm:rounded-l-3xl ">
      <div className="hidden h-screen sm:flex">
        <img
          src="src\assets\imgs\register.svg"
          className="max-h-svh w-60 rounded-l-3xl sm:flex sm:object-cover"
        />
      </div>
      <div className="flex flex-grow items-center justify-center">
        <StepperStructure />
      </div>
    </div>
  );
}

export default RegisterHome;
