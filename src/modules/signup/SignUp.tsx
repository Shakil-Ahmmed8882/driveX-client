import Logo from "../../shared/ui/Logo";
import DInput from "../../shared/forms/DInput";
import DForm from "../../shared/forms/DForm";
import { FieldValues, SubmitHandler } from "react-hook-form";
import SidePanel from "./shared/SidePanel";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "antd";
import { useSignUpMutation } from "../../redux/features/auth/authApi";
import { validateFieldsOfSingUpForm } from "../../utils/validation";
import { toast } from "sonner";
import { extractErrorMessage } from "../../types";
import { SignUpResponse } from "./type";

function Signup() {
  const [signUp] = useSignUpMutation();
  const navigate = useNavigate();

  const hanleSignUp: SubmitHandler<FieldValues> = async (data) => {
    if (!validateFieldsOfSingUpForm(data)) {
      toast.warning("Please fill out all required fields.");
      return;
    }

    const userData = {
      ...data,
      role: "user",
    };

    try {
      const res = (await signUp(userData).unwrap()) as SignUpResponse;
      console.log(res);
      if (res?.success) {
        toast.success(`Singed in `);
        navigate("/login");
      }
    } catch (error) {
      const errorMessage = extractErrorMessage(error);
      toast.error(errorMessage);
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="flex bg-[#313131]  shadow-lg rounded-lg overflow-hidden max-w-4xl w-full my-11">
        <div className="w-full md:w-1/2 px-4 md:px-8 py-10">
          <div className="flex flex-col items-center mb-10">
            <Logo />
            <h2 className="mt-6 text-3xl font-extrabold text-white">
              Sign up to your account
            </h2>
          </div>
          <DForm onSubmit={hanleSignUp} className="space-y-6">
            <DInput type="text" label="Name" name="name" />
            <DInput type="text" label="Email" name="email" />
            <DInput type="text" label="Password" name="password" />
            <DInput type="number" label="Phone" name="phone" />
            <DInput type="text" label="Address" name="address" />

            {/* remember & forgot pass */}
            <RememberAndForgetPassword />
            <Button
              htmlType="submit"
              className="border-none  hover:!primaryGradient/90 hover:!text-white mt-6 w-full primaryGradient text-white"
            >
              Sign up
            </Button>
            <SwitchBetweenLoginToSignin />
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

const SwitchBetweenLoginToSignin = () => {
  return (
    <p className="pt-3 text-center text-sm text-white">
      Alreadt have an account?{" "}
      <Link to="/login" className="text-blue-400 hover:text-blue-500">
        Sign in
      </Link>
    </p>
  );
};

export const RememberAndForgetPassword = () => {
  return (
    <div className="flex px-4 items-center justify-between py-3">
      <label className="flex items-center text-sm text-white">
        <input
          type="checkbox"
          className="form-checkbox h-4 w-4 text-blue-500"
        />
        <span className="ml-2">T&Q</span>
      </label>
      <a href="#" className="text-sm text-white hover:text-blue-400">
        Forgot password?
      </a>
    </div>
  );
};
