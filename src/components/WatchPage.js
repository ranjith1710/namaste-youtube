import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";

const WatchPage = () => {
  const dispatch = useDispatch();

  const [searchParams] = useSearchParams();

  const id = searchParams.get("v");

  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <div className="w-full pl-5">
      <iframe
        className="pl-20 rounded-lg pt-2"
        width="1000"
        height="500"
        src={`https://www.youtube.com/embed/${id}?si=5OX_RefCVernXLz2`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default WatchPage;
