import RegisterImg from "../../assets/images/register-form-img.jpg";
import { Button, FormInput } from "../../components";
import BlueCircle from "../../assets/images/blue-ellipse.png";
import YellowCircle from "../../assets/images/yellow-ellipse.png";

const RegisterForm = () => {
  return (
    <section
      id="register-form"
      className="w-full min-h-screen h-full md:px-[5rem] px-7 py-[5rem] grid place-items-center"
    >
      <div className="flex lg:flex-row flex-col-reverse w-full max-w-[1400px] h-full 2xl:max-h-[70vh] gap-[4rem] justify-center items-start relative">
        <form className="flex flex-col justify-between 2xl:w-[30rem] xl:w-2/5 w-full gap-8 h-full z-10">
          <header className="flex flex-col justify-center items-center gap-1 text-center">
            <h1 className="text-4xl font-bold">Register Your Institute</h1>
            <p>Haven’t your Instititute is registered with us yet?</p>
          </header>
          <FormInput label={"Institution Name"} />
          <FormInput label={"Contact Person"} />
          <FormInput label={"Contact Email"} />
          <FormInput label={"Contact Phone Number"} />
          <Button text="Send Request" width={"full"} />
        </form>
        <img
          src={RegisterImg}
          alt="registerImg"
          className="2xl:w-[30rem] xl:w-2/5 w-full h-full object-cover rounded-[2rem] rounded-br-[5rem] z-10"
        />

        <img
          src={YellowCircle}
          alt="blue-circle"
          className="absolute md:w-2/3 w-full h-1/2 top-[-10%] left-[-40%] z-0 object-contain"
        />
        <img
          src={BlueCircle}
          alt="blue-circle"
          className="absolute md:w-2/3 w-full h-1/2 object-contain lg:bottom-[-10%] bottom-[30%] right-[-20%] z-0"
        />
      </div>
    </section>
  );
};

export default RegisterForm;
