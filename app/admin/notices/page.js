import React from 'react'
import NoticeParent from '@/app/components/Notice/NoticeParent'
import injectToken from "@/app/actions";
import { getAllNotice } from "@/app/lib/services/notice/notice";
export default async function page() {
  const isFailed = await injectToken();
  const clientProps = {};
  clientProps.isFailed = isFailed;
  clientProps.noticeList = await getAllNotice();
  clientProps.isFailed = false;
  return (
    <div><NoticeParent clientProps={clientProps} /></div>
  )
}
