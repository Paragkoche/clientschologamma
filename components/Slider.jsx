import Image from "next/image";

const data = [1,2,3]

const Slider1 = () => {
  return (
<div className="mt-[60px] md:mt-[2px]">
<Image src={"/landingpage.jpg"} width={1900} height={1050} className="w-screen  h-auto" />
</div>
  );
};

export default Slider1;
