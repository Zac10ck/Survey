import Image from "next/image";

interface MedasLogoProps {
  className?: string;
  width?: number;
  height?: number;
}

export const FormbricksLogo = ({ className, width = 40, height = 40 }: MedasLogoProps) => {
  return (
    <Image
      src="/logo-transparent.png"
      alt="Medas Survey"
      width={width}
      height={height}
      className={className}
      priority
    />
  );
};

// Alias for clarity
export const MedasLogo = FormbricksLogo;
