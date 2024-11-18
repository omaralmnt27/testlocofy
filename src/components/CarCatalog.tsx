import { FunctionComponent } from "react";
import Catalog1 from "./Catalog1";

export type CarCatalogType = {
  className?: string;
};

const CarCatalog: FunctionComponent<CarCatalogType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center flex-wrap content-start pt-0 px-0 pb-3 gap-8 text-left text-xl text-secondary-500 font-medium-type14 mq675:gap-4 ${className}`}
    >
      <div className="flex-1 rounded-3xs bg-w-background overflow-hidden flex flex-col items-start justify-start py-6 px-0 box-border gap-16 min-w-[280px] max-w-[304px] mq450:gap-8 mq450:pt-5 mq450:pb-5 mq450:box-border">
        <div className="self-stretch flex flex-row items-start justify-start py-0 px-6">
          <div className="flex-1 flex flex-row items-start justify-between gap-5">
            <div className="w-32 flex flex-col items-start justify-start gap-1">
              <h3 className="m-0 self-stretch relative text-inherit tracking-[-0.03em] leading-[150%] font-bold font-[inherit] mq450:text-base mq450:leading-[19px]">
                Koenigsegg
              </h3>
              <b className="self-stretch relative text-sm tracking-[-0.02em] leading-[150%] text-secondary-300">
                Sport
              </b>
            </div>
            <img
              className="h-6 w-6 relative"
              loading="lazy"
              alt=""
              src="/like.svg"
            />
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[37px] text-sm text-secondary-300 mq450:gap-[18px]">
          <div className="self-stretch h-[99px] relative">
            <img
              className="absolute top-[0px] left-[36px] w-[232px] h-[72px] object-cover"
              loading="lazy"
              alt=""
              src="/car@2x.png"
            />
            <div className="absolute top-[31px] left-[0px] [background:linear-gradient(180deg,_rgba(255,_255,_255,_0),_#fff)] w-[304px] h-[68px] z-[1]" />
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-0 px-6">
            <div className="flex-1 flex flex-col items-start justify-start gap-6">
              <div className="self-stretch flex flex-row items-start justify-start gap-4">
                <div className="flex flex-row items-start justify-start gap-1.5">
                  <img
                    className="h-6 w-6 relative"
                    loading="lazy"
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
                    loading="lazy"
                    alt=""
                    src="/car-1.svg"
                  />
                  <div className="relative font-medium">Manual</div>
                </div>
                <div className="flex flex-row items-start justify-start gap-1.5">
                  <img
                    className="h-6 w-6 relative"
                    loading="lazy"
                    alt=""
                    src="/vuesaxboldprofile2user.svg"
                  />
                  <div className="relative font-medium inline-block min-w-[61px]">
                    2 People
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start gap-6 text-xl text-secondary-500">
                <b className="h-11 relative flex items-center min-w-[116px]">
                  <span>
                    <span>{`$99.00/ `}</span>
                    <span className="text-sm text-secondary-300">day</span>
                  </span>
                </b>
                <div className="flex-1 rounded bg-primary-500 flex flex-row items-start justify-start py-2.5 pl-5 pr-[19px] text-center text-base text-w-background">
                  <div className="flex-1 relative tracking-[-0.02em] leading-[150%] font-semibold inline-block min-w-[77px]">
                    Rent Now
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Catalog1 car="/car-2@2x.png" />
      <div className="flex-1 rounded-3xs bg-w-background overflow-hidden flex flex-col items-start justify-start py-6 px-0 box-border gap-16 min-w-[280px] max-w-[304px] mq450:gap-8 mq450:pt-5 mq450:pb-5 mq450:box-border">
        <div className="self-stretch flex flex-row items-start justify-start py-0 px-6">
          <div className="flex-1 flex flex-row items-start justify-between gap-5">
            <div className="flex flex-col items-start justify-start gap-1">
              <h3 className="m-0 relative text-inherit tracking-[-0.03em] leading-[150%] font-bold font-[inherit] inline-block min-w-[129px] mq450:text-base mq450:leading-[19px]">
                Rolls - Royce
              </h3>
              <b className="self-stretch relative text-sm tracking-[-0.02em] leading-[150%] text-secondary-300">
                Sedan
              </b>
            </div>
            <img className="h-6 w-6 relative" alt="" src="/like.svg" />
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[37px] text-sm text-secondary-300 mq450:gap-[18px]">
          <div className="self-stretch h-[99px] relative">
            <img
              className="absolute top-[0px] left-[42px] w-[220px] h-[68px] object-contain"
              loading="lazy"
              alt=""
              src="/car-4@2x.png"
            />
            <div className="absolute top-[31px] left-[0px] [background:linear-gradient(180deg,_rgba(255,_255,_255,_0),_#fff)] w-[304px] h-[68px] z-[1]" />
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
                  <div className="relative font-medium inline-block min-w-[29px]">
                    70L
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
                    4 People
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start gap-6 text-xl text-secondary-500">
                <b className="h-11 relative flex items-center min-w-[116px]">
                  <span>
                    <span>{`$96.00/ `}</span>
                    <span className="text-sm text-secondary-300">day</span>
                  </span>
                </b>
                <div className="flex-1 rounded bg-primary-500 flex flex-row items-start justify-start py-2.5 pl-5 pr-[19px] text-center text-base text-w-background">
                  <div className="flex-1 relative tracking-[-0.02em] leading-[150%] font-semibold inline-block min-w-[77px]">
                    Rent Now
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Catalog1
        car="/car-6@2x.png"
        manualDisplay="inline-block"
        manualMinWidth="49px"
      />
    </section>
  );
};

export default CarCatalog;
