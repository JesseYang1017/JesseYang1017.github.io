import type { ProjectVideo } from "../data/projects";

type VideoEmbedProps = {
  video: ProjectVideo;
};

export default function VideoEmbed({ video }: VideoEmbedProps) {
  return (
    <figure>
      {video.label ? (
        <figcaption className="mb-2 font-mono text-xs uppercase tracking-[0.16em] text-muted">
          {video.label}
        </figcaption>
      ) : null}
      <div className="aspect-video overflow-hidden border border-[#8c9dcb] bg-[#dce7ff] p-2 shadow-[inset_1px_1px_0_#ffffff]">
        <iframe
          className="h-full w-full border border-[#9ba9cc]"
          src={`https://www.youtube-nocookie.com/embed/${video.id}`}
          title={video.label ?? "Project video"}
          loading="lazy"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
      {video.description ? (
        <p className="mt-3 text-sm leading-6 text-muted">{video.description}</p>
      ) : null}
      {video.techniques ? (
        <p className="mt-2 border-t border-dotted border-[#a9b7da] pt-2 font-mono text-[11px] uppercase tracking-[0.08em] text-[#53617f]">
          {video.techniques}
        </p>
      ) : null}
    </figure>
  );
}
