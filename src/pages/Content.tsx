import { FunctionComponent } from "react";
import PickUpLocations from "../components/PickUpLocations";
import CarCatalog from "../components/CarCatalog";
import FrameComponent2 from "../components/FrameComponent2";
import Catalog2 from "../components/Catalog2";
import Catalog3 from "../components/Catalog3";

const Content: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-whitesmoke overflow-hidden flex flex-col items-end justify-start pt-8 px-16 pb-16 box-border gap-5 leading-[normal] tracking-[normal] text-center text-base text-w-background font-medium-type14 mq750:pl-8 mq750:pr-8 mq750:box-border">
      <section className="self-stretch flex flex-row items-start justify-start flex-wrap content-start pt-0 px-0 pb-3 box-border gap-8 max-w-full text-left text-base text-w-background font-medium-type14 mq675:gap-4">
        <div className="flex-1 rounded-3xs bg-information-500 overflow-hidden flex flex-col items-start justify-start pt-6 pb-28 pl-6 pr-5 box-border relative gap-[18px] min-w-[480px] max-w-full mq450:pt-5 mq450:pb-[73px] mq450:box-border mq675:min-w-full">
          <img
            className="w-[775px] h-[775px] absolute !m-[0] bottom-[-332px] left-[-157px]"
            alt=""
            src="/bg.svg"
          />
          <h1 className="m-0 w-[272px] relative text-13xl tracking-[-0.03em] leading-[150%] font-semibold font-[inherit] flex items-center z-[1] mq450:text-lgi mq450:leading-[29px] mq750:text-7xl mq750:leading-[38px]">
            The Best Platform for Car Rental
          </h1>
          <div className="w-[284px] relative tracking-[-0.02em] leading-[150%] font-medium flex items-center z-[1]">
            Ease of doing a car rental safely and reliably. Of course at a low
            price.
          </div>
          <div className="rounded bg-primary-500 flex flex-row items-start justify-start py-2.5 pl-5 pr-[19px] z-[1] text-center">
            <div className="flex-1 relative tracking-[-0.02em] leading-[150%] font-semibold inline-block min-w-[81px]">
              Rental Car
            </div>
          </div>
        </div>
        <div className="flex-1 rounded-3xs bg-primary-500 overflow-hidden flex flex-col items-start justify-start pt-6 pb-28 pl-6 pr-5 box-border relative gap-[18px] min-w-[480px] max-w-full mq450:pt-5 mq450:pb-[73px] mq450:box-border mq675:min-w-full">
          <img
            className="w-[758px] h-full absolute !m-[0] top-[0px] right-[-88px] bottom-[0px] max-h-full"
            loading="lazy"
            alt=""
            src="/bg-1.svg"
          />
          <h1 className="m-0 w-[272px] relative text-13xl tracking-[-0.03em] leading-[150%] font-semibold font-[inherit] flex items-center z-[1] mq450:text-lgi mq450:leading-[29px] mq750:text-7xl mq750:leading-[38px]">
            Easy way to rent a car at a low price
          </h1>
          <div className="w-[284px] relative tracking-[-0.02em] leading-[150%] font-medium flex items-center z-[1]">
            Providing cheap car rental services and safe and comfortable
            facilities.
          </div>
          <div className="rounded bg-information-500 flex flex-row items-start justify-start py-2.5 pl-5 pr-[19px] z-[1] text-center">
            <div className="flex-1 relative tracking-[-0.02em] leading-[150%] font-semibold inline-block min-w-[81px]">
              Rental Car
            </div>
          </div>
        </div>
      </section>
      <PickUpLocations />
      <CarCatalog />
      <FrameComponent2 />
      <section className="self-stretch flex flex-row items-start justify-center flex-wrap content-start pt-0 px-0 pb-11 gap-8 text-left text-xl text-secondary-500 font-medium-type14 mq450:pb-[29px] mq450:box-border mq675:gap-4">
        <Catalog2 />
        <Catalog3 />
        <div className="flex-1 rounded-3xs bg-w-background overflow-hidden flex flex-col items-start justify-start py-6 px-0 box-border gap-[46px] min-w-[280px] max-w-[304px] mq450:gap-[23px] mq450:pt-5 mq450:pb-5 mq450:box-border">
          <div className="self-stretch flex flex-row items-start justify-start py-0 px-6">
            <div className="flex-1 flex flex-row items-start justify-between gap-5">
              <div className="w-40 flex flex-col items-start justify-start gap-1">
                <h3 className="m-0 self-stretch relative text-inherit tracking-[-0.03em] leading-[150%] font-bold font-[inherit] mq450:text-base mq450:leading-[19px]">
                  MG ZX Excite
                </h3>
                <b className="w-[129px] relative text-sm tracking-[-0.02em] leading-[150%] flex text-secondary-300 items-center">
                  Hatchback
                </b>
              </div>
              <img className="h-6 w-6 relative" alt="" src="/like.svg" />
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[37px] text-sm text-secondary-300 mq450:gap-[18px]">
            <div className="self-stretch h-[117px] relative">
              <img
                className="absolute top-[0px] left-[24px] w-[264px] h-[108px] object-cover"
                loading="lazy"
                alt=""
                src="/car-16@2x.png"
              />
              <div className="absolute top-[49px] left-[0px] [background:linear-gradient(180deg,_rgba(255,_255,_255,_0),_#fff)] w-[304px] h-[68px] z-[1]" />
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
                      4 People
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
        <div className="flex-1 rounded-3xs bg-w-background overflow-hidden flex flex-col items-start justify-start py-6 px-0 box-border gap-11 min-w-[280px] max-w-[304px] mq450:gap-[22px] mq450:pt-5 mq450:pb-5 mq450:box-border">
          <div className="self-stretch flex flex-row items-start justify-start py-0 px-6">
            <div className="flex-1 flex flex-row items-start justify-between gap-5">
              <div className="w-32 flex flex-col items-start justify-start gap-1">
                <h3 className="m-0 self-stretch relative text-inherit tracking-[-0.03em] leading-[150%] font-bold font-[inherit] mq450:text-base mq450:leading-[19px]">
                  New MG ZS
                </h3>
                <b className="self-stretch relative text-sm tracking-[-0.02em] leading-[150%] text-secondary-300">
                  SUV
                </b>
              </div>
              <img className="h-6 w-6 relative" alt="" src="/like1.svg" />
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[37px] text-sm text-secondary-300 mq450:gap-[18px]">
            <div className="self-stretch h-[119px] relative">
              <img
                className="absolute w-[calc(100%_-_16px)] top-[0px] right-[8px] left-[8px] max-w-full overflow-hidden h-28 object-contain"
                loading="lazy"
                alt=""
                src="/car-22@2x.png"
              />
              <div className="absolute top-[51px] left-[0px] [background:linear-gradient(180deg,_rgba(255,_255,_255,_0),_#fff)] w-[304px] h-[68px] z-[1]" />
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
                      80L
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
                      <span>{`$80.00/ `}</span>
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
      </section>
      <div className="w-[734px] flex flex-row items-start justify-between gap-5 max-w-full mq450:flex-wrap mq450:justify-center">
        <div className="rounded bg-primary-500 flex flex-row items-start justify-start py-2.5 pl-5 pr-[19px]">
          <div className="flex-1 relative tracking-[-0.02em] leading-[150%] font-semibold inline-block min-w-[117px]">
            Show more car
          </div>
        </div>
        <div className="w-[140px] flex flex-col items-start justify-start pt-2.5 px-0 pb-0 box-border text-right text-sm text-secondary-300">
          <div className="self-stretch relative tracking-[-0.02em] leading-[150%] font-medium">
            120 Car
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
