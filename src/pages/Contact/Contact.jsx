import f2 from "../../assets/f2.png";
import f1 from "../../assets/f1.png";

export default function Login() {
  return (
    <div>
      <div className="bg-gray-200 px-[50px] pt-[70px] pb-[10px] flex  justify-evenly">
        <div className="w-fit">
          <div className="py-[19px] px-[58px] inter border-1 border-solid border-[rgba(76, 175, 79, 1) w-fit rounded-[6px]] cursor-pointer hover:bg-black hover:text-white">
            Let’s Partner Up
          </div>
          <div className="h-50 flex flex-col justify-between inter py-5 px-0">
            <div className="text-[40px] font-semibold">
              <span>We’re Just a </span>
              <span className="titleGreen">message away!</span>
            </div>

            <div className="flex">
              <span className="mr-[30px]">
                <img src={f2} />
              </span>
              <span>We will respond to you within 24 hours</span>
            </div>

            <div className="flex">
              <span className="mr-[30px]">
                <img src={f2} />
              </span>
              <span>
                You'll be talking to your product and tech experts <br /> ( no
                account manager)
              </span>
            </div>
          </div>
          <div>
            <img className="rounded-[9px]" src={f1} />
          </div>
        </div>
        <div className="flex flex-col p-[50px]">
          <input
            className="w-[400px] py-[9px] px-[16px] rounded-[6px] border-none mb-5 h-[40px] inter bg-white font-normal text-[16px] focus:outline-none"
            placeholder="Your Name"
            type="text"
          />
          <input
            className="w-[400px] py-[9px] px-[16px] rounded-[6px] border-none mb-5 h-[40px] bg-white inter font-normal text-[16px] focus:outline-none"
            placeholder="Your Email"
            type="email"
          />
          <input
            className="w-[400px] py-[9px] px-[16px] rounded-[6px] border-none mb-5 h-[40px] bg-white inter font-normal text-[16px] focus:outline-none"
            placeholder="Your Phone Number"
            type="tel"
          />
          <select
            placeholder="Service I need"
            className="w-[400px] py-[9px] px-[16px] rounded-[6px] border-none mb-5 h-[50px] bg-white inter font-normal text-[16px] focus:outline-none"
          >
            <option value="" disabled selected>
              Service I need
            </option>
            <option>Html</option>
            <option>CSS</option>
            <option>JS</option>
            <option>React</option>
          </select>
          <textarea
            placeholder="Your Message here"
            className="w-[400px] py-[9px] px-[16px] rounded-[6px] bg-white border-none mb-5 h-[90px] inter font-normal text-[16px] focus:outline-none"
          ></textarea>
          <div className="flex items-center">
            <input className="mr-[20px] h-[25px] w-[25px]" type="checkbox" />
            <label className="inter font-normal text-[16px]">
              I have read and accepted the privacy policy
            </label>
          </div>
          <button
            className="inter font-semibold text-[22px] py-[9px] px-[16px] bg-white w-fit rounded-[6px] mt-5 cursor-pointer hover:bg-black hover:text-white"
            type="submit"
          >
            Send us a message!
          </button>
        </div>
      </div>
    </div>
  );
}
