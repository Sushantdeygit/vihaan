import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "@/features/user/userSlice";
import s from "./Navbar.module.css";
export const Navbar = () => {
  const dispatch = useDispatch();
  const { isAuth } = useSelector((store) => store.User);
  return (
    <nav className={s.navMain}>
      {/* <header className={s.navMainHeader}>ProjectX</header> */}
      <ul className={s.navMainLinks}>
        <li>
          <a className={s.navMainLinksLink} href={"#"}>
            About
          </a>
        </li>
        <li>
          <a className={s.navMainLinksLink} href={"#"}>
            Contact
          </a>
        </li>
        <li>
          {isAuth ? (
            <Link
              onClick={(e) => {
                e.preventDefault();
                dispatch(logoutUser());
              }}
              href={"#"}
              className={s.navLogout}
            >
              Logout
            </Link>
          ) : (
            <Link className={s.navMainLinksLink} href="/login">
              Login
            </Link>
          )}
        </li>
      </ul>
      <header className={s.navMainButtons}></header>
    </nav>
  );
};
