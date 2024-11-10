import Image from "next/image";
import "../style/page.css";

export default function Home() {
  return (
    <div className="home-container">
      <header className="home-header">
        <div className="content-box">
          <div className="text-content">
            <h1>Sibtain's Portfolio</h1>
            <p>
              Welcome to my digital space! I am a passionate professional dedicated to excellence in my work. Here, you can explore my expertise and creative projects.
            </p>
          </div>
          <div className="image-container">
            <Image
              className="profile-image"
              src="/sibtain.png"
              alt="Sibtain's Profile Picture"
              width={300}
              height={300}
            />
          </div>
        </div>
      </header>
    </div>
  );
}