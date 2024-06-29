import * as gitty from '@carte_907/gitty-api'
import { FaLink } from 'react-icons/fa'

export default function Project({ params }: { params: { proj: gitty.Project, key: string } }) {

  
  return <div className="max-w-md mx-auto my-10 bg-white shadow-lg rounded-lg overflow-hidden">
    <div className="p-6">
      <h2 className="text-xl font-semibold text-gray-800">{params.proj.name}</h2>
      <p className="mt-2 text-gray-600"> {params.proj.description}</p>
      <a href={params.proj.url}><FaLink className="inline"/> to repo...</a>
    </div>
  </div>
}
