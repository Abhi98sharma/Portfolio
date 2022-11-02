import Tilt from "react-parallax-tilt";
import projectsData from "../../data.json";

export default function Cards() {
  return (
    <>
      {projectsData.map((data) => (
        <section key={data.id} className="grid grid-cols-2 space-x-20">
          <Tilt>
            <div className="relative hover:scale-110">
              <img src={data.image} alt="" />
            </div>
          </Tilt>
          <div className="flex flex-col justify-center items-start p-6 space-y-4 font-Inter">
            <h1 className="text-3xl font-Quicksand">{data.title}</h1>
            <p className="text-md">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id
              excepturi culpa sapiente at tempora, odio nostrum voluptatum
              perspiciatis omnis architecto?
            </p>
            <div className="flex flex-col justify-start space-y-2">
              <div className="text-xl space-x-2">
                <small>{data.tech[0]}</small>
                <small>{data.tech[1]}</small>
                <small>{data.tech[2]}</small>
              </div>
              <div className="flex space-x-3">
                <a href="#" target="_blank">
                  <img src="/assets/github.svg" alt="github-icon" />
                </a>
                <a href="#" target="_blank">
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
