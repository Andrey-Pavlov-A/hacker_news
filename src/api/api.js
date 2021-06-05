import axios from "axios";
import { selectFields } from "../utils/selectFields";

export const baseUrl = "https://hacker-news.firebaseio.com/v0/";
export const newStoryUrl = `${baseUrl}topstories.json`;
export const storyUrl = `${baseUrl}item/`;

export const getStory = async (storyId) => {
  //debugger
  const result = axios.get(`${storyUrl + storyId}.json`).then(({data}) => selectFields(data));
  return result;
};

export const getStoriesId = async () => {
  //debugger
  const result = axios.get(newStoryUrl).then((data) => data);
  return result;
};
