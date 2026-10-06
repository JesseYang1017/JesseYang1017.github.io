export type ProjectImage = {
  src: string;
  alt: string;
};

export type ProjectVideo = {
  id: string;
  label?: string;
  description?: string;
  techniques?: string;
};

export type ProjectLink = {
  label: string;
  href: string;
};

export type ProjectFeature = {
  title: string;
  description: string;
};

export type Project = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  overview: string[];
  approach?: string[];
  contribution?: string[];
  features?: ProjectFeature[];
  implementation?: string;
  technicalDetails?: string[];
  technologies: string[];
  thumbnail?: ProjectImage;
  images: ProjectImage[];
  videos: ProjectVideo[];
  links: ProjectLink[];
};

export const projects: Project[] = [
  {
    slug: "stylized-toon-shader",
    title: "Stylized Toon Shader",
    category: "Shaders & Materials",
    summary: "Three-band toon lighting with configurable thresholds and rim light.",
    overview: [
      "A custom toon shader built in Unity URP using ShaderLab and HLSL. It replaces smooth lighting transitions with three distinct color bands to create a stylized, cartoon-like appearance. The shader provides adjustable lighting thresholds, colors, and rim lighting to control the final result.",
    ],
    approach: [
      "I structured the shader around three configurable lighting bands so the stylized look could be adjusted directly from the Material Inspector. Lighting thresholds and colors are controlled independently, while rim lighting is calculated as a separate view-dependent effect.",
    ],
    features: [
      {
        title: "Three-band shading",
        description:
          "Divides lighting into shadow, midtone, and highlight regions using configurable thresholds.",
      },
      {
        title: "Customizable colors",
        description:
          "Provides independent color controls for shadows, midtones, and highlights.",
      },
      {
        title: "Adjustable thresholds",
        description:
          "Allows the user to modify the boundaries between lighting regions directly through material properties.",
      },
      {
        title: "Rim lighting",
        description:
          "Adds view-dependent rim highlights with adjustable intensity and power.",
      },
      {
        title: "Texture support",
        description: "Supports an optional base color texture and color tint.",
      },
      {
        title: "Modular shader structure",
        description:
          "Separates ShaderLab configuration and HLSL implementation into maintainable files.",
      },
    ],
    implementation:
      "The shader calculates lighting intensity using the dot product between the surface normal and light direction (NdotL). It uses step() functions to determine lighting regions and lerp() to select the appropriate color bands. Rim lighting is calculated separately using the relationship between the surface normal and view direction, with a configurable power function controlling its appearance.",
    technologies: ["Unity", "URP", "HLSL", "ShaderLab"],
    thumbnail: {
      src: "/images/toon_shader.png",
      alt: "Stylized toon shader material preview",
    },
    images: [
      {
        src: "/images/toon_shader.png",
        alt: "Stylized toon shader material preview",
      },
    ],
    videos: [{ id: "flU-FXBxxDE", label: "Demo" }],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/JesseYang1017/unity-urp-toon-shader",
      },
    ],
  },
  {
    slug: "procedural-weathered-metal",
    title: "Procedural Weathered Metal",
    category: "Shaders & Materials",
    summary: "Noise-driven rust and edge wear for a procedural URP metal shader.",
    overview: [
      "A procedural weathered metal shader developed in Unity URP using HLSL. It generates rust patterns and surface wear through procedural noise rather than hand-painted rust masks. Rust coverage and appearance can be adjusted through material properties.",
    ],
    approach: [
      "I started with FBM noise to generate irregular paint wear, but noise alone did not emphasize exposed edges. I combined the procedural mask with a model-derived edge mask, then used the resulting wear information to drive albedo, metallic, and smoothness together.",
    ],
    features: [
      {
        title: "Procedural rust generation",
        description:
          "Uses layered Fractal Brownian Motion (FBM) noise to generate irregular rust patterns across the surface.",
      },
      {
        title: "Adjustable rust coverage",
        description:
          "Uses smoothstep() thresholds to control the distribution and transitions of rust.",
      },
      {
        title: "Edge wear",
        description:
          "Combines boundary-based masks with high-frequency noise to produce irregular worn regions.",
      },
      {
        title: "PBR material blending",
        description:
          "Modifies albedo, metallic, and smoothness properties according to the generated wear mask.",
      },
      {
        title: "Customizable parameters",
        description:
          "Exposes material properties for adjusting the weathering effect.",
      },
      {
        title: "Modular HLSL structure",
        description:
          "Separates shader inputs, procedural noise functions, and forward rendering logic.",
      },
    ],
    implementation:
      "The shader generates an FBM noise field and converts it into a wear mask using adjustable thresholds. Additional high-frequency noise introduces variation along worn boundaries. The resulting mask controls interpolation between clean metal and rusted material properties, which are rendered using Unity URP's physically based lighting.",
    technologies: [
      "Unity",
      "URP",
      "HLSL",
      "ShaderLab",
      "Procedural Noise",
      "PBR",
    ],
    thumbnail: {
      src: "/images/procedural_weathering.png",
      alt: "Procedural weathered metal shader preview",
    },
    images: [
      {
        src: "/images/procedural_weathering.png",
        alt: "Procedural weathered metal shader render showing rust and edge wear variation",
      },
    ],
    videos: [{ id: "lHVSMC6N13I", label: "Demo" }],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/JesseYang1017/ProceduralWeathering",
      },
    ],
  },
  {
    slug: "animation-3d-modeling",
    title: "3D Art & Animation",
    category: "Animation & 3D Art",
    summary: "3D modeling, rigging, animation, and VFX work across Maya and Blender.",
    overview: [
      "A collection of animation and 3D modeling work created using Autodesk Maya. These projects explore different aspects of 3D content creation and represent the artistic side of my experience alongside graphics programming.",
      "The collection includes three animation pieces and selected modeling renders from the existing portfolio.",
    ],
    implementation:
      "The work focuses on 3D modeling, animation, scene composition, materials, lighting, and rendering. Existing pieces include a first-person UFO encounter animation, an ocean-themed animated short, a retro game-inspired 3D scene, avatar modeling and rigging, a vanitas still life, and the shipwreck model used in the immersive environment project.",
    technologies: ["Autodesk Maya", "Blender", "3D Modeling", "Animation", "Rigging"],
    thumbnail: {
      src: "/images/animation-3d-modeling.png",
      alt: "Animation and 3D modeling preview",
    },
    images: [
      { src: "/images/vanitas.png", alt: "Modern Vanitas 3D model render" },
      { src: "/images/avatar-1.png", alt: "Avatar model render 1" },
      { src: "/images/avatar-2.png", alt: "Avatar model render 2" },
      { src: "/images/avatar-3.png", alt: "Avatar model render 3" },
      { src: "/images/shipwreck-ship.png", alt: "Shipwreck model render" },
    ],
    videos: [
      {
        id: "fgfr_kAhnGU",
        label: "ANIMATION 01 — OCEAN & DEFORMATION",
        description:
          "Created an animated ocean scene in Maya using mesh deformation and procedural ocean simulation. Used Maya deformers together with the Bifrost Ocean Simulation System (BOSS) to create animated surface motion and integrate the object animation with the ocean environment.",
        techniques: "Maya / Deformers / BOSS Ocean Simulation / Keyframe Animation",
      },
      {
        id: "AiPC00Xvt88",
        label: "ANIMATION 02 — PROCEDURAL FRACTURE",
        description:
          "Created a procedural destruction animation in Maya using a MASH network to control duplicated geometry and motion, combined with shatter and fracture tools to produce the breakup effect.",
        techniques: "Maya / MASH / Procedural Animation / Shatter / Fracture",
      },
      {
        id: "tzou_ZFu_Eo",
        label: "ANIMATION 03 — CAMERA & CINEMATIC STAGING",
        description:
          "Created a cinematic environment sequence using animated Maya camera controls, keyframed camera movement, framing, and scene composition to guide the viewer through the environment.",
        techniques: "Maya / Camera Animation / Keyframing / Scene Composition",
      },
    ],
    links: [],
  },
  {
    slug: "nist",
    title: "NIST",
    category: "AR / Mixed Reality",
    summary: "AR indoor navigation and visual collaboration for first responders.",
    overview: [
      "An AR navigation research project focused on helping first responders navigate unfamiliar indoor environments. The system uses interactive 3D visualization to present spatial information and navigation guidance.",
    ],
    contribution: [
      "My main contribution was designing and implementing an interactive Unity-based volumetric map for commander-side visualization. The map integrated responder scan data, spatial markers, and navigation paths so a commander could inspect the environment and coordinate movement.",
    ],
    features: [
      {
        title: "Interactive 3D map",
        description:
          "Visualizes the environment through a manipulable volumetric map that can be inspected from a commander view.",
      },
      {
        title: "Navigation visualization",
        description:
          "Displays NavMesh-generated paths from responder or avatar positions to marked locations such as victim markers.",
      },
      {
        title: "Spatial markers",
        description:
          "Shows important features reported by responders, including marked hazards and victim locations.",
      },
      {
        title: "Real-time updates",
        description:
          "Uses WebSocket data integration to update responder positions, marker changes, and mapped environment information.",
      },
      {
        title: "HoloLens data integration",
        description:
          "Incorporates spatial data from team members using HoloLens 2 devices to scan and mesh indoor surroundings.",
      },
    ],
    technicalDetails: [
      "I implemented the Unity visualization layer for the 3D volumetric map, combining incoming HoloLens 2 spatial data with feature markers and Unity NavMesh path generation. Real-time updates were streamed through WebSocket connections, while the commander interface supported operations such as zooming, rotating, clipping, and sending selected navigation targets back into the system.",
    ],
    technologies: [
      "Unity",
      "C#",
      "HoloLens 2",
      "AR",
      "WebSocket",
      "NavMesh",
      "3D Volumetric Mapping",
    ],
    thumbnail: {
      src: "/images/nist.png",
      alt: "NIST augmented reality navigation project preview",
    },
    images: [
      {
        src: "/images/nist-server.png",
        alt: "NIST server and volumetric map setup",
      },
      {
        src: "/images/nist-navigation.png",
        alt: "NIST navigation path visualization",
      },
    ],
    videos: [
      { id: "usdFzVCe7NM", label: "Demo 1" },
      { id: "4kMo8Q_tIMQ", label: "Demo 2" },
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/widVE/NIST/tree/athena-demo-2024",
      },
    ],
  },
  {
    slug: "explore-shipwreck",
    title: "Explore Shipwreck",
    category: "VR / Immersive Experiences",
    summary: "An underwater shipwreck exploration experience for a CAVE system.",
    overview: [
      "An underwater shipwreck environment developed in Unity as a prototype for a CAVE-based immersive experience. The project explores how 3D modeling, lighting, and environmental presentation can create an underwater exploration scene.",
    ],
    contribution: [
      "I created the sunken ship model in Blender and built the surrounding underwater scene in Unity, focusing on the feeling of exploring a dark environment with a limited light source.",
    ],
    features: [
      {
        title: "Shipwreck modeling",
        description:
          "Uses a custom shipwreck model created in Blender as the central object of the scene.",
      },
      {
        title: "Underwater environment",
        description:
          "Builds a dark underwater setting around the wreck to support an exploration-focused presentation.",
      },
      {
        title: "Focused lighting",
        description:
          "Uses a dynamic light source to create a clear visible region surrounded by shadow.",
      },
      {
        title: "Custom materials",
        description:
          "Uses Unity materials and shader adjustments to support the underwater atmosphere.",
      },
      {
        title: "CAVE-oriented presentation",
        description:
          "Developed as an immersive scene intended for display in a CAVE system.",
      },
    ],
    technicalDetails: [
      "My workflow combined Blender modeling with Unity scene composition, lighting, and material setup. I modeled the shipwreck geometry, placed it in an underwater scene, and tuned the lighting and materials so the environment had limited visibility and stronger depth cues for immersive presentation.",
    ],
    technologies: ["Unity", "Blender", "CAVE", "VR", "Shaders", "3D Modeling"],
    thumbnail: {
      src: "/images/explore-shipwreck.png",
      alt: "Explore Shipwreck underwater scene preview",
    },
    images: [
      {
        src: "/images/shipwreck-ship.png",
        alt: "Modeled sunken ship used in Explore Shipwreck",
      },
    ],
    videos: [{ id: "c_7iky1aCok", label: "Demo" }],
    links: [],
  },
  {
    slug: "ludum-dare-59",
    title: "Ludum Dare 59",
    category: "Game Development",
    summary: "Can You Clarify? game jam systems and collaborative implementation.",
    overview: [
      "Can You Clarify? was built during Ludum Dare 59 under strict time constraints. The game follows a stressed student called into an advisor's office to fix a failing paper in real time.",
      "Players read facial expressions and body language, decode symbols from messy notes, and make correct interaction choices before the advisor loses patience. I implemented core gameplay flow, interaction logic, feedback systems, audio cues, and technical fixes during the jam.",
    ],
    features: [
      {
        title: "Tutorial onboarding",
        description:
          "Introduces the player to the core interaction loop and controls before the main pressure sequence.",
      },
      {
        title: "Timed interaction sequences",
        description:
          "Uses time pressure to make reading symbols and choosing interactions part of the challenge.",
      },
      {
        title: "Branching progression",
        description:
          "Tracks player choices and advances through different success, retry, and failure states.",
      },
      {
        title: "Data-driven interactions",
        description:
          "Structures dialogue, choices, state changes, and progression data so the team could iterate quickly.",
      },
      {
        title: "Visual and audio feedback",
        description:
          "Coordinates UI states, sound effects, and audiovisual cues with gameplay timing.",
      },
    ],
    implementation:
      "I implemented the gameplay state flow around onboarding, timed interactions, multi-step validation, retries, and fail/success transitions. I also built data-driven interaction structures for dialogue and choice logic, integrated layered UI feedback and sound effects, and helped stabilize the game through debugging, merge conflict resolution, regression fixes, and playtesting support.",
    technologies: ["Game Development", "Gameplay Systems", "UI", "Audio", "Game Jam"],
    thumbnail: {
      src: "/images/ludum-dare-59-cover.png",
      alt: "Ludum Dare 59 game cover",
    },
    images: [
      {
        src: "/images/ludum-dare-59-cover.png",
        alt: "Ludum Dare 59 cover image",
      },
      {
        src: "/images/ludum-dare-59-01.jpg",
        alt: "Ludum Dare 59 gameplay screenshot 1",
      },
      {
        src: "/images/ludum-dare-59-02.jpg",
        alt: "Ludum Dare 59 gameplay screenshot 2",
      },
    ],
    videos: [],
    links: [
      {
        label: "Play on itch.io",
        href: "https://jesseyang1017.itch.io/can-you-clarify",
      },
      {
        label: "Ludum Dare 59",
        href: "https://ldjam.com/events/ludum-dare/59/can-you-clarify",
      },
    ],
  },
  {
    slug: "astrologic",
    title: "Astrologic",
    category: "Game Development",
    summary: "A constellation-themed puzzle game about placing stars on star maps.",
    overview: [
      "Astrologic is a constellation-themed puzzle game built with GameMaker Studio. The project combines puzzle mechanics with an interactive star map and constellation-based gameplay.",
      "The game was created as a class project under the constraint of astrology reading, with an emphasis on a calm puzzle experience supported by art and music. I handled the programming for the core mechanics and also contributed to selected sprites and playtest interviews.",
    ],
    features: [
      {
        title: "Constellation puzzles",
        description:
          "Players place different types of stars on constellation maps according to specific rules and constraints.",
      },
      {
        title: "Interactive star map",
        description:
          "The player interacts directly with the map to place stars and test puzzle solutions.",
      },
      {
        title: "Puzzle progression",
        description:
          "The game introduces increasingly complex maps as players advance.",
      },
      {
        title: "Feedback systems",
        description:
          "UI and gameplay feedback help players understand whether their placements satisfy the puzzle logic.",
      },
      {
        title: "Playtest interviews",
        description:
          "Player interviews were used to gather qualitative feedback during development without presenting unsupported statistics.",
      },
    ],
    implementation:
      "I implemented the GameMaker Studio gameplay logic for star placement rules, constellation map updates, puzzle progression, and feedback states. The implementation connected player input, map state, and validation logic so each puzzle could respond clearly as the player placed stars and advanced through the game.",
    technologies: [
      "GameMaker Studio",
      "GameMaker Language",
      "Puzzle Design",
      "UI",
      "Playtesting",
    ],
    thumbnail: {
      src: "/images/astrologic.png",
      alt: "Astrologic puzzle game preview",
    },
    images: [
      {
        src: "/images/astrologic.png",
        alt: "Astrologic game screenshot",
      },
    ],
    videos: [
      { id: "I1Jb1SX290U", label: "Gameplay" },
      { id: "JzNTQ6A_QUs", label: "Player Interviews" },
    ],
    links: [
      {
        label: "Project Folder",
        href: "https://drive.google.com/drive/folders/1HYBAcS9R69kTm78GdmirbZVC2v2K_iFB?usp=drive_link",
      },
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
