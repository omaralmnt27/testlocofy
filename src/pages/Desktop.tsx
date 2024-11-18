import { FunctionComponent } from "react";
import Base from "../components/Base";
import FrameComponent from "../components/FrameComponent";
import MENVariant from "../components/MENVariant";

const Desktop: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-w-background overflow-hidden flex flex-col items-end justify-start pt-[117px] px-[281px] pb-[139px] box-border gap-[37px] leading-[normal] tracking-[normal] text-center text-11xl text-black font-suranna lg:pl-[140px] lg:pr-[140px] lg:box-border mq750:pl-5 mq750:pr-5 mq750:box-border mq450:gap-[18px] mq450:pl-[70px] mq450:pr-[70px] mq450:box-border">
      <div className="w-[313px] h-[84px] absolute !m-[0] top-[160px] left-[359px] [backdrop-filter:blur(4px)]" />
      <div className="w-[789px] flex flex-row items-start justify-center max-w-full">
        <div className="w-[379px] flex flex-row items-start justify-start relative max-w-full">
          <footer className="h-[872px] w-[878px] absolute !m-[0] right-[-417px] bottom-[-855px]">
            <div className="absolute top-[0px] left-[508px] [backdrop-filter:blur(4px)] w-[370px] h-[846px]" />
            <div className="absolute top-[26px] left-[316px] [backdrop-filter:blur(4px)] w-[370px] h-[846px] z-[1]" />
            <div className="absolute top-[23px] left-[0px] bg-midnightblue border-black border-[1px] border-solid box-border w-[564px] h-[5px] z-[2]" />
            <div className="absolute top-[632px] left-[0px] bg-midnightblue w-[564px] h-[5px] z-[2]" />
          </footer>
          <div className="h-[34px] flex-1 relative leading-[24px] inline-block max-w-full mq750:text-lg mq750:leading-[14px] mq1025:text-5xl mq1025:leading-[19px]">
            REGISTRO DE CLIENTE
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start pt-0 px-0 pb-[83px] box-border gap-6 max-w-full mq450:pb-[54px] mq450:box-border">
        <div className="flex flex-row items-start justify-center gap-[73px] max-w-full mq750:gap-[18px] mq1025:gap-9 mq1025:flex-wrap">
          <div className="flex flex-col items-start justify-start gap-[30px] max-w-full">
            <Base email="Teléfono" showFrameDiv />
            <Base
              basePosition="unset"
              baseTop="unset"
              baseLeft="unset"
              email="Apellido"
              emailWidth="unset"
              emailBorder="unset"
              emailOutline="unset"
              emailBackgroundColor="unset"
              emailDisplay="unset"
              frameDivBorder="unset"
              showFrameDiv
              inputTextFontWeight="300"
              inputTextFontFamily="'Open Sans'"
            />
          </div>
          <div className="flex flex-col items-start justify-start gap-[21px] max-w-full">
            <Base
              basePosition="unset"
              baseTop="unset"
              baseLeft="unset"
              email="Email"
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
              email="Nacionalidad"
              emailWidth="calc(100% - 0px)"
              emailBorder="none"
              emailOutline="none"
              emailBackgroundColor="transparent"
              emailDisplay="inline-block"
              frameDivBorder="1px solid #000"
              showFrameDiv
              inputTextFontWeight="300"
              inputTextFontFamily="'Open Sans'"
            />
          </div>
        </div>
        <div className="self-stretch flex flex-row items-end justify-center flex-wrap content-end gap-[73px] max-w-full mq750:gap-[18px] mq1025:gap-9">
          <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-px box-border min-w-[240px] max-w-full">
            <div className="self-stretch flex flex-col items-start justify-start gap-[26px]">
              <div className="self-stretch flex flex-col items-start justify-start gap-[18px]">
                <Base
                  basePosition="unset"
                  baseTop="unset"
                  baseLeft="unset"
                  email="Tipo documento"
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
                  email="Numeración"
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
              <div className="self-stretch h-[84px] relative">
                <Base
                  basePosition="absolute"
                  baseTop="0px"
                  baseLeft="0px"
                  email="Fecha de nacimiento"
                  emailWidth="calc(100% - 0px)"
                  emailBorder="none"
                  emailOutline="none"
                  emailBackgroundColor="transparent"
                  emailDisplay="inline-block"
                  frameDivBorder="unset"
                  showFrameDiv={false}
                  inputTextFontWeight="unset"
                  inputTextFontFamily="Inter"
                />
                <img
                  className="absolute top-[28px] left-[28.3px] w-[32.2px] h-[36.1px] overflow-hidden z-[1]"
                  alt=""
                  src="/calendar.svg"
                />
              </div>
            </div>
          </div>
          <FrameComponent />
        </div>
      </div>
      <div className="flex flex-row items-start justify-end py-0 px-[279px] box-border max-w-full mq750:pl-5 mq750:pr-5 mq750:box-border mq450:pl-[139px] mq450:pr-[139px] mq450:box-border">
        <MENVariant />
      </div>
    </div>
  );
};

export default Desktop;
