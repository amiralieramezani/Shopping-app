import { useTheme } from "../Context/ThemeProvider";

const Theme = ({ children }) => {
  let classname = useTheme();
  return <div className={classname.class}>{children}</div>;
};

export default Theme;
