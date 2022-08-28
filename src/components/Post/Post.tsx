import React, { FC } from 'react';
import PostBody from './PostBody';
import PostFooter from './PostFooter';
import PostHeader from './PostHeader';

const Post: FC<any> = ({ postInfo }) => {
  return (
    <div className="w-full bg-white shadow max-w-xl mx-auto overflow-hidden">
      <PostHeader postInfo={postInfo} />

      {/* Post Body */}
      <PostBody postInfo={postInfo} />

      {/* Post Footer */}
      <PostFooter postInfo={postInfo} />
    </div>
  );
};

export default Post;
