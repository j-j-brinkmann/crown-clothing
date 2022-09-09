import CategoryItem from "../category-item/category-item.component";
import "./directory.styles.scss";

const Directory = ({ categories }) => {
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
        // <div key={category.id} className="category-container">
        //   <div
        //     className="background-image"
        //     style={{ backgroundImage: `url(${category.imageUrl})` }}
        //   />
        //   <div className="category-body-container">
        //     <h2>{category.title}</h2>
        //     <p>Shop Now</p>
        //   </div>
        // </div>
      ))}
    </div>
  );
};

export default Directory;
