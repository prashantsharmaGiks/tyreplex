import styles from "../styles/filter.module.css";

const FilterSortComponent = () => {
  return (
    <div className={styles.filterSortContainer}>
      <div className={styles.filters}>
        <select>
          <option value="All">Filter by Category</option>
          <option value="All-Terrain">All-Terrain</option>
          <option value="Highway">Highway</option>
          <option value="Mud-Terrain">Mud-Terrain</option>
        </select>
        <select>
          <option value="All">Filter by Brand</option>
          <option value="MRF">MRF</option>
          <option value="Goodyear">Goodyear</option>
          <option value="Bridgestone">Bridgestone</option>
        </select>
      </div>
      <div className={styles.sorting}>
        <select>
          <option value="price-asc">Sort by Price (Low to High)</option>
          <option value="price-desc">Sort by Price (High to Low)</option>
          <option value="rating">Sort by Rating</option>
        </select>
      </div>
    </div>
  );
};

export default FilterSortComponent;
