import Image from "next/image";
import React from "react";
import logo from "@/public/assets/logo.png";
import Link from "next/link";

type Props = {
  width?: number;
  height?: number;
  logoTextSize?: string;
};

const Logo = ({
  width = 48,
  height = 48,
  logoTextSize = "text-3xl",
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
      <span className={`font-irish text-heading ${logoTextSize}`}>BCC</span>
    </Link>
  );
};

export default Logo;
