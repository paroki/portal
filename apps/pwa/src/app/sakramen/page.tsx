import lipsum from "@/util/lipsum";

export default function Sakramen() {
  const paragraphs = [lipsum.generateSentences()];
  return (
    <div>
      <h1>Sakramen</h1>
      <div>
        <p>{lipsum.generateSentences(8)}</p>
        <p>{lipsum.generateSentences(10)}</p>
        <p>{lipsum.generateSentences(14)}</p>
        <p>{lipsum.generateSentences(20)}</p>
      </div>
    </div>
  );
}
