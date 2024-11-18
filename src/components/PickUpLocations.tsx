import { FunctionComponent } from "react";
import FrameComponent1 from "./FrameComponent1";

export type PickUpLocationsType = {
  className?: string;
};

const PickUpLocations: FunctionComponent<PickUpLocationsType> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start flex-wrap content-start gap-11 max-w-full text-left text-base text-secondary-500 font-medium-type14 mq675:gap-[22px] ${className}`}
    >
      <FrameComponent1 pickUp="Pick - Up" popularCar="Popular Car" />
      <div className="flex flex-col items-start justify-start pt-9 px-0 pb-0">
        <img
          className="w-[60px] h-[60px] relative object-contain"
          loading="lazy"
          alt=""
          src="/switch.svg"
        />
      </div>
      <FrameComponent1
        frameDivAlignItems="flex-end"
        markBackgroundColor="rgba(92, 175, 252, 0.3)"
        ellipseDivBackgroundColor="#54a6ff"
        pickUp="Drop - Off"
        pickUpMinWidth="81px"
        pickUpHeight="48px"
        popularCar="View All"
        popularCarColor="#3563e9"
        popularCarMinWidth="65px"
      />
    </section>
  );
};

export default PickUpLocations;
