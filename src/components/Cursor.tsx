import { FunctionComponent } from "react";

export type CursorType = {
  className?: string;
};

const Cursor: FunctionComponent<CursorType> = ({ className = "" }) => {
  return (
    <div className={`w-0.5 relative h-[27px] ${className}`}>
      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-blue" />
    </div>
  );
};

export default Cursor;
