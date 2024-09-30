'use client';

import { Frank_Ruhl_Libre as Frank } from 'next/font/google';
import { Text } from '@radix-ui/themes';

const frank = Frank({
  subsets: ['latin']
});

export default function Sacraments() {
  interface Base {
    name: string;
    from: string;
  }

  interface Groom extends Base {}
  interface Bride extends Base {}

  interface SacramentsType {
    groom: Groom;
    bride: Bride;
  }
  const datas: SacramentsType[] = [
    {
      bride: {
        name: 'Dian',
        from: 'Lingkungan St. Fransiskus Asisi Samarinda Kecamatan Sangkulirang'
      },
      groom: {
        name: 'Doni',
        from: 'St. Fardinandus Barong Tongkok'
      }
    },

    {
      bride: {
        name: 'Kalina',
        from: 'St. Fransiskus Asisi Samarinda'
      },
      groom: {
        name: 'Kamarudin',
        from: 'St. Fardinandus Barong Tongkok'
      }
    }
  ];

  return (
    <>
      {datas.map((data, index) => (
        <div key={index} className="flex justify-between items-start border-b py-4 gap-2">
          <div className="w-64">
            <h4>{data.groom.name}</h4>
            <Text as="p" className="text-sm">
              {data.groom.from}
            </Text>
          </div>
          <div className={`text-xl md:text-3xl text-primary-400 text-center p-4 ${frank.className}`}>&</div>
          <div className="w-64 text-right">
            <h4>{data.bride.name}</h4>
            <Text as="p" className="text-sm">
              {data.bride.from}
            </Text>
          </div>
        </div>
      ))}
    </>
  );
}
