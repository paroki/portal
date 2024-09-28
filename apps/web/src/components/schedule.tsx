const Day = ({ day, time }: { day: string; time: string }) => {
  return (
    <div className="flex">
      <div className="flex-[2] font-bold text-primary-600">{day}</div>
      <div className="flex-[1]">{time}</div>
    </div>
  );
};

interface ContainerHeaderType {
  children: React.ReactNode; // Deklarasikan tipe children
}

const Header = ({ children }: ContainerHeaderType) => {
  return (
    <h4 className="my-2 border-y border-gray-500 text-sm py-4 w-full text-center">
      {children}
    </h4>
  );
};

export default function MisaSchedule() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 text-sm leading-9">
      <div className="misa-group">
        <Header>Misa Mingguan</Header>
        <Day day="Sabtu" time="18:00" />
        <Day day="Minggu" time="08:00" />
      </div>
      <div className="misa-group">
        <Header>Misa Harian</Header>
        <Day day="Senin" time="06:00" />
        <Day day="Selasa" time="06:00" />
        <Day day="Rabu" time="18:00" />
        <Day day="Kamis" time="06:00" />
        <Day day="Jumat" time="18:00" />
      </div>
      <div className="misa-group">
        <Header>Misa Devosi Keluarga Kudus</Header>
        <Day day="Rabu" time="18:00" />
      </div>
      <div className="misa-group">
        <Header>Jumat Pertama</Header>
        <Day day="Jumat" time="18:00" />
      </div>
    </div>
  );
}
