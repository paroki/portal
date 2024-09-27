import Jumbotron from '@/components/jumbotron';
import MainNews from '@/components/main-news';
import ContainerHeader from '@/components/container-header';
import Container from '@/components/ui/container';
import MisaSchedule from '@/components/schedule';
import Announcement from '@/components/announcement';
import Sacraments from '@/components/sacraments';
import Info from '@/components/info';

export default function Home() {
  return (
    <div>
      <Container className="max-w-screen-lg">
        <Jumbotron />
      </Container>
      <Container className="max-w-screen-lg">
        <ContainerHeader>Berita</ContainerHeader>
        <MainNews />
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
            <ContainerHeader>Akan Penerima Sakramen</ContainerHeader>
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
