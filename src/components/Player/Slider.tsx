"use client";

import * as RadixSlider from "@radix-ui/react-slider";

const Slider = (value: any, onChange: any) => {
  // const handleChange = (newValue: any) => {
  //
  // };

  return (
    <RadixSlider.Root
      className={
        "relative flex items-center select-none touch-none w-full h-10"
      }
      defaultValue={[0.8]}
      value={value}
      onValueChange={(value) => onChange?.(value[0])}
      max={50}
      step={1}
      aria-label={"Volume"}
    >
      <RadixSlider.Track
        className={"bg-neutral-600 relative grow rounded-full h-[3px]"}
      >
        <RadixSlider.Range
          className={"absolute bg-white rounded-full h-full"}
        />
      </RadixSlider.Track>
    </RadixSlider.Root>
  );
};

export default Slider;
