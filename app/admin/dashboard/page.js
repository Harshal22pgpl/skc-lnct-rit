import injectToken from "@/app/actions";
import Dashboard from "@/app/components/Dashboard/AdminDashboard";
import { getAllNews } from "@/app/lib/services/news/news";
import { getEvent } from "@/app/lib/services/events/events"; 
import { getAllNotice } from "@/app/lib/services/notice/notice";
import { getAllSeminar } from "@/app/lib/services/seminar/seminar";


async function AdminDashboard(props) {
  const isFailed = await injectToken();
  const clientProps = {};
  clientProps.isFailed = isFailed;
  
  if (!isFailed) {


    clientProps.seminar = await getAllSeminar();
    clientProps.news = await getAllNews();
    clientProps.notice = await getAllNotice();
    clientProps.event = await getEvent();

    clientProps.isFailed = false;
  }

  return (
    <>
      <Dashboard clientProps={clientProps} />
    </>
  );
}

export default AdminDashboard;
