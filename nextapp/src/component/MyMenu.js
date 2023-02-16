import { useRouter } from "next/router";
import React from "react";
import { Menu } from "semantic-ui-react";

export default function MyMenu() {
  let activeItem = "home";
  const router = useRouter();

  if (router.pathname === "/") activeItem = "home";
  else if (router.pathname === "/about") activeItem = "about";

  function goLink(e, data) {
    if (data.name === "home") {
      router.push("/");
    } else if (data.name == "about") {
      router.push("/about");
    }
  }

  return (
    <div style={{ paddingLeft: 20 }}>
      <Menu inverted>
        <Menu.Item
          name="home"
          active={activeItem === "home"}
          onClick={goLink}
        />
        <Menu.Item
          name="about"
          active={activeItem === "about"}
          onClick={goLink}
        />
        <Menu.Item
          name="friends"
          active={activeItem === "friends"}
          //          onClick={this.handleItemClick}
        />
      </Menu>
    </div>
  );
}
