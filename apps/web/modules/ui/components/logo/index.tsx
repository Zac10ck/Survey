import Image from "next/image";

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
}

export const Logo = ({ className, width = 200, height = 50, ...props }: LogoProps & Record<string, any>) => {
  return (
    <Image
      src="/logo-transparent.png"
      alt="Medas Survey"
      width={width}
      height={height}
      className={className}
      priority
      {...props}
    />
  );
};
