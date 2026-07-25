type LoadingSpinnerProps = {
  visible: boolean;
};

export default function LoadingSpinner({
  visible,
}: LoadingSpinnerProps) {
  if (!visible) {
    return null;
  }

  return (
    <div
      className="
        fixed inset-0
        z-[9999]
        flex items-center justify-center
        bg-black/30
      "
      aria-hidden={false}
    >
      <div
        className="
          flex
          h-20 w-20
          items-center justify-center
          rounded-full
          bg-white/90
          p-4
          shadow-lg
        "
        role="status"
        aria-label="Chargement"
      >
        <svg
          className="
            h-12 w-12
            animate-spin
            text-antique-800
          "
          viewBox="0 0 50 50"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="25"
            cy="25"
            r="20"
            fill="none"
            stroke="currentColor"
            strokeWidth="5"
            strokeOpacity="0.25"
          />

          <path
            fill="currentColor"
            d="M43.935 25.145c0-10.318-8.364-18.682-18.682-18.682S6.571 14.827 6.571 25.145h4.068c0-8.073 6.541-14.614 14.614-14.614s14.614 6.541 14.614 14.614h4.068z"
          />
        </svg>
      </div>
    </div>
  );
}