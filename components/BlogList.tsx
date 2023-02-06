import post from "../schemas/post";
import { Posts } from "../typings";
import Image from "next/image";
import urlFor from "../lib/urlFor";
import category from "../schemas/category";
import '../styles/main.css'
type Props = {
  posts: Posts[];
};
function BlogList({ posts }: Props) {
  return (
    <div>
      <hr className="border-[#F7AB0A] mb-10"></hr> 

      <div>
        {/* Posts */}
        {posts.map(post => (
          <div key={post._id} className='flex flex-col group cursor-pointer'>
            <div className="relative w-full h-80 drop-shadow-xl group-hover:scale-105 transition-transform duration-200 ease-out">
            <Image className="object-cover object-left lg:object-center"
            src={urlFor(post.mainImage).url()}
            alt={post.author.name}
            fill
              />
            
            <div className="absolute bottom-0 w-full bg-opacity-20 bg-black rounded drop-shadow-lg text-white p-5 flex justify-between backdrop-blur-lg">
              
              <p className="font-bold filter-none">
                {post.title}
              </p>
              <p>
                {new Date(post._createdAt).toLocaleDateString
                ("en-US", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </p>
            </div>
         </div>
         </div>
        ))}
      </div>
    </div>
  );
}

export default BlogList;
