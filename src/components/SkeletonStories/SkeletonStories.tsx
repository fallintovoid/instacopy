import React from "react";
import Skeleton from "react-loading-skeleton";

const SkeletonStories = () => {
  return (
    <>
      <Skeleton height={70} width={70} circle />
      <Skeleton height={70} width={70} circle />
      <Skeleton height={70} width={70} circle />
      <Skeleton height={70} width={70} circle />
      <Skeleton height={70} width={70} circle />
    </>
  );
};

export default SkeletonStories;
