import React from 'react'
import EventParentForm from '@/app/components/Event/EventParentForm'
import injectToken from "@/app/actions";
import { getEvent } from '@/app/lib/services/events/events';

export default async function page() {
  const isFailed = await injectToken();
  const clientProps = {};
  clientProps.isFailed = isFailed;
  clientProps.events = await getEvent();
  clientProps.isFailed = false;
  

  return (
    <div><EventParentForm clientProps={clientProps}/></div>
  )
}
