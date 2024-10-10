'use client';

import Container from '@/components/ui/container';

export default function Error() {
  return (
    <Container>
      <div className="max-w-screen-lg mx-auto bg-gray-100 p-6 rounded-lg border-4 border-dashed">
        <h2 className="font-bold uppercase tracking-widest">Ada kesalahan!</h2>
        <p>Telah terjadi galat, situs tidak dapat diakses untuk sementara waktu.</p>
      </div>
    </Container>
  );
}
