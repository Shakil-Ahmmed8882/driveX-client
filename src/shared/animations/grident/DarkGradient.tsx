export const DarkGradient = () => {
    return (
      <>
        {/* First Group of Blobs */}
        <div className="absolute top-0 left-0 w-80 h-80 rounded-full bg-[#23005C] animate-blob filter blur-[200px]"></div>
        <div className="absolute top-10 left-[50%] w-72 h-72 rounded-full bg-[#23005C] animate-blob filter blur-[100px]"></div>
        <div className="absolute top-20 left-[50%] w-64 h-64 rounded-full bg-[#23005C] animate-blob filter blur-[100px]"></div>
        <div className="absolute top-32 left-[50%] w-56 h-56 rounded-full bg-[#5b0536] animate-blob filter blur-[200px]"></div>
  
        {/* Second Group of Blobs */}
        <div className="absolute top-0 right-[50%] w-80 h-80 rounded-full bg-[#13004A] animate-blob filter blur-[50px]"></div>
        <div className="absolute top-10 right-[50%] w-72 h-72 rounded-full bg-[#16004E] animate-blob filter blur-[200px]"></div>
        <div className="absolute top-20 right-[50%] w-64 h-64 rounded-full bg-[#170151] animate-blob filter blur-[100px]"></div>
        <div className="absolute top-32 right-[50%] w-56 h-56 rounded-full bg-[#1C0155] animate-blob filter blur-[200px]"></div>
  
        {/* Bottom Blobs */}
        <div className="absolute bottom-10 left-[50%]  w-72 h-72  rounded-full bg-[##2E0164] animate-blob  filter blur-[200px] animation-delay-2000"></div>
        <div className="absolute bottom-20 left-[50%]  w-64 h-64 rounded-full bg-[#2E0164] animate-blob filter blur-[100px] animation-delay-2000"></div>
        <div className="absolute bottom-32 left-[50%]  w-56 h-56 rounded-full bg-[#300388] animate-blob filter blur-[200px] animation-delay-2000"></div>
  
        {/* Additional Blobs to balance out the shape */}
  
        <div className="absolute bottom-20 right-[50%]  w-64 h-64  rounded-full bg-[#300388] animate-blob  filter blur-[200px] animation-delay-4000"></div>
        <div className="absolute bottom-20 right-[50%]  w-64 h-64  rounded-full bg-[#300388] animate-blob  filter blur-[200px] animation-delay-4000"></div>
        <div className="absolute bottom-32 right-[50%]  w-56 h-56  rounded-full bg-[#300388] animate-blob  filter blur-[200px] animation-delay-4000"></div>
      </>
    );
  };