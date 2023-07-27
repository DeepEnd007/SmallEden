import { useState } from "react";
import "./SearchBox.css";
import search from "../assets/search_icon.png";

function SearchBox() {
  const [searchValue, setSearchValue] = useState("");
  const handleInputChange = (event) => {
    // 从事件对象中获取输入框的值，并更新"searchValue"状态
    setSearchValue(event.target.value);
  };

  // 模拟执行搜索的函数，你可以根据实际需求进行处理
  const handleSearch = () => {
    console.log("Performing search with value:", searchValue);
    // 在这里可以执行搜索相关的操作
  };
  return (
    <>
      <div className="input-box">
        <input
          type="text"
          spellCheck="false"
          className="search-input"
          placeholder="Log in to explore more"
          value={searchValue} // 将输入框的值与"searchValue"状态绑定
          onChange={handleInputChange}
        />
        <div className="input-button" onClick={handleSearch}>
          <div className="search-icon">
            <img className="search" src={search} />
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchBox;
