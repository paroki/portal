import { Frank_Ruhl_Libre as Frank } from 'next/font/google';
import { Text } from '@radix-ui/themes';
import api from '@/utils/strapi';
import DateReadable from './date';

const frank = Frank({
  subsets: ['latin']
});

export default async function Sacraments() {
  const { data: datas } = await api.fetch.GET('/an-marriages', {
    params: {
      query: {
        'pagination[limit]': 4
      }
    }
  });

  if (!datas) {
    throw new Error();
  }

  return (
    <>
      {datas.data?.map((data, index) => (
        <div className="marriage-el-children-container" key={index}>
          <div className="marriage-el-children">
            <div className="w-64">
              <h4>{data.groomName}</h4>
              <Text as="p" className="text-sm">
                {data.groomFrom}
              </Text>
            </div>
            <div className={`text-2xl md:text-5xl text-primary-400 text-center p-4 ${frank.className}`}>&</div>
            <div className="w-64 text-right">
              <h4>{data.brideName}</h4>
              <Text as="p" className="text-sm">
                {data.brideFrom}
              </Text>
            </div>
          </div>
          <div className="flex w-full justify-center gap-6 text-sm text-gray-500">
            <DateReadable isoDate={data.startAt} year /> - <DateReadable isoDate={data.endAt} year />
          </div>
        </div>
      ))}
    </>
  );
}
