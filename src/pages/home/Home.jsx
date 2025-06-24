export default function Home() {
  return (
    <div className="bg-[url(./assets/bgimg.png)] bg-cover bg-center bg-no-repeat h-[91vh]">
      <div className="p-5 flex flex-col justify-center items-center">
        <div className="text-[36px] font-bold text-white p-3 text-center poppins ">
          Scalable Digital Solutions for Ambitious Teams
        </div>
        <div className="text-[24px] text-center text-white font-medium w-[650px] h-[87px] mt-[20px] inter">
          We build, launch, and support enterprise-grade software for Web,
          Mobile, and Cloud — now expanding into AI & Blockchain.
        </div>
        <div className="flex mt-[30px]">
          <div className="text-white font-semibold text-[14px] items-center border-1 border-solid border-white p-5 rounded-[6px] mt-[40px] mr-[20px] inter cursor-pointer hover:bg-white hover:text-black">
            Start Your Project
          </div>
          <div className="text-black bg-white font-semibold text-[14px] items-center border-1 border-solid border-white p-5 rounded-[6px] mt-[40px] inter cursor-pointer hover:bg-black hover:text-white">
            Speak to a Specialist
          </div>
        </div>
      </div>
    </div>
  );
}
