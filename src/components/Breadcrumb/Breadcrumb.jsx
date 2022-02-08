import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import {
  BreadcrumbItem,
  BreadcrumbItemLink,
  BreadcrumbWrapper,
} from "./Breadcrumb.elements";

const Breadcrumb = () => {
  const [categoryName, setCategoryName] = useState("");
  const { category } = useParams();
  let location = useLocation();

  useEffect(() => {
    switch (category) {
      case "figures":
        setCategoryName("Figures & Dolls");
        break;
      case "plushies":
        setCategoryName("Plushies");
        break;
      case "manga":
        setCategoryName("Manga");
        break;

      default:
        break;
    }
  }, [category]);

  return (
    <BreadcrumbWrapper>
      <BreadcrumbItem>
        <BreadcrumbItemLink to="/">Home</BreadcrumbItemLink>
      </BreadcrumbItem>
      {location.pathname === "/cart" ? (
        <BreadcrumbItem>Cart</BreadcrumbItem>
      ) : (
        <>
          {category ? (
            <>
              <BreadcrumbItem>
                <BreadcrumbItemLink to="/shop">Store</BreadcrumbItemLink>
              </BreadcrumbItem>
              <BreadcrumbItem>{categoryName}</BreadcrumbItem>
            </>
          ) : (
            <BreadcrumbItem>Store</BreadcrumbItem>
          )}
        </>
      )}
    </BreadcrumbWrapper>
  );
};

export default Breadcrumb;
