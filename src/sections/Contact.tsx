const EMAIL = "eliberkowitz@gmail.com";

export default function Contact() {
  return (
    <div>
      Email: <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
    </div>
  );
}
