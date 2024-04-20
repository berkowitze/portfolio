const EMAIL = "eliberkowitz@gmail.com";
const GITHUB = "github.com/berkowitze";

export default function Contact() {
  return (
    <div className="flex flex-col gap-2">
      <div>
        Email: <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
      </div>
      <div>
        Github: <a href={`https://${GITHUB}`}>{GITHUB}</a>
      </div>
    </div>
  );
}
