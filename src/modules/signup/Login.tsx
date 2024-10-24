import Logo from "../../shared/ui/Logo";
import DInput from "../../shared/forms/DInput";
import DForm from "../../shared/forms/DForm";
import { FieldValues, SubmitHandler } from "react-hook-form";
import SidePanel from "./shared/SidePanel";
import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../../redux/features/auth/authApi";
import { RememberAndForgetPassword } from "./SignUp";
import { useAppDispatch } from "../../redux/hooks";
import { setUser } from "../../redux/features/auth/authSlice";
import { verifyToken } from "../../utils/verifyToken";
import { LoginResponse } from "./type";
import { validateFieldsOfLoginForm } from "../../utils/validation";
import { toast } from "sonner";

function Login() {
  const [login] = useLoginMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSignIn: SubmitHandler<FieldValues> = async (data) => {

    
    if (!validateFieldsOfLoginForm(data)) {
      toast.warning("Please fill out all required fields.");
      return;
    }

    try {
      // Correctly type the response using LoginResponse
      const res = (await login(data).unwrap()) as LoginResponse;

      if (res.token) {
        const user = verifyToken(res.token);
        const userData = {
          user,
          token: res.token,
        };
        dispatch(setUser(userData));
        navigate("/");
      }
    } catch (error) {
      console.error("Login failed:", error);
      // Handle the error appropriately, possibly by showing a message to the user
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="flex  shadow-lg rounded-lg overflow-hidden max-w-4xl w-full">
        <div className="w-full md:w-1/2 px-4 md:px-8 py-10 ">
          <div className="flex flex-col items-center mb-10">
            <Logo/>
            <h2 className="mt-6 text-3xl font-extrabold ">
              Sign in to your account
            </h2>
          </div>
          <DForm onSubmit={handleSignIn}>
            <DInput type="text" label="Email" name="email" />
            <DInput type="text" label="Password" name="password" />

            {/* remember & forgot pass */}
            <RememberAndForgetPassword />
            <button
              type="submit"
              className="mt-12 w-full bg-primaryColor  py-2  text-white rounded-md font-semibold hover:bg-primaryColor/90 transition divide-neutral-400"
            >
              Sign in
            </button>
            <p className="mt-4 text-center text-sm ">
              Don't have an account?{" "}
              <Link
                to={"/sign-up"}
                className="text-blue-400 hover:text-blue-500"
              >
                Sign up
              </Link>
            </p>
          </DForm>
        </div>
        {/* Right Side Section */}
        <SidePanel
          title="Explore New Horizons"
          description="Discover new adventures with us."
          backgroundImage="https://images.pexels.com/photos/1172109/pexels-photo-1172109.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
      </div>
    </div>
  );
}

export default Login;
