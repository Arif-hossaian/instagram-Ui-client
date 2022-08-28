import { FC } from 'react';
import { useGlobalContext } from '../../context/ContextProvider';
import Post from './Post';

const PostList: FC = () => {
  const { posts, loading, error } = useGlobalContext();
  if (loading) return <p>loading please wait...</p>;
  if (error) return <p>Error occurred</p>;

  return (
    <div className="space-y-5 mt-5 mb-10">
      {posts.map((postInfo: any, id: any) => (
        <div key={id}>
          <Post postInfo={postInfo} />
        </div>
      ))}
    </div>
  );
};

export default PostList;
