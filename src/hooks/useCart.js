import usePostData from "./usePostData";

const useCart = (token) => usePostData("user/cart/getItems", { token: token }, [token]);
  
export default useCart