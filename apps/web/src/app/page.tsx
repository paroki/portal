import { strapi } from '@/util/strapi';
import Homepage from '@/components/Homepage';

export default function Home() {
  return (
    <div>
      <Container>
        <div className="max-w-screen-lg mx-auto">
          <Jumbotron />
        </div>
      </Container>
      <Container className="bg-gray-50">
        <div className="max-w-screen-lg mx-auto">
          <ContainerHeader>Berita</ContainerHeader>
          <MainNews />
        </div>
      </Container>
      <Container className="bg-white">
        <div className="max-w-screen-lg mx-auto">
          <ContainerHeader>Jadwal Misa</ContainerHeader>
          <MisaSchedule />
        </div>
      </Container>
      <Container className="bg-gray-50">
        <div className="flex flex-col md:flex-row w-full gap-8 max-w-screen-lg mx-auto ">
          <div className="grow max-w-[380px] md:border-r md:pr-8">
            <ContainerHeader className="text-base">Pengumuman</ContainerHeader>
            <Announcement />
          </div>
          <div className="grow">
            <div className="flex gap-5 items-center">
              <Rings />
              <div>
                <ContainerHeader className="text-base">Akan Menerima Sakramen Perkawinan</ContainerHeader>
                <Text as="p" className="text-sm">
                  Jika umat mengetahui adanya halangan perkawinan ini, wajib memberitahu pastor paroki
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
