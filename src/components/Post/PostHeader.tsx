/* eslint-disable jsx-a11y/img-redundant-alt */
import { FC } from 'react';

const PostHeader: FC<any> = ({ postInfo }) => {
  console.log(postInfo);
  return (
    <div className="flex items-center justify-items-start space-x-3 px-5 py-3 sm:bg-white border">
      {postInfo?.caption?.from.profile_picture ? (
        <img
          src={postInfo?.caption?.from.profile_picture}
          alt="image"
          className="h-10 w-10 rounded-full ring-2 ring-offset-2 ring-indigo-600"
        />
      ) : (
        <p>loading..</p>
      )}
      <h5 className="font-medium hover:underline cursor-pointer">
        {postInfo?.caption?.from?.username}
      </h5>
    </div>
  );
};

export default PostHeader;
