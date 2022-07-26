import {
  Navbar,
  NavbarGroup,
  NavbarDivider,
  NavbarHeading,
  Button,
  Classes,
} from "@blueprintjs/core";
import Link from "next/link";
const Header = () => {
  return (
    <Navbar>
      <NavbarGroup>
        <NavbarHeading>ReactQuery Basic Examples</NavbarHeading>
        <NavbarDivider />
        <Link href={"/"}>
          <Button text="Simple Pagination" className={Classes.MINIMAL} icon="filter" />
        </Link>
        <Link href={"/products"}>
          <Button text="Simple Pagination" className={Classes.MINIMAL} icon="box" />
        </Link>
      </NavbarGroup>
    </Navbar>
  );
};
export default Header;
