import React from "react";
import NewsParentForm from "@/app/components/News/NewsParentForm";
import injectToken from "@/app/actions";
import { getAllNews } from "@/app/lib/services/news/news";

export default async function page() {
  const isFailed = await injectToken();
  const clientProps = {};
  clientProps.isFailed = isFailed;
  clientProps.newsList = await getAllNews();
  clientProps.isFailed = false;


  return (
    <div>
      <NewsParentForm clientProps={clientProps} />
    </div>
  );
}
