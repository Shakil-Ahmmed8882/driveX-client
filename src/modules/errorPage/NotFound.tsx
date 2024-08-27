import { Link } from "react-router-dom";

const NotFound = (): JSX.Element => {
  return (
    <>
      <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-md text-center">
          <div className="mx-auto h-12 w-12 text-primary" />
          <h1 className="mt-4 text-6xl pb-3 font-bold tracking-tight  md:text-5xl lg:text-9xl">
            404
          </h1>
          <p className="mt-4 text-xl md:text-3xl text-muted-foreground ">
            Oops, page not found!
          </p>
          <p className="mt-4 description text-sm md:text-lg text-muted-foreground">
            The page you're looking for doesn't exist
          </p>
          <div className="mt-11 md:mt-14 ">
            <Link
              to={"/"}
              className="bg-primaryColor  p-3 px-8 md:px-16 md:py-4  rounded-full"
            >
              Go to Homepage
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
