import { Card, Elevation, Button, Classes } from "@blueprintjs/core";
import cn from "classnames";
import RatingStars from "./RatingStars";
import { useState } from "react";
const Product = ({ prod }) => {
  const [descLength, setDescLength] = useState("less");

  return (
    <Card className="product" elevation={Elevation.TWO}>
      <div className="image">
        <img src={prod.image} />
      </div>
      <div className="meta">
        <h2 className="prod-title">{prod.title}</h2>
        <div className="prod-price">${prod.price}</div>
        <RatingStars rating={prod.rating.rate} reviews={prod.rating.count} />
        <p className={cn({ "prod-desc": true, "desc-full": descLength == "full" })}>
          {prod.description}
        </p>
        <Button
          onClick={() => setDescLength((prev) => (prev == "less" ? "full" : "less"))}
          className={Classes.MINIMAL}
          small
          rightIcon={descLength == "less" ? "arrow-down" : "arrow-up"}
          text={descLength == "less" ? "Show more" : "Show Less"}
        />
      </div>
    </Card>
  );
};
export default Product;
