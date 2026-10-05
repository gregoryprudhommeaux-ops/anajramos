import { profile } from "@/lib/profile";
import Image from "next/image";

type PortraitProps = {
  className?: string;
  priority?: boolean;
  sizes?: string;
  alt?: string;
};

export function Portrait({ className, priority = false, sizes, alt = profile.fullName }: PortraitProps) {
  return (
    <Image
      src="/ana-ramos.jpg"
      alt={alt}
      width={800}
      height={800}
      priority={priority}
      sizes={sizes}
      className={className}
    />
  );
}
