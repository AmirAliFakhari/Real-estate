import Stepper from "awesome-react-stepper";
import ButtonDir from "../../components/ButtonDir";
import InputForm from "../../components/InputFom";
import { useForm } from "react-hook-form";
import { Navigate, useNavigate } from "react-router-dom";

function StepperStructure() {
  const navigate = useNavigate();
  //   let [form1, setform1] = useState(0);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("DATA", data);
    navigate("/");
  };
  return <div className="">s</div>;

  // return (
  //   <Stepper
  //     strokeColor="red"
  //     fillStroke="#51515153"
  //     activeColor="#ff0d00"
  //     continueBtn={<ButtonDir title="next" />}
  //     //   onContinue={handleSubmit(onSubmit)}
  //     onSubmit={handleSubmit(onSubmit)}
  //     submitBtn={<ButtonDir title="submit" />}
  //     backBtn={<ButtonDir title="back" />}
  //     stroke={2}
  //     barWidth="150px"
  //     contentBoxClassName="stepper__contect"
  //     progressBarClassName="stepper__bar"
  //     btnPos="center"
  //   >
  //     <form onSubmit={handleSubmit(onSubmit)} className="mx-auto mt-5 max-w-sm">
  //       <div className="flex w-72 flex-col  sm:w-96">
  //         <div className="d-flex mb-6 ">
  //           {inputs1.map((res) => (
  //             <>
  //               <InputForm
  //                 title={res.title}
  //                 type={res.type}
  //                 textholder={res.textholder}
  //                 name={res.name}
  //                 register={register(res.name)}
  //               />
  //               {errors[res.name] && (
  //                 <span className="text-red-500">{res.errorText}</span>
  //               )}
  //             </>
  //           ))}
  //         </div>
  //       </div>
  //     </form>
  //     <form onSubmit={handleSubmit(onSubmit)} className="mx-auto mt-5 max-w-sm">
  //       <div className="flex w-72 flex-col  sm:w-96">
  //         <div className="d-flex mb-6 ">
  //           {inputs2.map((res) => (
  //             <>
  //               <InputForm
  //                 title={res.title}
  //                 type={res.type}
  //                 textholder={res.textholder}
  //                 name={res.name}
  //                 register={register(res.name)}
  //               />
  //               {errors[res.name] && (
  //                 <span className="text-red-500">{res.errorText}</span>
  //               )}
  //             </>
  //           ))}
  //         </div>
  //       </div>
  //     </form>
  //     <form onSubmit={handleSubmit(onSubmit)} className="mx-auto mt-5 max-w-sm">
  //       <div className="flex w-72 flex-col  sm:w-96">
  //         <div className="d-flex mb-6 ">
  //           {inputs2.map((res) => (
  //             <>
  //               <InputForm
  //                 title={res.title}
  //                 type={res.type}
  //                 textholder={res.textholder}
  //                 name={res.name}
  //                 register={register(res.name)}
  //               />
  //               {errors[res.name] && (
  //                 <span className="text-red-500">{res.errorText}</span>
  //               )}
  //             </>
  //           ))}
  //         </div>
  //       </div>
  //     </form>
  //   </Stepper>
  // );
}

export default StepperStructure;
