import React from "react";

interface MediaContainerProps {
  title: string;
  thumbnail: string;
}

export const MediaContainer: React.FunctionComponent<MediaContainerProps> = (
  props: MediaContainerProps
) => {
  const { title, thumbnail } = props;
  return (
    <div className="max-w-[350px] relative aspect-[1/2] flex flex-col">
      <div className="flex-1">
        <img src={thumbnail} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="flex-1 bg-gray-200">{/* 第二個子元素內容 */}</div>
    </div>
  );
};
