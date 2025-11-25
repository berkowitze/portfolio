const EMAIL = "eliberkowitz@gmail.com";
const GITHUB = "github.com/berkowitze";
const ARTSTATION = "artstation.com/eliberkowitz";

export default function SocialIcons({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <SocialIcon
        href={`mailto:${EMAIL}`}
        ariaLabel="Email"
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="grayscale"
          >
            <rect width="20" height="16" x="2" y="4" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          </svg>
        }
      />
      <SocialIcon
        href={`https://${GITHUB}`}
        ariaLabel="GitHub"
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="grayscale"
          >
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
            <path d="M9 18c-4.51 2-5-2-7-2" />
          </svg>
        }
      />
      <SocialIcon
        href={`https://${ARTSTATION}`}
        ariaLabel="ArtStation"
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 208.8 195.9"
            fill="currentColor"
            className="grayscale"
            style={{ transform: "scale(1.5)" }}
          >
            <path d="M51.4,123.3l8.9,15.4l0,0c1.8,3.5,5.4,5.9,9.5,5.9l0,0l0,0h59.3l-12.3-21.3H51.4z" />
            <path d="M157.2,123.4c0-2.1-0.6-4.1-1.7-5.8l-34.8-60.4c-1.8-3.4-5.3-5.7-9.4-5.7H92.9l53.7,93l8.5-14.7C156.7,127,157.2,125.8,157.2,123.4z" />
            <polygon points="108.1,108.1 84.2,66.6 60.2,108.1" />
          </svg>
        }
      />
    </div>
  );
}

function SocialIcon({
  href,
  ariaLabel,
  icon,
}: {
  href: string;
  ariaLabel: string;
  icon: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="no-underline-ani text-gray-600 transition-colors hover:text-gray-800"
      aria-label={ariaLabel}
    >
      {icon}
    </a>
  );
}
