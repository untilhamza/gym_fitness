import React, { useState, useEffect } from "react";
import { Typography, Box, Stack } from "@mui/material";
import Loader from "./Loader";
import { exerciseOptions, fetchData, youtubeOptions } from "../utils/fetchData";
//exerciseVideos is an array of objects with the following structure:
// {
//   "video": {
//     "videoId": "string",
//     "title": "string",
//     "channelName": "string",
//     "thumbnails": [
//       {
//         "url": "string"
//       }
//     ]

const videoSample = {
  video: {
    channelId: "UCy0-3xdx7dTXMYmJc1jMbBQ",
    channelName: "Buddy Fitness",
    description: "CONTENT OF ",
    lengthText: "8:17",
    publishedTimeText: "2 years ago",
    thumbnails: [
      {
        height: 202,
        url: "https://i.ytimg.com/vi/PY6DrbX4W4o/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBmhoUBCBiZPTF3QxlKNXMxXhR96A",
        width: 360,
      },
      {
        height: 404,
        url: "https://i.ytimg.com/vi/PY6DrbX4W4o/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAK0mDDSVe9O_Q5FDjeA8zVLovxMg",
        width: 720,
      },
    ],
    title:
      "Full Week Gym Workout Plan | Week Schedule For Gym Workout | Buddy Fitness",
    videoId: "PY6DrbX4W4o",
    viewCountText: "11,708,517 views",
  },
};

const ExerciseVideos = ({ exerciseVideos: videos, name }) => {
  const [exerciseVideos, setexerciseVideos] = useState([]);
  const [exerciseDetail, setExerciseDetail] = useState({}); // provide some intial data for this

  useEffect(() => {
    const youtubeSearchUrl =
      "https://youtube-search-and-download.p.rapidapi.com";
    fetchData(
      `${youtubeSearchUrl}/channel?id=UCqjwF8rxRsotnojGl4gM0Zw&maxResults=10&order=date`,
      youtubeOptions
    ).then((result) => {
      console.log("result", result);
      setexerciseVideos(result.contents);
    });
  }, []);

  if (!exerciseVideos.length) return <Loader />;

  return (
    <Box sx={{ marginTop: { lg: "203px", xs: "20px" } }} p="20px">
      <Typography
        sx={{ fontSize: { lg: "44px", xs: "25px" } }}
        fontWeight={700}
        color="#000"
        mb="33px"
      >
        Watch{" "}
        <span style={{ color: "#FF2625", textTransform: "capitalize" }}>
          {name}
        </span>{" "}
        exercise videos
      </Typography>

      <Stack
        sx={{ flexDirection: { lg: "row" }, gap: { lg: "110px", xs: "0px" } }}
        justifyContent="flex-start"
        flexWrap="wrap"
        alignItems="center"
      >
        {exerciseVideos?.slice(0, 9)?.map((item, index) => (
          <a
            key={index}
            className="exercise-video"
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer"
          >
            <img
              style={{ borderTopLeftRadius: "20px" }}
              src={item.video.thumbnails[0].url}
              alt={item.video.title}
            />
            <Box>
              <Typography
                sx={{ fontSize: { lg: "28px", xs: "18px" } }}
                fontWeight={600}
                color="#000"
              >
                {item.video.title}
              </Typography>
              <Typography fontSize="14px" color="#000">
                {item.video.channelName}
              </Typography>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  );
};

export default ExerciseVideos;
