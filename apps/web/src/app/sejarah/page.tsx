import lipsum from "@/utils/lipsum";

export default function Page() {
  return (
    <div>
      <h1 className="page-title">Sejarah</h1>
      <div>
        <p>{lipsum.generateSentences(10)}</p>
        <p>{lipsum.generateSentences(8)}</p>
        <p>{lipsum.generateSentences(24)}</p>
      </div>
    </div>
  );
}
