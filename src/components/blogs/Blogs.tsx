import { mockBlogPosts } from "@/configs/blogsConfig"
import { AnimatedPin } from "./BlogsCard";

export function BlogComponent() {
  return (
    <div className="w-full sm:w-3/5 mx-auto flex flex-col items-center justify-center bg-white p-20 rounded-2xl shadow-lg my-40">

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-24 w-full">
        {mockBlogPosts.map((mockBlogPosts, index) => (
          <div key={index}>
            <AnimatedPin
              excerpt={mockBlogPosts.excerpt}
              content={mockBlogPosts.content}
              path={mockBlogPosts.coverImage}
              link={mockBlogPosts.link}
              title={mockBlogPosts.title}
            />
          </div>
        ))}
      </div>
    </div>

  );
}