import Image from "next/image";
import logo from "../../../assets/logo.png";

export default function Logo() {
  return (
    <div className="flex flex-row">
    <div className="basis-128">
      <Image
        src={logo}
        alt="Keinstein Kids Academy Logo"
        width={140}
        height={140}
        className="object-contain"
      />
    </div>
    </div>
  );
}