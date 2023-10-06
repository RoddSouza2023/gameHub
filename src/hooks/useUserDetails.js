import usePostData from './usePostData';

const useUserDetails = (token) => usePostData("/user/get_user_details", { token: token });

export default useUserDetails