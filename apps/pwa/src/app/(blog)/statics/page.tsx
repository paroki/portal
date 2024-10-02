import StaticView from "@/components/static/view";
import api from "@/utils/api";

// TODO: should be fixed by openapi libs
export const dynamic = "force-dynamic";

export default async function StaticPage() {
  const { items, meta } = await api.static.search();

  if (!meta) {
    return {
      notFound: true,
    };
  }

  return (
    <div>
      <div>
        {items.map((item, index) => (
          <StaticView key={index} item={item} />
        ))}
      </div>
      <pre>{JSON.stringify(meta, undefined, 2)}</pre>
    </div>
  );
}
