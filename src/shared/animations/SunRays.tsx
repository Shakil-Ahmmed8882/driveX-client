const SunRays = (): JSX.Element => {
  return (
    <div className="fixed top-0 right-0 z-0 flex items-center justify-center">
      <div
        className="absolute w-[1000px] h-32 bg-[#f3028713] opacity-50 blur-lg animate-pulse"
        style={{ transform: "rotate(-30deg) translateX(-50%)" }}
      />
      <div
        className="absolute w-[500px] h-20 bg-[#ffff001d] opacity-50 blur-lg animate-pulse"
        style={{ transform: "rotate(-45deg) translateX(-50%)" }}
      />
      <div
        className="absolute w-[800px] h-10 bg-[#00ff001a] opacity-50 blur-lg animate-pulse"
        style={{ transform: "rotate(-60deg) translateX(-50%)" }}
      />
      {/* Add more divs as needed to create additional rays */}
    </div>
  );
};

export default SunRays;
