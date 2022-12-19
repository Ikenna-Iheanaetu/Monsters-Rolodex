import "./search-box-styles.css";

const SearchBar = ({ className, placeholder, onChange }) => (
    
    <input
        type="search"
        className={` search-box ${className} `}
        placeholder={placeholder}
        onChange={onChange}
    />
)

export default SearchBar;
