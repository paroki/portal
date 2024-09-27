'use client';

import { Text } from '@radix-ui/themes';

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
        from: 'St. Fransiskus Asisi Samarinda'
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
        <div key={index} className="flex justify-between items-center border-b py-4">
          <div className="hidden md:block">
            <Text as="p" className="p-2 rounded bg-primary-200">
              {index + 1}
            </Text>
          </div>
          <div>
            <h4>{data.groom.name}</h4>
            <Text as="p" className="text-sm">
              {data.groom.from}
            </Text>
          </div>
          <div className="text-md md:text-2xl text-primary-600 text-center p-4">&</div>
          <div>
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
