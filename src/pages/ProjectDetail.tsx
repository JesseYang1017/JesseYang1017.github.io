import VideoEmbed from "../components/VideoEmbed";
import type { Project } from "../data/projects";

type ProjectDetailProps = {
  project?: Project;
};

const shaderProjectSlugs = new Set([
  "stylized-toon-shader",
  "procedural-weathered-metal",
]);

export default function ProjectDetail({ project }: ProjectDetailProps) {
  if (!project) {
    return (
      <main className="page-shell max-w-3xl">
        <p className="font-mono text-xs uppercase tracking-[0.16em] text-[#9d4f25]">
          Missing project
        </p>
        <h1 className="mt-4 text-4xl">Project not found</h1>
        <a className="button-link mt-8" href="/">
          Back to Work
        </a>
      </main>
    );
  }

  return (
    <main className="page-shell max-w-5xl">
      <a className="button-link" href="/">
        Back to Work
      </a>

      <section className="retro-panel mt-4">
        <div className="retro-titlebar">{project.category} / Overview</div>
        <div className="p-4 sm:p-5">
          <h1 className="text-3xl font-semibold text-[#263154] sm:text-4xl">
            {project.title}
          </h1>
          <div className="mt-5 max-w-3xl space-y-4 text-sm leading-7 text-muted sm:text-base">
            {project.overview.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {shaderProjectSlugs.has(project.slug) && project.links.length > 0 ? (
        <section className="section-block">
          <h2 className="section-title">GitHub</h2>
          <div className="flex flex-wrap gap-3">
            {project.links.map((link) => (
              <a key={link.href} className="button-link" href={link.href} target="_blank" rel="noreferrer">
                {link.label}
              </a>
            ))}
          </div>
        </section>
      ) : null}

      {project.features?.length ? (
        <section className="section-block">
          <h2 className="section-title">Key Features</h2>
          <ul className="grid gap-2 text-sm text-muted sm:grid-cols-2">
            {project.features.map((feature) => (
              <li key={feature.title} className="border border-dotted border-[#a9b7da] bg-[#f8fbff] px-3 py-2 leading-6">
                <strong className="text-[#263154]">{feature.title}:</strong>{" "}
                {feature.description}
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {project.implementation ? (
        <section className="section-block">
          <h2 className="section-title">
            {project.implementationTitle ?? "Implementation"}
          </h2>
          <p className="max-w-3xl text-sm leading-7 text-muted sm:text-base">
            {project.implementation}
          </p>
        </section>
      ) : null}

      {project.videos.length > 0 ? (
        <section className="section-block">
          <h2 className="section-title">Video</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {project.videos.map((video) => (
              <VideoEmbed key={video.id} video={video} />
            ))}
          </div>
        </section>
      ) : null}

      {project.images.length > 0 ? (
        <section className="section-block">
          <h2 className="section-title">Images</h2>
          <div className="grid gap-4">
            {project.images.map((image) => (
              <figure key={image.src} className="border border-[#9ba9cc] bg-[#eef4ff] p-2 shadow-[inset_1px_1px_0_#ffffff]">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="mx-auto h-auto max-h-[760px] w-auto max-w-full border border-[#b6c1df] bg-[#dce7ff]"
                  loading="lazy"
                />
              </figure>
            ))}
          </div>
        </section>
      ) : null}

      <section className="section-block">
        <h2 className="section-title">Technologies</h2>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span key={technology} className="tag">
              {technology}
            </span>
          ))}
        </div>
      </section>

      {!shaderProjectSlugs.has(project.slug) && project.links.length > 0 ? (
        <section className="section-block">
          <h2 className="section-title">Links</h2>
          <div className="flex flex-wrap gap-3">
            {project.links.map((link) => (
              <a key={link.href} className="button-link" href={link.href} target="_blank" rel="noreferrer">
                {link.label}
              </a>
            ))}
          </div>
        </section>
      ) : null}
    </main>
  );
}
