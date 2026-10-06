export default function About() {
  return (
    <main className="page-shell max-w-3xl">
      <section className="retro-panel">
        <div className="retro-titlebar">About</div>
        <div className="p-4 sm:p-5">
          <h1 className="text-3xl font-semibold text-[#263154] sm:text-4xl">
            Jesse Yang
          </h1>
          <div className="mt-5 space-y-4 text-sm leading-7 text-muted sm:text-base">
            <p>
              I am a computer graphics and immersive media developer focused on
              technical art, real-time rendering, shader programming, procedural
              materials, AR/VR, 3D modeling and animation, and game development.
            </p>
            <p>
              I am pursuing an MSc in Computer Science with an Augmented and
              Virtual Reality focus at Trinity College Dublin from 2026 to 2027.
              I completed a BSc in Computer Sciences at the University of
              Wisconsin-Madison in 2025.
            </p>
            <p>
              This portfolio is built for technical artist, graphics programmer,
              and related graduate roles in the games industry.
            </p>
          </div>
        </div>
      </section>

      <div className="mt-10 grid gap-3 sm:grid-cols-2">
        <a className="button-link" href="/Jesse_Yang_Resume.pdf">
          Resume
        </a>
        <a className="button-link" href="https://github.com/JesseYang1017">
          GitHub
        </a>
      </div>
    </main>
  );
}
