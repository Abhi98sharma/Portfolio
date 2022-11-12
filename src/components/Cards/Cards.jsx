import Tilt from "react-parallax-tilt";
import projectsData from "../../data.json";

export default function Cards() {
  return (
    <>
      {projectsData.map((data) => (
        <section key={data.id} className="lg:grid grid-cols-2 space-y-10 lg:space-x-20">
          <Tilt>
            <div className="relative hover:scale-110">
              <img src={data.image} alt="project-image" />
            </div>
          </Tilt>
          <div className="flex flex-col justify-center items-start p-6 space-y-4 font-Inter">
            <h1 className="text-3xl font-Quicksand">{data.title}</h1>
            <p className="text-md">{data.description}</p>
            <div className="flex flex-col justify-start space-y-2">
              <div className="text-xl space-x-2">
                <small>{data.tech[0]}</small>
                <small>{data.tech[1]}</small>
                <small>{data.tech[2]}</small>
              </div>
              <div className="flex space-x-3">
                <a href={data.github} target="_blank">
                  <img src="/assets/github.svg" alt="github-icon" />
                </a>
                <a href={data.live} target="_blank">
                  <img src="/assets/link.svg" alt="link-icon" />
                </a>
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
