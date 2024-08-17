import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

//import "./style.css";

const BottomNav = () => {
  return (
    <div className="bg-[#3a8472] max-w-[2520px] mx-auto px-4 py-2 md:px-10 xl:px-20 flex justify-around">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem className="">
            <NavigationMenuTrigger className="bg-[#3a8472] text-white text-2xl">
              Camp/Hike
            </NavigationMenuTrigger>
            <NavigationMenuContent className="">
              <NavigationMenuLink>Link 1</NavigationMenuLink>
              <NavigationMenuLink>Link 2</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem className="">
            <NavigationMenuTrigger className="bg-[#3a8472] text-white text-2xl">
              Travel
            </NavigationMenuTrigger>
            <NavigationMenuContent className="">
              <NavigationMenuLink>Link 1</NavigationMenuLink>
              <NavigationMenuLink>Link 2</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem className="">
            <NavigationMenuTrigger className="bg-[#3a8472] text-white text-2xl">
              Food
            </NavigationMenuTrigger>
            <NavigationMenuContent className="">
              <NavigationMenuLink>Link 1</NavigationMenuLink>
              <NavigationMenuLink>Link 2</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem className="">
            <NavigationMenuTrigger className="bg-[#3a8472] text-white text-2xl">
              Events
            </NavigationMenuTrigger>
            <NavigationMenuContent className="">
              <NavigationMenuLink>Link 1</NavigationMenuLink>
              <NavigationMenuLink>Link 2</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem className="">
            <NavigationMenuTrigger className="bg-[#3a8472] text-white text-2xl">
              Gear
            </NavigationMenuTrigger>
            <NavigationMenuContent className="">
              <NavigationMenuLink>Link 1</NavigationMenuLink>
              <NavigationMenuLink>Link 2</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default BottomNav;
