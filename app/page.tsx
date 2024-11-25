import Image from "next/image";

import "./page.css";
import benz from "../public/benz.jpg";
import challenger from "../public/challenger.jpg";
import cybertruck from "../public/cybertruck.jpg";

export default function Home() {
  return (
    <main>
      <div className="slider-container">
        <div className="slide">
          <Image width={5225} height={6531} alt="" src={benz.src} quality={50} placeholder="empty" />
          <a href=''>Mercedes</a>
        </div>
        <div className="slide">
          <Image width={4000} height={6000} alt='' src={cybertruck.src} quality={50} placeholder="empty"/>
          <a href=''>Cybertruch</a>
        </div>
        <div className="slide">
          <Image width={3697} height={5546} alt='' src={challenger.src} quality={50} placeholder="empty"/>
          <a href=''>Dodge</a>
        </div>
      </div>
    </main>
  );
}
