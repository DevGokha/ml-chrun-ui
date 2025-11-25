export default function ThemeToggle({ dark, setDark }: any) {
  return (
    <button
      onClick={() => setDark(!dark)}
      className="px-4 py-2 rounded-lg border bg-gray-200 text-black dark:bg-gray-700 dark:text-white"
    >
      {dark ? "Light Mode" : "Dark Mode"}
    </button>
  );
}
