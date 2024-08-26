const SunRays = (): JSX.Element => {
  return (
    <div className="absolute top-0 right-0 z-0 flex items-center justify-center">
      <div
        className="absolute w-[1000px] h-11 bg-[#f3028775] opacity-50 blur-lg animate-pulse"
        style={{ transform: "rotate(-30deg) translateX(-50%)" }}
      />
      <div
        className="absolute w-[500px] h-10 bg-[#ffff00b6] opacity-50 blur-lg animate-pulse"
        style={{ transform: "rotate(-45deg) translateX(-50%)" }}
      />
      <div
        className="absolute w-[400px] h-6 bg-[lime] opacity-50 blur-lg animate-pulse"
        style={{ transform: "rotate(-60deg) translateX(-50%)" }}
      />
      {/* Add more divs as needed to create additional rays */}
    </div>
  );
};

export default SunRays;
