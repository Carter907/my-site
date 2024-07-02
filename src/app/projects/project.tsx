import * as gitty from '@carte_907/gitty-api'
import { FaLink } from 'react-icons/fa'

export default function Project({ params }: { params: { proj: gitty.Project } }) {

  
  return <div className="dark:bg-stone-900 dark:text-neutral-400 max-w-md mx-auto my-10 bg-white shadow-md rounded-lg overflow-hidden">
    <div className="p-6">
      <h2 className="text-xl font-semibold">{params.proj.name}</h2>
      <p className="mt-2 dark:text-white text-gray-600 opacity-60 bg-slate-700 p-2 rounded"> {params.proj.description}</p>
      <a className="text-sky-400 underline" href={params.proj.url}><FaLink className="inline"/> to repo...</a>
    </div>
  </div>
}
