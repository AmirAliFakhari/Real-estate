import ButtonDir from "./ButtonDir";
import Stepper from "awesome-react-stepper";

/// make a componetn for inputs and use react hook form

function SignIn() {
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
          backBtn={<ButtonDir title="b  ack" />}
          continueBtn={<ButtonDir title="next" />}
          submitBtn={<ButtonDir title="submit" />}
        >
          <form className="mx-auto mt-5 max-w-sm ">
            <div className=" flex flex-col gap-6  ">
              <div className="mb-5">
                <label
                  for="email"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  شهر
                </label>
                <input
                  type="email"
                  id="email"
                  className="block  w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  placeholder="name@flowbite.com"
                  required
                />
              </div>
              <div className="mb-5">
                <label
                  for="email"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  منطقه
                </label>
                <input
                  type="email"
                  id="email"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  placeholder="name@flowbite.com"
                  required
                />
              </div>
            </div>
            <div className="flex flex-col gap-6  ">
              <div className="mb-5">
                <label
                  for="email"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  خيابان اصلي
                </label>
                <input
                  type="email"
                  id="email"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  placeholder="name@flowbite.com"
                  required
                />
              </div>
              <div className="mb-5">
                <label
                  for="email"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  خيابان فرعي
                </label>
                <input
                  type="email"
                  id="email"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  placeholder="name@flowbite.com"
                  required
                />
              </div>
            </div>
          </form>
          <div>
            <h1>Add your content here!!!</h1>
          </div>
          <div>
            <h1>Thank you for using Awesome React Stepper</h1>
          </div>
        </Stepper>
      </div>
    </div>
  );
}

export default SignIn;
