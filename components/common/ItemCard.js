import Image from "next/image";
const ItemCard = (props) => {
  return (
    <>
      <div className="col-md-2">
        <div className="categories-item">
          <div className="categories-item-image">
            <Image
              height="100"
              width="100"
              src={props.image}
              alt="Picture of the author"
            />
          </div>
          <div className="category-card-body pt-0">
            <a
              href="departments.html"
              className="intro-category-title title text-dark h5"
            >
              {props.title}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemCard;
