const Login = (): JSX.Element => {
  return (
    <>
      <div className="flex h-screen w-full flex-col items-center justify-center bg-[#000000] text-white">
        <div className="mx-4 w-full max-w-md space-y-6">
          <div className="flex justify-center">
            <img
              src="/placeholder.svg"
              alt="Logo"
              width={100}
              height={100}
              className="h-20 w-20"
              style={{ aspectRatio: "100 / 100", objectFit: "cover" }}
            />
          </div>
          <div className="rounded-lg border border-[#FFAF7B] bg-[#1A1A1A] p-6 shadow-lg">
            <div className="space-y-4">
              <div>
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-[#FFAF7B]"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="flex h-10 border px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mt-1 w-full rounded-md border-[#FFAF7B] bg-[#1A1A1A] text-white focus:border-[#D76D77] focus:ring-[#D76D77]"
                  id="email"
                  placeholder="Enter your email"
                  type="email"
                />
              </div>
              <div>
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-[#FFAF7B]"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="flex h-10 border px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mt-1 w-full rounded-md border-[#FFAF7B] bg-[#1A1A1A] text-white focus:border-[#D76D77] focus:ring-[#D76D77]"
                  id="password"
                  placeholder="Enter your password"
                  type="password"
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 rounded-md bg-[#49238F] px-4 py-2 text-white hover:bg-[#3a1b70] focus:outline-none focus:ring-2 focus:ring-[#D76D77] focus:ring-offset-2"
                  type="submit"
                >
                  Sign In
                </button>
                <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border bg-background hover:text-accent-foreground h-10 rounded-md border-[#FFAF7B] px-4 py-2 text-[#FFAF7B] hover:bg-[#FFAF7B]/10 focus:outline-none focus:ring-2 focus:ring-[#D76D77] focus:ring-offset-2">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
