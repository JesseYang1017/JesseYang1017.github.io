import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

export default function Home() {
  return (
    <main className="page-shell">
      <section className="retro-panel">
        <div className="retro-titlebar">Welcome</div>
        <div className="grid gap-4 p-4 sm:grid-cols-[1fr_auto] sm:items-end sm:p-5">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-[#9d4f25]">
              Technical Art / Computer Graphics / AR & VR
            </p>
            <h1 className="mt-3 text-3xl font-semibold text-[#263154] sm:text-4xl">
              Xinyi (Jesse) Yang
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-muted sm:text-base">
              MSc Computer Science - Augmented and Virtual Reality at Trinity College Dublin. Building
              work around shaders, real-time rendering, procedural materials,
              immersive systems, and games.
            </p>
          </div>
          <div
            aria-hidden="true"
            className="hidden border border-[#8c9dcb] bg-[#eef4ff] px-3 py-2 font-mono text-[11px] uppercase tracking-[0.12em] text-muted shadow-[inset_1px_1px_0_#ffffff] sm:block"
          >
            portfolio index
          </div>
        </div>
      </section>

      <section className="mt-5 grid gap-4 md:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard key={project.slug} project={project} index={index} />
        ))}
      </section>
    </main>
  );
}
