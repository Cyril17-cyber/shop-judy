import { Search } from "@mui/icons-material";

export default function SearchInput() {
  return (
    <div className="flex items-center bg-gray-100 rounded-lg py-1 px-4 w-full">
      <Search className="text-base! lg:text-lg!" />
      <input
        type="search"
        name="search"
        placeholder="Search Products"
        className="ml-1 p-2 outline-none w-full text-xs lg:text-base"
      />
    </div>
  );
}
