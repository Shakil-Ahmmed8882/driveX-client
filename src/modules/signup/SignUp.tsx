import Logo from "../../shared/ui/Logo";
import DInput from "../../shared/forms/DInput";
import DForm from "../../shared/forms/DForm";
import { FieldValues, SubmitHandler } from "react-hook-form";
import SidePanel from "./shared/SidePanel";

function Signup() {
  const hanleSignUp: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };
  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="flex bg-[#1e1e1e]  shadow-lg rounded-lg overflow-hidden max-w-4xl w-full">
        <div className="w-full md:w-1/2 px-4 md:px-8 py-10">
          <div className="flex flex-col items-center mb-10">
            <Logo isLabel={false} />
            <h2 className="mt-6 text-3xl font-extrabold text-white">
              Sign up to your account
            </h2>
          </div>
          <DForm onSubmit={hanleSignUp}>
            <div className="mb-4">
              <DInput type="text" label="Email" name="email" />
            </div>
            <div className="mb-4">
              <DInput type="text" label="Password" name="password" />
            </div>

            {/* remember & forgot pass */}
            <div className="flex items-center justify-between py-3">
              <label className="flex items-center text-sm text-white">
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-blue-500"
                />
                <span className="ml-2">Remember me</span>
              </label>
              <a href="#" className="text-sm text-white hover:text-blue-400">
                Forgot password?
              </a>
            </div>
            <button
              type="submit"
              className="mt-6 w-full bg-primaryColor text-white py-3 rounded-md font-semibold hover:bg-primaryColor/90 transition divide-neutral-400"
            >
              Sign up
            </button>
            <p className="mt-4 text-center text-sm text-white">
              Don't have an account?{" "}
              <a href="#" className="text-blue-400 hover:text-blue-500">
                Sign up
              </a>
            </p>
          </DForm>
        </div>

        {/* Right Side Section */}
        <SidePanel
          title="Explore New Horizons"
          description="Discover new adventures with us."
          backgroundImage="https://i.pinimg.com/564x/5b/11/3c/5b113c0a440669c34ecd34ea92c4d068.jpg"
        />
      </div>
    </div>
  );
}

export default Signup;
