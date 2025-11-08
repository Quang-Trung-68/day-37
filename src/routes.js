import { PATHS } from "@/configs/paths.js";
import { LAYOUTS } from "@/configs/layouts.js";
import NotFound from "./pages/NotFound";
import EditAvatar from "./pages/EditAvatar";
import UseRef from "./pages/UseRef";
import ReactMemo from "./pages/ReactMemo";

export const ROUTES = [
  {
    layout: LAYOUTS.DEFAULT,
    children: [
      {
        path: PATHS.EDIT_AVATAR,
        title: "Edit avatar",
        element: EditAvatar,
        isShowInNav: true,
      },
      {
        path: PATHS.USE_REF,
        title: "Use Ref",
        element: UseRef,
        isShowInNav: true,
      },
      {
        path: PATHS.REACT_MEMO,
        title: "React memo",
        element: ReactMemo,
        isShowInNav: true,
      },
    ],
  },
  {
    layout: LAYOUTS.NO_LAYOUT,
    children: [
      {
        path: PATHS.NOT_FOUND,
        title: "Not Found",
        element: NotFound,
        isShowInNav: false,
      },
    ],
  },
];
