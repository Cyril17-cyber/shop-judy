import constructionIllustration from "@/app/public/Software-engineer-bro.png";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="min-h-dvh min-w-dvw flex flex-col items-center justify-center">
      <Image
        src={constructionIllustration}
        alt="illustration"
        width={500}
        height={500}
        className="object-cover"
      />
      <h1 className="text-xl font-semibold">
        This page is still under construction
      </h1>
    </div>
  );
}
