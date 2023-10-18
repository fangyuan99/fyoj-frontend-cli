/**
 * 检查权限（判断当前登陆用户是否具有某个权限）
 * @param loginUser 当前登陆用户
 * @param needAccess 需要的权限
 * @returns {boolean} 是否具有某个权限
 */
import ACCESS_ENUM from "@/access/accessEnum";

const checkAccess = (loginUser: any, needAccess = ACCESS_ENUM.NOT_LOGIN) => {
  //获取当前用户的权限(如果没有loginUser，那么默认为未登录)
  const loginUserAccess = loginUser?.userRole ?? ACCESS_ENUM.NOT_LOGIN;
  if (needAccess === ACCESS_ENUM.NOT_LOGIN) {
    return true;
  }
  //如果用户登录才能访问
  if (needAccess === ACCESS_ENUM.USER) {
    //如果用户没有登录，无权限
    if (loginUserAccess === ACCESS_ENUM.NOT_LOGIN) {
      return false;
    }
  }
  //如果用户是管理员才能访问
  if (needAccess === ACCESS_ENUM.ADMIN) {
    //如果用户不是管理员，无权限
    if (loginUserAccess !== ACCESS_ENUM.ADMIN) {
      return false;
    }
  }
  return true;
};
export default checkAccess;
