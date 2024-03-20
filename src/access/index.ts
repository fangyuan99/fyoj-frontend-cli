import router from "@/router";
import store from "@/store";
import ACCESS_ENUM from "@/access/accessEnum";
import checkAccess from "@/access/checkAccess";

router.beforeEach(async (to, from, next) => {
  const loginUser = store.state.user?.loginUser;
  if (!loginUser || !loginUser.userRole) {
    //等用户登录之后再执行后续操作
    await store.dispatch("user/getLoginUser");
  }
  const needAccess = (to.meta.access as string) ?? ACCESS_ENUM.NOT_LOGIN;
  if (needAccess !== ACCESS_ENUM.NOT_LOGIN) {
    if (!loginUser || !loginUser.userRole) {
      next("/user/login?redirect=" + to.fullPath);
    }
    if (!checkAccess(loginUser, needAccess)) {
      next("/noAuth");
    }
  }
  next();
});
