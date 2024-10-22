import { useContext } from "react";
import { Context } from "../main";
import { useMutation } from "react-query";
import authService from "../services/auth.service";

export const useAuth = (reset, navigate) => {
  const { user } = useContext(Context);
  // console.log(user.user)

  const { mutate: registration } = useMutation({
    mutationKey: ["registration"],
    mutationFn: async (data) => {
      await authService.registration(data, user);
    },
    onSuccess: () => {
      reset();
      user.setIsAuth(true);
      navigate("/");
    },
  });

  const { mutate: login } = useMutation({
    mutationKey: ["login"],
    mutationFn: async (data) => {
      await authService.login(data, user);
    },
    onError: () => {
      user.setIsAuth(false);
    },
    onSuccess: () => {
      reset();
      user.setIsAuth(true);
      navigate("/");
    },
  });

  const { mutate: refresh } = useMutation({
    mutationKey: ["refresh"],
    mutationFn: async () => {
      await authService.refresh();
    },
    onSuccess: () => {
      user.setIsAuth(true);
    },
  });

  const { mutate: logout } = useMutation({
    mutationKey: ["logout"],
    mutationFn: async () => {
      await authService.logout();
    },
    onSuccess: () => {
      user.setIsAuth(false);
    },
  });

  return {
    login,
    registration,
    refresh,
    logout,
  };
};
