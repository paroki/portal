import { Container, Flex, Text } from "@radix-ui/themes";

const MisaDay = ({ hari, jam }: { hari: string; jam: string }) => {
  return (
    <Flex gap={"2"}>
      <Text weight="medium" style={{ width: "80px" }}>
        {hari}
      </Text>
      <Text>{jam}</Text>
    </Flex>
  );
};

export default function JadwalMisa() {
  return (
    <Container size={"1"}>
      <h1>Jadwal Misa</h1>
      <div className="misa-group">
        <h3>Misa Mingguan</h3>
        <MisaDay hari="Sabtu" jam="18:00" />
        <MisaDay hari="Minggu" jam="08:00" />
      </div>
      <div className="misa-group">
        <h3>Misa Harian</h3>
        <MisaDay hari="Senin" jam="06:00" />
        <MisaDay hari="Selasa" jam="06:00" />
        <MisaDay hari="Rabu" jam="18:00" />
        <MisaDay hari="Kamis" jam="06:00" />
        <MisaDay hari="Jumat" jam="18:00" />
      </div>
      <div className="misa-group">
        <h3>Misa Devosi Keluarga Kudus</h3>
        <MisaDay hari="Rabu" jam="18:00" />
      </div>
      <div className="misa-group">
        <h3>Jumat Pertama</h3>
        <MisaDay hari="Jumat" jam="18:00" />
      </div>
    </Container>
  );
}
