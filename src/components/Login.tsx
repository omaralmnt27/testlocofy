import { FunctionComponent } from "react";

export type LoginType = {
  className?: string;
};

const Login: FunctionComponent<LoginType> = ({ className = "" }) => {
  return (
    <div
      className={`w-[1366px] rounded-3xl bg-w-background max-w-full overflow-hidden flex flex-row items-start justify-start py-0 pl-[154px] pr-0 box-border gap-[165px] leading-[normal] tracking-[normal] mq750:gap-[82px] mq450:gap-[41px] mq1025:flex-wrap mq1025:pl-5 mq1025:pr-5 mq1025:pb-5 mq1025:box-border ${className}`}
    >
      <div className="flex flex-col items-start justify-start pt-[222px] px-0 pb-0 box-border max-w-full mq750:pt-36 mq750:box-border mq750:min-w-full mq1100:flex-1">
        <form className="m-0 self-stretch flex flex-col items-start justify-start gap-6 max-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-[18px] max-w-full">
            <div className="self-stretch flex flex-row items-start justify-start pt-0 px-3.5 pb-1.5 box-border max-w-full">
              <div className="flex-1 flex flex-col items-start justify-start gap-2.5 max-w-full">
                <div className="self-stretch flex flex-row items-start justify-start py-0 px-[121px] mq450:pl-5 mq450:pr-5 mq450:box-border">
                  <h1 className="m-0 h-[21px] relative text-11xl uppercase font-bold font-poppins text-black text-left inline-block min-w-[94px] mq450:text-lg mq1025:text-5xl">
                    Login
                  </h1>
                </div>
                <div className="relative text-base font-poppins text-dimgray text-left">
                  How to i get started lorem ipsum dolor at?
                </div>
              </div>
            </div>
            <div className="self-stretch rounded-2xl bg-lavender flex flex-row items-start justify-start py-3.5 px-[18px] box-border gap-1.5 max-w-full">
              <div className="h-[52px] w-[364px] relative rounded-2xl bg-lavender hidden max-w-full" />
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 z-[1]"
                alt=""
                src="/frame.svg"
              />
              <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                <div className="relative text-xs font-poppins text-gray-100 text-left z-[1]">
                  Username
                </div>
              </div>
            </div>
            <div className="self-stretch rounded-2xl bg-lavender flex flex-row items-start justify-start py-3.5 px-[18px] box-border gap-1.5 max-w-full">
              <div className="h-[52px] w-[364px] relative rounded-2xl bg-lavender hidden max-w-full" />
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 z-[1]"
                alt=""
                src="/frame-1.svg"
              />
              <input
                className="w-[58px] [border:none] [outline:none] bg-[transparent] flex flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border font-poppins text-xs text-gray-100"
                placeholder="Password"
                type="text"
              />
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-0 px-[120px] mq450:pl-5 mq450:pr-5 mq450:box-border">
            <button className="cursor-pointer [border:none] py-[17px] px-[30px] bg-[transparent] flex-1 shadow-[0px_8px_21px_rgba(0,_0,_0,_0.16)] rounded-2xl [background:linear-gradient(99.78deg,_#9181f4,_#5038ed)] flex flex-row items-start justify-start">
              <div className="h-[52px] w-[124px] relative shadow-[0px_8px_21px_rgba(0,_0,_0,_0.16)] rounded-2xl [background:linear-gradient(99.78deg,_#9181f4,_#5038ed)] hidden" />
              <b className="relative text-xs font-poppins text-w-background text-left z-[1]">
                Login Now
              </b>
            </button>
          </div>
        </form>
      </div>
      <div className="h-[768px] flex-1 relative min-w-[444px] max-w-full mq750:min-w-full">
        <div className="absolute top-[0px] left-[0px] [background:linear-gradient(217.64deg,_#9181f4,_#5038ed)] w-full h-full">
          <div className="absolute top-[0px] left-[0px] [background:linear-gradient(217.64deg,_#9181f4,_#5038ed)] w-full h-full hidden" />
          <img
            className="absolute top-[0px] left-[0px] w-full h-full object-cover"
            alt=""
            src="/shape-one@2x.png"
          />
          <div className="absolute top-[122px] left-[136px] [backdrop-filter:blur(13.6px)] rounded-[46px] bg-gray-300 border-gray-200 border-[1px] border-solid box-border w-[412px] h-[524px] z-[2]" />
        </div>
        <img
          className="absolute top-[122px] left-[69px] w-[705px] h-[492px] object-cover z-[3]"
          loading="lazy"
          alt=""
          src="/women-with-tab-1@2x.png"
        />
      </div>
    </div>
  );
};

export default Login;
