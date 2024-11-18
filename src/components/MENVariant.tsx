import { FunctionComponent } from "react";

export type MENVariantType = {
  className?: string;
};

const MENVariant: FunctionComponent<MENVariantType> = ({ className = "" }) => {
  return (
    <button
      className={`cursor-pointer [border:none] p-4 bg-azul w-[199px] rounded-lg flex flex-col items-start justify-start box-border ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-center">
        <div className="w-[140px] relative text-base leading-[24px] font-noto-sans text-w-background text-center inline-block shrink-0">
          REGISTRAR
        </div>
      </div>
    </button>
  );
};

export default MENVariant;
