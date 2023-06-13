import Image from "next/image";

import myPortrait from "/images/png/portrait-filler.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareEnvelope,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithubSquare } from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  return (
    <main>
      <section className="section hero is-dark is-fullheight-with-navbar">
        <div className="hero-body">
          <div className="container has-text-centered">
            <p className="title is-size-1-desktop has-text-primary">
              Your not-so-average developer.
            </p>
            <p className="subtitle is-size-1-desktop has-text-white">
              Hi! I&apos;m Richard Perez, an 18-year-old developer from New
              York.
            </p>
            <br />
            <div className="is-flex is-justify-content-space-evenly is-align-content-flex-end">
              <FALink
                url={"https://github.com/richardp23"}
                icon={faGithubSquare}
              />
              <FALink
                url={"mailto:richard.p23@icloud.com"}
                icon={faSquareEnvelope}
              />
              <FALink
                url={"https://www.linkedin.com/in/richard-perez-jr/"}
                icon={faLinkedin}
              />
            </div>
          </div>
          <figure className="image">
            <Image
              src="/images/png/portrait-filler.png"
              alt="portrait-filler"
              width={898}
              height={1576}
              priority
            />
          </figure>
        </div>
      </section>
    </main>
  );
}

function FALink({ url, icon }: { url: string; icon: IconDefinition }) {
  return (
    <a target="_blank" href={url} rel="noopener noreferrer">
      <FontAwesomeIcon icon={icon} className="icon is-large" />
    </a>
  );
}
