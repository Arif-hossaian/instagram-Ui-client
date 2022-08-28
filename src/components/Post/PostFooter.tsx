import React, { FC } from 'react';
import CommentIcon from '../../icons/CommentIcon';
import ThumbsUp from '../../icons/ThumbsUp';

const PostFooter: FC<any> = ({ postInfo }) => {
  return (
    <div className="pt-4 space-y-2">
      <div className="flex items-center justify-between text-gray-700 px-5">
        <div className="flex space-x-4">
          <ThumbsUp />
          <CommentIcon />
        </div>
      </div>
      <p className="p-4 text-md text-semibold">{postInfo.caption.text}</p>
    </div>
  );
};

export default PostFooter;
