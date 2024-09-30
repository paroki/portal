import { SharedImage } from "@pkrbt/openapi";
import Image from "next/image";

export default function BlockImage({ image }: { image: SharedImage }) {
  const file = image.file;
  if (!file) return <div></div>;
  return (
    <div>
      <Image
        width={file.width}
        height={file.height}
        src={`http://localhost:1337/${file.url}`}
        alt="Bold typography"
        style={{
          display: "block",
          objectFit: "cover",
          backgroundColor: "var(--gray-5)",
          maxWidth: "400px",
        }}
      />
    </div>
  );
}
