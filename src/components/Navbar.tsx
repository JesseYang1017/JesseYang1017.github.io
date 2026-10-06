export default function Navbar() {
  return (
    <header className="page-shell pb-0 text-sm">
      <div className="retro-panel">
        <div className="retro-titlebar flex items-center justify-between gap-3">
          <a href="/" className="font-semibold transition hover:text-[#9d4f25]">
            Xinyi Yang
          </a>
        </div>
        <nav
          aria-label="Primary navigation"
          className="flex flex-wrap items-center gap-2 bg-[#eef4ff] px-3 py-2"
        >
          <a className="nav-link" href="/">
            Work
          </a>
          <a className="nav-link" href="/about">
            About
          </a>
          <a className="nav-link" href="/Jesse_Yang_Resume.pdf">
            Resume
          </a>
          <a className="nav-link" href="https://github.com/JesseYang1017">
            GitHub
          </a>
        </nav>
      </div>
    </header>
  );
}
