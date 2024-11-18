import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type FrameComponent1Type = {
  className?: string;
  pickUp?: string;
  popularCar?: string;

  /** Style props */
  frameDivAlignItems?: CSSProperties["alignItems"];
  markBackgroundColor?: CSSProperties["backgroundColor"];
  ellipseDivBackgroundColor?: CSSProperties["backgroundColor"];
  pickUpMinWidth?: CSSProperties["minWidth"];
  pickUpHeight?: CSSProperties["height"];
  popularCarColor?: CSSProperties["color"];
  popularCarMinWidth?: CSSProperties["minWidth"];
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
  frameDivAlignItems,
  markBackgroundColor,
  ellipseDivBackgroundColor,
  pickUp,
  pickUpMinWidth,
  pickUpHeight,
  popularCar,
  popularCarColor,
  popularCarMinWidth,
}) => {
  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      alignItems: frameDivAlignItems,
    };
  }, [frameDivAlignItems]);

  const markStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: markBackgroundColor,
    };
  }, [markBackgroundColor]);

  const ellipseDivStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: ellipseDivBackgroundColor,
    };
  }, [ellipseDivBackgroundColor]);

  const pickUpStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: pickUpMinWidth,
    };
  }, [pickUpMinWidth]);

  const pickUp1Style: CSSProperties = useMemo(() => {
    return {
      height: pickUpHeight,
    };
  }, [pickUpHeight]);

  const popularCarStyle: CSSProperties = useMemo(() => {
    return {
      color: popularCarColor,
      minWidth: popularCarMinWidth,
    };
  }, [popularCarColor, popularCarMinWidth]);

  return (
    <div
      className={`flex-1 flex flex-col items-start justify-start gap-9 min-w-[378px] max-w-full text-left text-base text-secondary-500 font-medium-type14 mq675:gap-[18px] mq675:min-w-full ${className}`}
      style={frameDiv1Style}
    >
      <div className="self-stretch h-[132px] rounded-3xs overflow-hidden shrink-0 flex flex-row items-start justify-start max-w-full">
        <div className="flex-1 rounded-3xs bg-w-background flex flex-col items-start justify-start pt-6 px-12 pb-7 box-border gap-4 max-w-full mq675:pl-6 mq675:pr-6 mq675:box-border">
          <div className="w-[582px] h-[136px] relative rounded-3xs bg-w-background hidden max-w-full" />
          <div className="flex flex-row items-start justify-start gap-2">
            <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
              <div
                className="rounded-51xl bg-royalblue flex flex-row items-center justify-center p-1 z-[1]"
                style={markStyle}
              >
                <div
                  className="h-2 w-2 relative rounded-[50%] bg-primary-500"
                  style={ellipseDivStyle}
                />
              </div>
            </div>
            <div
              className="relative tracking-[-0.02em] leading-[150%] font-semibold inline-block min-w-[69px] z-[1]"
              style={pickUpStyle}
            >
              {pickUp}
            </div>
          </div>
          <div
            className="self-stretch flex flex-row items-start justify-start gap-6 z-[1]"
            style={pickUp1Style}
          >
            <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-2">
              <b className="relative tracking-[-0.02em] leading-[150%] inline-block min-w-[78px]">
                Locations
              </b>
              <div className="self-stretch flex flex-row items-center justify-start gap-2 text-xs text-secondary-300">
                <div className="flex-1 relative tracking-[-0.02em] font-medium">
                  Select your city
                </div>
                <img
                  className="h-3.5 w-3.5 relative"
                  loading="lazy"
                  alt=""
                  src="/vuesaxoutlinearrowdown.svg"
                />
              </div>
            </div>
            <div className="h-[49px] w-px relative border-lightsteelblue border-r-[1px] border-solid box-border" />
            <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-2">
              <b className="w-[49px] relative tracking-[-0.02em] leading-[150%] flex items-center">
                Date
              </b>
              <div className="self-stretch flex flex-row items-center justify-start gap-2 text-xs text-secondary-300">
                <div className="flex-1 relative tracking-[-0.02em] font-medium">
                  Select your date
                </div>
                <img
                  className="h-3.5 w-3.5 relative"
                  loading="lazy"
                  alt=""
                  src="/vuesaxoutlinearrowdown.svg"
                />
              </div>
            </div>
            <div className="h-[49px] w-px relative border-lightsteelblue border-r-[1px] border-solid box-border" />
            <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-2">
              <b className="w-[49px] relative tracking-[-0.02em] leading-[150%] flex items-center">
                Time
              </b>
              <div className="self-stretch flex flex-row items-center justify-start gap-2 text-xs text-secondary-300">
                <div className="flex-1 relative tracking-[-0.02em] font-medium">
                  Select your time
                </div>
                <img
                  className="h-3.5 w-3.5 relative"
                  loading="lazy"
                  alt=""
                  src="/vuesaxoutlinearrowdown.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rounded flex flex-row items-start justify-start py-2.5 pl-5 pr-[19px] text-center text-secondary-300">
        <div
          className="flex-1 relative font-semibold inline-block min-w-[93px]"
          style={popularCarStyle}
        >
          {popularCar}
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
