import { FC } from 'react';

const PostBody: FC<any> = ({ postInfo }) => {
  return (
    <div className="w-full">
      <img
        src={postInfo.images.standard_resolution.url}
        alt="Post"
        height={postInfo.images.standard_resolution.width}
        width={postInfo.images.standard_resolution.height}
      />
    </div>
  );
};

export default PostBody;
