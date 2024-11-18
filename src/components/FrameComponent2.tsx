import { FunctionComponent } from "react";
import Catalog from "./Catalog";

export type FrameComponent2Type = {
  className?: string;
};

const FrameComponent2: FunctionComponent<FrameComponent2Type> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-3 gap-5 text-center text-base text-secondary-300 font-medium-type14 ${className}`}
    >
      <div className="w-[196px] rounded flex flex-row items-start justify-start py-2.5 pl-5 pr-[19px] box-border">
        <div className="flex-1 relative font-semibold">Recomendation Car</div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-center flex-wrap content-start gap-8 text-left text-xl text-secondary-500 mq675:gap-4">
        <div className="flex-1 rounded-3xs bg-w-background overflow-hidden flex flex-col items-start justify-start py-6 px-0 box-border gap-[50px] min-w-[280px] max-w-[304px] mq450:gap-[25px] mq450:pt-5 mq450:pb-5 mq450:box-border">
          <div className="self-stretch flex flex-row items-start justify-start py-0 px-6">
            <div className="flex-1 flex flex-row items-start justify-between gap-5">
              <div className="w-32 flex flex-col items-start justify-start gap-1">
                <h3 className="m-0 self-stretch relative text-inherit tracking-[-0.03em] leading-[150%] font-bold font-[inherit] mq450:text-base mq450:leading-[19px]">
                  All New Rush
                </h3>
                <b className="self-stretch relative text-sm tracking-[-0.02em] leading-[150%] text-secondary-300">
                  SUV
                </b>
              </div>
              <img
                className="h-6 w-6 relative"
                loading="lazy"
                alt=""
                src="/like1.svg"
              />
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[37px] text-sm text-secondary-300 mq450:gap-[18px]">
            <div className="self-stretch h-[113px] relative">
              <img
                className="absolute top-[0px] left-[40px] w-56 h-[100px] object-cover"
                loading="lazy"
                alt=""
                src="/car-8@2x.png"
              />
              <div className="absolute top-[45px] left-[0px] [background:linear-gradient(180deg,_rgba(255,_255,_255,_0),_#fff)] w-[304px] h-[68px] z-[1]" />
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-0 px-6">
              <div className="flex-1 flex flex-col items-start justify-start gap-5">
                <div className="self-stretch flex flex-row items-start justify-start gap-4">
                  <div className="flex flex-row items-start justify-start gap-1.5">
                    <img
                      className="h-6 w-6 relative"
                      loading="lazy"
                      alt=""
                      src="/vuesaxboldgasstation.svg"
                    />
                    <div className="relative tracking-[-0.02em] leading-[150%] font-medium inline-block min-w-[29px]">
                      70L
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start gap-1">
                    <img
                      className="h-6 w-6 relative overflow-hidden shrink-0"
                      loading="lazy"
                      alt=""
                      src="/car-1.svg"
                    />
                    <div className="relative tracking-[-0.02em] leading-[150%] font-medium inline-block min-w-[49px]">
                      Manual
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start gap-1.5">
                    <img
                      className="h-6 w-6 relative"
                      loading="lazy"
                      alt=""
                      src="/vuesaxboldprofile2user.svg"
                    />
                    <div className="relative tracking-[-0.02em] leading-[150%] font-medium inline-block min-w-[61px]">
                      6 People
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-end justify-start gap-3 text-xl text-secondary-500">
                  <div className="flex-1 flex flex-col items-start justify-start gap-1">
                    <b className="self-stretch relative">
                      <span>{`$72.00/ `}</span>
                      <span className="text-sm text-secondary-300">day</span>
                    </b>
                    <b className="self-stretch relative text-sm [text-decoration:line-through] text-secondary-300">
                      $80.00
                    </b>
                  </div>
                  <div className="rounded bg-primary-500 flex flex-row items-start justify-start py-2.5 pl-5 pr-[19px] text-center text-base text-w-background">
                    <div className="flex-1 relative tracking-[-0.02em] leading-[150%] font-semibold inline-block min-w-[77px]">
                      Rent Now
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Catalog car="/car-10@2x.png" />
        <div className="flex-1 rounded-3xs bg-w-background overflow-hidden flex flex-col items-start justify-start py-6 px-0 box-border gap-[50px] min-w-[280px] max-w-[304px] mq450:gap-[25px] mq450:pt-5 mq450:pb-5 mq450:box-border">
          <div className="self-stretch flex flex-row items-start justify-start py-0 px-6">
            <div className="flex-1 flex flex-row items-start justify-between gap-5">
              <div className="w-[140px] flex flex-col items-start justify-start gap-1">
                <h3 className="m-0 self-stretch relative text-inherit tracking-[-0.03em] leading-[150%] font-bold font-[inherit] mq450:text-base mq450:leading-[19px]">
                  All New Terios
                </h3>
                <b className="w-[129px] relative text-sm tracking-[-0.02em] leading-[150%] flex text-secondary-300 items-center">
                  SUV
                </b>
              </div>
              <img className="h-6 w-6 relative" alt="" src="/like1.svg" />
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[37px] text-sm text-secondary-300 mq450:gap-[18px]">
            <div className="self-stretch h-[113px] relative">
              <img
                className="absolute top-[0px] left-[40px] w-56 h-[100px] object-cover"
                loading="lazy"
                alt=""
                src="/car-12@2x.png"
              />
              <div className="absolute top-[45px] left-[0px] [background:linear-gradient(180deg,_rgba(255,_255,_255,_0),_#fff)] w-[304px] h-[68px] z-[1]" />
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-0 px-6">
              <div className="flex-1 flex flex-col items-start justify-start gap-6">
                <div className="self-stretch flex flex-row items-start justify-start gap-4">
                  <div className="flex flex-row items-start justify-start gap-1.5">
                    <img
                      className="h-6 w-6 relative"
                      alt=""
                      src="/vuesaxboldgasstation.svg"
                    />
                    <div className="relative tracking-[-0.02em] leading-[150%] font-medium inline-block min-w-[29px]">
                      90L
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start gap-1">
                    <img
                      className="h-6 w-6 relative overflow-hidden shrink-0"
                      alt=""
                      src="/car-1.svg"
                    />
                    <div className="relative tracking-[-0.02em] leading-[150%] font-medium inline-block min-w-[49px]">
                      Manual
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start gap-1.5">
                    <img
                      className="h-6 w-6 relative"
                      alt=""
                      src="/vuesaxboldprofile2user.svg"
                    />
                    <div className="relative tracking-[-0.02em] leading-[150%] font-medium inline-block min-w-[61px]">
                      6 People
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start gap-3 text-xl text-secondary-500">
                  <b className="h-11 flex-1 relative flex items-center">
                    <span>
                      <span>{`$74.00/ `}</span>
                      <span className="text-sm text-secondary-300">day</span>
                    </span>
                  </b>
                  <div className="rounded bg-primary-500 flex flex-row items-start justify-start py-2.5 pl-5 pr-[19px] text-center text-base text-w-background">
                    <div className="flex-1 relative tracking-[-0.02em] leading-[150%] font-semibold inline-block min-w-[77px]">
                      Rent Now
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Catalog car="/car-14@2x.png" />
      </div>
    </section>
  );
};

export default FrameComponent2;
