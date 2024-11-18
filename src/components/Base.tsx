import { FunctionComponent, useMemo, type CSSProperties } from "react";
import Cursor from "./Cursor";

export type BaseType = {
  className?: string;
  email?: string;
  showFrameDiv?: boolean;

  /** Style props */
  basePosition?: CSSProperties["position"];
  baseTop?: CSSProperties["top"];
  baseLeft?: CSSProperties["left"];
  emailWidth?: CSSProperties["width"];
  emailBorder?: CSSProperties["border"];
  emailOutline?: CSSProperties["outline"];
  emailBackgroundColor?: CSSProperties["backgroundColor"];
  emailDisplay?: CSSProperties["display"];
  frameDivBorder?: CSSProperties["border"];
  inputTextFontWeight?: CSSProperties["fontWeight"];
  inputTextFontFamily?: CSSProperties["fontFamily"];
};

const Base: FunctionComponent<BaseType> = ({
  className = "",
  basePosition,
  baseTop,
  baseLeft,
  email,
  emailWidth,
  emailBorder,
  emailOutline,
  emailBackgroundColor,
  emailDisplay,
  frameDivBorder,
  showFrameDiv,
  inputTextFontWeight,
  inputTextFontFamily,
}) => {
  const baseStyle: CSSProperties = useMemo(() => {
    return {
      position: basePosition,
      top: baseTop,
      left: baseLeft,
    };
  }, [basePosition, baseTop, baseLeft]);

  const emailStyle: CSSProperties = useMemo(() => {
    return {
      width: emailWidth,
      border: emailBorder,
      outline: emailOutline,
      backgroundColor: emailBackgroundColor,
      display: emailDisplay,
    };
  }, [
    emailWidth,
    emailBorder,
    emailOutline,
    emailBackgroundColor,
    emailDisplay,
  ]);

  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      border: frameDivBorder,
    };
  }, [frameDivBorder]);

  const inputTextStyle: CSSProperties = useMemo(() => {
    return {
      fontWeight: inputTextFontWeight,
      fontFamily: inputTextFontFamily,
    };
  }, [inputTextFontWeight, inputTextFontFamily]);

  return (
    <div
      className={`w-[370px] h-[84px] flex flex-col items-start justify-start gap-1.5 text-left text-sm text-text-color font-open-sans ${className}`}
      style={baseStyle}
    >
      <div className="relative font-light" style={emailStyle}>
        {email}
      </div>
      <div
        className="self-stretch h-[59px] relative border-black border-[1px] border-solid box-border text-base"
        style={frameDivStyle}
      >
        <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded bg-w-background border-grey-aa-large border-[1px] border-solid box-border">
          {showFrameDiv && (
            <div className="absolute top-[calc(50%_-_13.5px)] left-[12px] flex flex-row items-center justify-start gap-0.5">
              <div
                className="h-[22px] relative font-light inline-block"
                style={inputTextStyle}
              />
              <Cursor />
            </div>
          )}
          <input
            className="m-0 absolute top-[calc(50%_-_8px)] right-[12px] w-4 h-4"
            type="checkbox"
          />
        </div>
        <img
          className="absolute top-[calc(50%_-_8.5px)] right-[-28px] w-4 h-4 object-cover hidden"
          alt=""
          src="/icon-outside@2x.png"
        />
      </div>
      <div className="relative text-2xs font-light text-grey-aaa hidden">
        Hint or Error Message
      </div>
    </div>
  );
};

export default Base;
