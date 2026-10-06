import VideoEmbed from "../components/VideoEmbed";
import type { Project, ProjectImage, ProjectLink } from "../data/projects";

type ProjectDetailProps = {
  project?: Project;
};

type ProjectTemplate = "flagship" | "technical" | "creative";

const flagshipProjectSlugs = new Set([
  "stylized-toon-shader",
  "procedural-weathered-metal",
]);

const technicalProjectSlugs = new Set(["nist", "explore-shipwreck"]);

function getProjectTemplate(project: Project): ProjectTemplate {
  if (flagshipProjectSlugs.has(project.slug)) {
    return "flagship";
  }

  if (technicalProjectSlugs.has(project.slug)) {
    return "technical";
  }

  return "creative";
}

function formatLinkLabel(link: ProjectLink) {
  return link.label.toLowerCase() === "github"
    ? "View Source on GitHub ↗"
    : link.label;
}

function OverviewPanel({ project }: { project: Project }) {
  return (
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
        <div className="mt-5 flex flex-wrap items-center gap-2">
          {project.technologies.map((technology) => (
            <span key={technology} className="tag">
              {technology}
            </span>
          ))}
          {project.links.map((link) => (
            <a
              key={link.href}
              className="button-link"
              href={link.href}
              target="_blank"
              rel="noreferrer"
            >
              {formatLinkLabel(link)}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function TextSection({
  title,
  paragraphs,
}: {
  title: string;
  paragraphs?: string[];
}) {
  if (!paragraphs?.length) {
    return null;
  }

  return (
    <section className="section-block">
      <h2 className="section-title">{title}</h2>
      <div className="max-w-3xl space-y-4 text-sm leading-7 text-muted sm:text-base">
        {paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}

function MediaImage({ image }: { image: ProjectImage }) {
  return (
    <figure className="border border-[#9ba9cc] bg-[#eef4ff] p-2 shadow-[inset_1px_1px_0_#ffffff]">
      <img
        src={image.src}
        alt={image.alt}
        className="mx-auto h-auto max-h-[760px] w-auto max-w-full border border-[#b6c1df] bg-[#dce7ff]"
        loading="lazy"
      />
    </figure>
  );
}

function MediaSection({
  project,
  title,
}: {
  project: Project;
  title: string;
}) {
  if (project.videos.length > 0) {
    return (
      <section className="section-block">
        <h2 className="section-title">{title}</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {project.videos.map((video) => (
            <VideoEmbed key={video.id} video={video} />
          ))}
        </div>
      </section>
    );
  }

  const previewImage = project.thumbnail ?? project.images[0];

  if (!previewImage) {
    return null;
  }

  return (
    <section className="section-block">
      <h2 className="section-title">{title}</h2>
      <MediaImage image={previewImage} />
    </section>
  );
}

function FeaturesSection({
  project,
  title,
}: {
  project: Project;
  title: string;
}) {
  if (!project.features?.length) {
    return null;
  }

  return (
    <section className="section-block">
      <h2 className="section-title">{title}</h2>
      <ul className="grid gap-2 text-sm text-muted sm:grid-cols-2">
        {project.features.map((feature) => (
          <li
            key={feature.title}
            className="border border-dotted border-[#a9b7da] bg-[#f8fbff] px-3 py-2 leading-6"
          >
            <strong className="text-[#263154]">{feature.title}:</strong>{" "}
            {feature.description}
          </li>
        ))}
      </ul>
    </section>
  );
}

function ImagesSection({
  images,
  title,
}: {
  images: ProjectImage[];
  title: string;
}) {
  if (images.length === 0) {
    return null;
  }

  return (
    <section className="section-block">
      <h2 className="section-title">{title}</h2>
      <div className="grid gap-4">
        {images.map((image) => (
          <MediaImage key={image.src} image={image} />
        ))}
      </div>
    </section>
  );
}

function TechnologiesSection({ project }: { project: Project }) {
  return (
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
  );
}

function FlagshipProjectPage({ project }: { project: Project }) {
  return (
    <>
      <OverviewPanel project={project} />
      <MediaSection project={project} title="Demo / Final Result" />
      <TextSection title="Approach" paragraphs={project.approach} />
      <FeaturesSection project={project} title="Key Features" />
      <TextSection
        title="How It Works"
        paragraphs={project.implementation ? [project.implementation] : undefined}
      />
      <ImagesSection images={project.images} title="Breakdown / Images" />
      <TechnologiesSection project={project} />
    </>
  );
}

function TechnicalProjectPage({ project }: { project: Project }) {
  return (
    <>
      <OverviewPanel project={project} />
      <MediaSection project={project} title="Demo / Final Result" />
      <TextSection title="My Contribution" paragraphs={project.contribution} />
      <FeaturesSection project={project} title="Key Features" />
      <TextSection title="Technical Details" paragraphs={project.technicalDetails} />
      <ImagesSection images={project.images} title="Images" />
      <TechnologiesSection project={project} />
    </>
  );
}

function CreativeProjectPage({ project }: { project: Project }) {
  const mediaPreviewCount = project.videos.length === 0 ? 1 : 0;
  const images = project.images.slice(mediaPreviewCount);

  return (
    <>
      <OverviewPanel project={project} />
      <MediaSection project={project} title="Demo / Media" />
      <TextSection
        title="What I Did"
        paragraphs={project.implementation ? [project.implementation] : undefined}
      />
      <FeaturesSection project={project} title="Techniques" />
      <ImagesSection images={images} title="Images" />
      <TechnologiesSection project={project} />
    </>
  );
}

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

  const template = getProjectTemplate(project);

  return (
    <main className="page-shell max-w-5xl">
      <a className="button-link" href="/">
        Back to Work
      </a>

      {template === "flagship" ? <FlagshipProjectPage project={project} /> : null}
      {template === "technical" ? <TechnicalProjectPage project={project} /> : null}
      {template === "creative" ? <CreativeProjectPage project={project} /> : null}
    </main>
  );
}
