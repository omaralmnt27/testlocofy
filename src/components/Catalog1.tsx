import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type Catalog1Type = {
  className?: string;
  car?: string;

  /** Style props */
  manualDisplay?: CSSProperties["display"];
  manualMinWidth?: CSSProperties["minWidth"];
};

const Catalog1: FunctionComponent<Catalog1Type> = ({
  className = "",
  car,
  manualDisplay,
  manualMinWidth,
}) => {
  const manualStyle: CSSProperties = useMemo(() => {
    return {
      display: manualDisplay,
      minWidth: manualMinWidth,
    };
  }, [manualDisplay, manualMinWidth]);

  return (
    <div
      className={`flex-1 rounded-3xs bg-w-background overflow-hidden flex flex-col items-start justify-start py-6 px-0 box-border gap-[66px] min-w-[280px] max-w-[304px] text-left text-xl text-secondary-500 font-medium-type14 mq450:gap-[33px] mq450:pt-5 mq450:pb-5 mq450:box-border ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-start py-0 px-6">
        <div className="flex-1 flex flex-row items-start justify-between gap-5">
          <div className="flex flex-col items-start justify-start gap-1">
            <h3 className="m-0 relative text-inherit tracking-[-0.03em] leading-[150%] font-bold font-[inherit] inline-block min-w-[129px] mq450:text-base mq450:leading-[19px]">
              Nissan GT - R
            </h3>
            <b className="self-stretch relative text-sm tracking-[-0.02em] leading-[150%] text-secondary-300">
              Sport
            </b>
          </div>
          <img className="h-6 w-6 relative" alt="" src="/like1.svg" />
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[37px] text-sm text-secondary-300 mq450:gap-[18px]">
        <div className="self-stretch h-[97px] relative">
          <img
            className="absolute top-[0px] left-[50px] w-[204px] h-16 object-contain"
            loading="lazy"
            alt=""
            src={car}
          />
          <div className="absolute top-[29px] left-[0px] [background:linear-gradient(180deg,_rgba(255,_255,_255,_0),_#fff)] w-[304px] h-[68px] z-[1]" />
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
                  80L
                </div>
              </div>
              <div className="flex flex-row items-start justify-start gap-1">
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/car-1.svg"
                />
                <div className="relative font-medium" style={manualStyle}>
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
                  2 People
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-end justify-start gap-3 text-xl text-secondary-500">
              <div className="flex-1 flex flex-col items-start justify-start gap-1">
                <b className="self-stretch relative">
                  <span>{`$80.00/ `}</span>
                  <span className="text-sm text-secondary-300">day</span>
                </b>
                <b className="self-stretch relative text-sm [text-decoration:line-through] text-secondary-300">
                  $100.00
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
  );
};

export default Catalog1;
