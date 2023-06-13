import Image from "next/image";

export default function Projects() {
  return (
    <main className="is-primary">
      <section className="section is-medium has-background-dark">
        <div className="tile is-ancestor">
          <ProjectTile />
          <ProjectTile />
          <ProjectTile />
        </div>
        <div className="tile is-ancestor">
          <ProjectTile />
          <ProjectTile />
          <ProjectTile />
        </div>
      </section>
    </main>
  );
}

function ProjectTile() {
  return (
    <div className="tile is-parent">
      <div className="tile is-child box">
        <p className="title">Placeholder (WIP)</p>
        <figure className="image">
          <Image
            src="/images/png/project-placeholder.png"
            alt="project-placeholder"
            width={1210}
            height={832}
          />
        </figure>
        <p className="subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
  );
}
