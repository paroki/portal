import api from "@/utils/api";

interface Props {}

// TODO: should be fixed by openapi libs
export const dynamic = "force-dynamic";

export default async function OrganizationPage({}: Props) {
  const { items, meta } = await api.org.search();
  if (!meta) {
    return {
      notFound: true,
    };
  }

  return (
    <div>
      <div>
        <h1>Daftar Organisasi</h1>
        <div>
          {items.map((item, index) => (
            <div key={index} className="bg-slate-100">
              <h2>{item.name}</h2>
            </div>
          ))}
        </div>
        <pre>{JSON.stringify(meta, undefined, 2)}</pre>
      </div>
    </div>
  );
}
