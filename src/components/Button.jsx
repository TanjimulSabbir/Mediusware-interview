export default function Button({
  children,
  onClick,
  disabled,
  className = "",
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`bg-primary-3 sm:text-6 text-4 font-normal sm:h-[56px] h-[48px] leading-6 transition text-white flex items-center lg:text-lg text-base duration-300 ease-in-out transform hover:scale-105 active:scale-95 p-6 rounded-md
        ${disabled ? "opacity-50 cursor-not-allowed" : ""}
        ${className}`}
    >
      {children}
    </button>
  );
}
