export { SearchBar };

function SearchBar({ user }) {
  return <input className="searchbar" placeholder={`Search here ${user?.name.split(" ")[0]}`} />;
}
