import * as gitty from "@carte_907/gitty-api"
import getAllRepos from "@carte_907/gitty-api";
import Project from "./project";

export default async function Projects() {
  const repos = (await getAllRepos('Carter907')).filter((value, _index, _arr) => {

    if (value.description)
      return value
      
    
  }).map((repo: gitty.Project) => {
    return <li key={repo.name}>
      <Project params={{ proj: repo }} />
    </li>
  });

  return <section className="dark dark:text-white flex flex-col justify-center items-center dark:bg-stone-800 h-screen">
    <div className="basis-1/6 text-center">
    <p className="text-4xl">Carter's Projects</p>
    <p className="opacity-50 text-center">
      Hello, Welcome to my Projects.
    </p>
    </div>
    <ul className="w-fit max-h-[500px] overflow-auto">
      {repos}
    </ul>
  </section>
}
