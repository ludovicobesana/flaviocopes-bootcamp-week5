import Link from 'next/link'
import posts from '../posts.json'

export default function Blog() {
  return (
    <div>
      <h1 class="text-2xl">Blog</h1>
      <Link href="/">
        home
      </Link>
      
      <ul>
       {Object.keys(posts).map((id, index) => {
         return (
           <li key={index}>
             <Link href='/blog/[id]' as={'/blog/' + id}>
               <a>{posts[id].title}</a>
             </Link>
           </li>
         )
       })}
     </ul>
       
    </div>
  )
}
