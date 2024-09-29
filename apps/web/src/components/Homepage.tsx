"use client";

import Jumbotron from "@/components/jumbotron";
import ContainerHeader from "@/components/container-header";
import Container from "@/components/ui/container";
import MisaSchedule from "@/components/schedule";
import Announcement from "@/components/announcement";
import Sacraments from "@/components/sacraments";
import Info from "@/components/info";
import { Text } from "@radix-ui/themes";
import Rings from "@/components/icons/rings";
import { Berita, PagedCollection } from "@pkrbt/openapi";
import BeritaCaraousel from "./berita/caraousel";

export default function Homepage({
  listBerita,
}: {
  listBerita: PagedCollection<Berita>;
}) {
  return (
    <div>
      <Container className="max-w-screen-lg">
        <Jumbotron />
      </Container>
      <Container className="max-w-screen-lg">
        <ContainerHeader>Berita</ContainerHeader>
        <BeritaCaraousel listBerita={listBerita} />
      </Container>
      <Container className="bg-primary-50">
        <div className="max-w-screen-lg mx-auto">
          <ContainerHeader>Jadwal Misa</ContainerHeader>
          <MisaSchedule />
        </div>
      </Container>
      <Container className="bg-gray-50">
        <div className="flex flex-col md:flex-row w-full gap-8 max-w-screen-lg mx-auto ">
          <div className="grow max-w-[380px] md:border-r md:pr-8">
            <ContainerHeader>Pengumuman</ContainerHeader>
            <Announcement />
          </div>
          <div className="grow">
            <div className="flex gap-5 items-center">
              <Rings />
              <div>
                <ContainerHeader>Akan Menerima Sakramen</ContainerHeader>
                <Text as="p" className="text-sm">
                  Jika umat mengetahui adanya halangan perkawinan ini, wajib
                  memberitahu pastor paroki
                </Text>
              </div>
            </div>
            <Sacraments />
          </div>
        </div>
      </Container>
      <Container className="bg-white">
        <div className="max-w-screen-lg mx-auto ">
          <Info />
        </div>
      </Container>
    </div>
  );
}
