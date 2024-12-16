import React from "react";

// interface ProgressCompactProps {
//     refValue: MutableRefObject<HTMLInputElement | null>;
// }

const ProgressCompact = () => {
  return (
    <div
      className={"w-full h-[1px] absolute top-0 left-0 subtitle-text-color-bg"}
    >
      <div
        className={"inner-line button-color"}
        // ref={refValue}
      ></div>
    </div>
  );
};

export default ProgressCompact;
