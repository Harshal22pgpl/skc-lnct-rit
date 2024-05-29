import React from 'react'
import SeminarParent from "@/app/components/Seminar/SeminarParent";
import injectToken from "@/app/actions";
import { getAllSeminar } from "@/app/lib/services/seminar/seminar";
export default async function page() {
  const isFailed = await injectToken();
  const clientProps = {};
  clientProps.isFailed = isFailed;
  clientProps.noticeList = await getAllSeminar();
  clientProps.isFailed = false;
  return (
    <div><SeminarParent clientProps={clientProps} /></div>
  )
}
