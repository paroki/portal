'use client';

import Address from './address';
import ContainerHeader from './container-header';
import ServiceTime from './service-time';
import SocialMedia from './social-media';

export default function Info() {
  return (
    <div className="grid gap-7 sm:grid-cols-2 md:grid-cols-3 text-sm leading-9">
      <div>
        <ContainerHeader size="smaller" className="text-center mb-4 border-b pb-2">
          Media Paroki
        </ContainerHeader>
        <SocialMedia />
      </div>
      <div>
        <ContainerHeader size="smaller" className="text-center mb-4 border-b pb-2">
          Jadwal Pelayanan
        </ContainerHeader>
        <ServiceTime />
      </div>
      <div>
        <ContainerHeader size="smaller" className="text-center mb-4 border-b pb-2">
          Alamat
        </ContainerHeader>
        <Address />
      </div>
    </div>
  );
}
