import axios from "axios";
import { CourseShort } from "../types/CourseShort";

export const sampleApi = async (
  baseUrl: string
): Promise<object[] | string> => {
  try {
    const endpoint = `entries`;
    const { data } = await axios.get(`${baseUrl}${endpoint}`);
    console.log(data);
    return data;
  } catch (error) {
    return "Something Went Wrong. Please try again later!";
  }
};
export const courseApi = ({ baseUrl }: { baseUrl: string }) => ({
  sampleApi: () => sampleApi(baseUrl),
});
