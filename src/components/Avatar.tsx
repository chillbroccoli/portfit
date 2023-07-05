import Image from "next/image";

export function Avatar({ src }: { src: string }) {
  return (
    <Image
      src={src}
      alt=""
      width={64}
      height={64}
      className="inline-block border-2 rounded-full border-lime-500"
    />
  );
}
