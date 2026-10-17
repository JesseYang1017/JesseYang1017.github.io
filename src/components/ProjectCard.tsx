import type { Project } from "../data/projects";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const previewImage = project.thumbnail ?? project.images[0];

  return (
    <article className="group relative retro-panel bg-[#fffdf4] p-2">
      <div className="retro-titlebar mb-2 flex items-center justify-between">
        <span>{String(index + 1).padStart(2, "0")}</span>
        <span className="truncate pl-4">{project.category}</span>
      </div>
      <div className="aspect-[16/10] overflow-hidden border border-[#9ba9cc] bg-[#dce7ff] p-2">
        {previewImage ? (
          <img
            src={previewImage.src}
            alt={previewImage.alt}
            className="h-full w-full object-contain transition duration-300 group-hover:scale-[1.015]"
            loading="lazy"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(135deg,#e7efff,#fff7dc)] px-6 text-center">
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
              image pending
            </span>
          </div>
        )}
      </div>
      <div className="px-1 pb-1 pt-3">
        <h2 className="text-lg font-semibold text-[#263154] transition group-hover:text-[#9d4f25]">
          <a
            className="after:absolute after:inset-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9d4f25]"
            href={`/projects/${project.slug}`}
          >
            {project.title}
          </a>
        </h2>
        <p className="mt-1 text-sm leading-6 text-muted">{project.summary}</p>
        <p className="mt-3 border-t border-dotted border-[#a9b7da] pt-2 font-mono text-[11px] uppercase tracking-[0.08em] text-[#53617f]">
          {project.technologies.join(" / ")}
        </p>
        {project.showCardLinks ? (
          <div className="relative z-10 mt-3 flex flex-wrap gap-x-4 gap-y-2 font-mono text-[11px] text-[#53617f]">
            {project.videos.map((video) => (
              <a
                key={video.id}
                className="underline decoration-[#a9b7da] underline-offset-2 hover:text-[#9d4f25] focus-visible:text-[#9d4f25]"
                href={`https://youtu.be/${video.id}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {video.label} ↗
              </a>
            ))}
            {project.links.map((link) => (
              <a
                key={link.href}
                className="underline decoration-[#a9b7da] underline-offset-2 hover:text-[#9d4f25] focus-visible:text-[#9d4f25]"
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label} ↗
              </a>
            ))}
          </div>
        ) : null}
      </div>
    </article>
  );
}
