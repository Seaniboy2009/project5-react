import { axiosReq } from "../api/axiosDefaults";

export const fetchMoreData = async (resource, setResource) => {
  try {
    const { data } = await axiosReq.get(resource.next);
    setResource((prevResource) => ({
      ...prevResource,
      next: data.next,
      results: data.results.reduce((acc, cur) => {
        return acc.some((accResult) => accResult.id === cur.id)
          ? acc
          : [...acc, cur];
      }, prevResource.results),
    }));
  } catch (errors) {
    const error = errors.response?.data
  }
};

export const followHelper = (profile, clickedProfile, following_id) => {
  return profile.id === clickedProfile.id
    ? // Clicked on profile
      {
        ...profile,
        followers_count: profile.followers_count + 1,
        following_id,
      }
    : profile.is_owner
    ? // Profile of current user
      { ...profile, following_count: profile.following_count + 1 }
    : 
      profile;
};

export const unFollowHelper = (profile, clickedProfile) => {
  return profile.id === clickedProfile.id
    ? // Clicked on profile
      {
        ...profile,
        followers_count: profile.followers_count - 1,
        following_id: null,
      }
    : profile.is_owner
    ? // Profile of current user
      { ...profile, following_count: profile.following_count - 1 }
    : 
      profile;
};