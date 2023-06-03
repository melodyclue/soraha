import { NextTweet } from "next-tweet";

type TweetProps = {
  tweetId: string;
};

export const Tweet = (props: TweetProps) => {
  return <NextTweet id={props.tweetId} />;
};
