import Image from "next/image";
import lipsum from "@/util/lipsum";
import { Flex } from "@radix-ui/themes";

export default function Page() {
  return (
    <div>
      <h1>Berita</h1>

      {/* daftar berita */}
      <div>
        <div>
          <h3>Berita 1</h3>
          <Flex gap="4">
            {/* excerpt/first paragpraph */}
            <div style={{ width: "200px" }}>
              <Image
                style={{ objectFit: "cover" }}
                width={200}
                height={140}
                src="https://i.imgur.com/3vMyPVu.jpeg"
                alt="sample image"
              />
            </div>
            <p>{lipsum.generateParagraphs(1)}</p>
          </Flex>
        </div>
        <div>
          <h3>Berita 2</h3>
          <Flex gap="4">
            <Image
              style={{ objectFit: "cover" }}
              width={200}
              height={140}
              src="https://i.imgur.com/3vMyPVu.jpeg"
              alt="sample image"
            />
            {/* excerpt/first paragpraph */}
            <p>{lipsum.generateParagraphs(1)}</p>
          </Flex>
        </div>
      </div>
    </div>
  );
}
