import Image from "next/image";
import React from "react";
import logo from "@/public/assets/logo.png";
import Link from "next/link";

type Props = {
  width?: number;
  height?: number;
  logoTextColor?: string;
  logoTextSize?: string;
};

const Logo = ({
  width = 42,
  height = 43,
  logoTextColor = "text-body",
  logoTextSize = "text-2xl",
}: Props) => {
  return (
    <Link href="/" className="flex items-center justify-center">
      <Image
        src={logo}
        alt="Blogger's Chamber of Commerce"
        width={width}
        height={height}
        className="object-cover"
      />
      <span className={`font-irish ${logoTextColor} ${logoTextSize}`}>BCC</span>
    </Link>
  );
};

export default Logo;
