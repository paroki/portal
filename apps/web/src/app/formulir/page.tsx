import lipsum from "@/utils/lipsum";

export default function Sakramen() {
  return (
    <div>
      <h1>Formulir</h1>
      <div>
        <p>{lipsum.generateSentences(8)}</p>
        <p>{lipsum.generateSentences(10)}</p>
        <p>{lipsum.generateSentences(14)}</p>
        <p>{lipsum.generateSentences(20)}</p>
      </div>
    </div>
  );
}
