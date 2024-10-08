import Container from '@/components/ui/container';
import Jumbotron from '@/components/jumbotron';
import ContainerHeader from '@/components/container-header';
import MainNews from '@/components/main-news';
import MisaSchedule from '@/components/schedule';
import Announcement from '@/components/announcement';
import Sacraments from '@/components/sacraments';
import Rings from '@/components/icons/rings';
import { Text } from '@radix-ui/themes';
import { getArticles, getMarriages } from '@/utils/api';
import ErrorBoundary from '@/components/ui/error-boundaries';

// TODO: find a way to remove the line below
export const dynamic = 'force-dynamic';

export default async function Home() {
  try {
    const articles = await getArticles();
    const marriages = await getMarriages();

    return (
      <ErrorBoundary>
        <div>
          <Container>
            <div className="max-w-screen-lg mx-auto">
              <Jumbotron />
            </div>
          </Container>
          <Container className="bg-gray-50">
            <div className="max-w-screen-lg mx-auto">
              <ContainerHeader>Artikel</ContainerHeader>
              <MainNews articles={articles} />
            </div>
          </Container>
          <Container className="bg-white">
            <div className="max-w-screen-lg mx-auto">
              <ContainerHeader>Jadwal Misa</ContainerHeader>
              <MisaSchedule />
            </div>
          </Container>
          <Container className="bg-gray-50">
            <div className="max-w-screen-lg mx-auto">
              <ContainerHeader className="text-base">Pengumuman</ContainerHeader>
              <Announcement />
            </div>
          </Container>
          <Container className="bg-gray-50">
            <div className="max-w-screen-lg mx-auto">
              <div className="flex gap-5 items-center flex-col md:flex-row">
                <Rings />
                <div>
                  <ContainerHeader className="text-base">Akan Menerima Sakramen Perkawinan</ContainerHeader>
                  <Text as="p" className="text-sm">
                    Jika umat mengetahui adanya halangan perkawinan ini, wajib memberitahu pastor paroki
                  </Text>
                </div>
              </div>
              <Sacraments datas={marriages} />
            </div>
          </Container>
        </div>
      </ErrorBoundary>
    );
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    throw new Error(error);
  }
}
