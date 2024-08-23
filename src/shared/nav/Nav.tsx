//import BottomNav from "./BottomNav";
//import { NavigationMenuDemo } from "./BottomNavigation";
import { NavigationMenuDemo } from "./BottomNavigation";
import MiddleNav from "./MiddleNav";
import TopNav from "./TopNav";

const Nav = () => {
  return (
    <div className="">
      <TopNav />
      <MiddleNav />
      {/* <BottomNav /> */}
      <NavigationMenuDemo />
    </div>
  );
};

export default Nav;
