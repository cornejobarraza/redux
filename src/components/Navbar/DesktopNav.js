import { Pages } from "components/Navbar/Pages";
import { SearchBar } from "components/Navbar/SearchBar";
import { Account } from "components/Navbar/Account";

export { DesktopNav };

function DesktopNav({ user }) {
  return (
    <>
      <Pages />
      <SearchBar user={user} />
      <span className="name">
        Hello, <span className="text-redux-500">{user?.name.split(" ")[0]}</span>
      </span>
      <Account user={user} />
    </>
  );
}
