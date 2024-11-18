import { FunctionComponent } from "react";
import Base from "./Base";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  return (
    <div
      className={`flex flex-col items-start justify-start gap-[23.5px] max-w-full ${className}`}
    >
      <Base
        basePosition="unset"
        baseTop="unset"
        baseLeft="unset"
        email="Estado civil"
        emailWidth="unset"
        emailBorder="unset"
        emailOutline="unset"
        emailBackgroundColor="unset"
        emailDisplay="unset"
        frameDivBorder="1px solid #000"
        showFrameDiv
        inputTextFontWeight="300"
        inputTextFontFamily="'Open Sans'"
      />
      <Base
        basePosition="unset"
        baseTop="unset"
        baseLeft="unset"
        email="Licencia de conducir"
        emailWidth="calc(100% - 0px)"
        emailBorder="none"
        emailOutline="none"
        emailBackgroundColor="transparent"
        emailDisplay="inline-block"
        frameDivBorder="unset"
        showFrameDiv
        inputTextFontWeight="300"
        inputTextFontFamily="'Open Sans'"
      />
      <Base
        basePosition="unset"
        baseTop="unset"
        baseLeft="unset"
        email="Teléfono"
        emailWidth="unset"
        emailBorder="unset"
        emailOutline="unset"
        emailBackgroundColor="unset"
        emailDisplay="unset"
        frameDivBorder="1px solid #000"
        showFrameDiv
        inputTextFontWeight="300"
        inputTextFontFamily="'Open Sans'"
      />
    </div>
  );
};

export default FrameComponent;
