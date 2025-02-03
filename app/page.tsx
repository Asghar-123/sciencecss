import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <div className="section-container">
      <div className="text-container">
        <Image
          className="hero-image"
          alt="hero"
          src="/science image.avif"
          width={500}
          height={600}
        />
        <h1 className="text-bold">Hello...In this you will know about the science</h1>
        <p>
          Science is a systematic approach to understanding the natural world through observation, experimentation, and reasoning. It involves forming hypotheses, testing them through experiments, analyzing data, and drawing conclusions based on evidence...
        </p>
        <h2 className="text-bold text-black">Branches of Science</h2>
        <p>
          Science is a systematic pursuit of knowledge that helps us understand the world through observation, experimentation, and reasoning. It is broadly divided into three main branches...
        </p>
      </div>
    </div>
    </div>
  );
}
