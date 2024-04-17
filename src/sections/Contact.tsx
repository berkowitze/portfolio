const EMAIL = "eliberkowitz@gmail.com";

export default function Contact() {
  return (
    <table>
      <tr>
        <td>Email:</td>
        <td>
          <a href={`mailto:${EMAIL}`} target="_self">
            {EMAIL}
          </a>
        </td>
      </tr>
    </table>
  );
}
