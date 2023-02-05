import { Posts } from "../typings"

type Props = {
    posts: Posts[];
}
function BlogList({posts}: Props) {
  return (
    <div>BlogList</div>
  )
}

export default BlogList