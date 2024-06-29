import * as gitty from "@carte_907/gitty-api"
import getAllRepos from "@carte_907/gitty-api";
import Project from "./project";

export default async function Projects() {
  const repos = (await getAllRepos('Carter907')).filter((value, _index, _arr) => {

    if (value.description)
      return value
      
    
  }).map((repo: gitty.Project) => {
    return <>
      <Project params={{ key: repo.name, proj: repo }} />
    </>
  });

  return <section className="flex flex-col items-center">
    <p className="text-4xl">Carter's Projects</p>
    <p>
      Hello, Welcome to my Projects.
    </p>
    <ul className="w-fit max-h-[500px] overflow-auto">
      {repos}
    </ul>
  </section>
}
