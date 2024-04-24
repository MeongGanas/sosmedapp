// import { getAllPostsById } from "@/data/post";
// import PostCard from "../PostCard";
// import { auth } from "@/auth";

// export default async function PostsList() {
//   const session = await auth();
//   const posts = await getAllPostsById();

//   return (
//     <div className="grid grid-cols-2 md:grid-cols-3 gap-1">
//       {posts &&
//         posts.map((post) => (
//           <PostCard
//             post={post}
//             key={post.id}
//             isAdmin={session?.user?.id === post.userId}
//           />
//         ))}
//     </div>
//   );
// }
