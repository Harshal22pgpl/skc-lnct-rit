import { api } from "@/app/lib/middleware/apiInceptor";
import { NEWS } from "..";
import { toast } from "react-toastify";
import { handleError } from "@/app/lib/helpers/handleErrors";
import { isEmpty } from "lodash";


export const addNews = async (payload) => {
  const res = await api.post(NEWS, payload);
  if (res) {
    console.log(res," hhhhhhhhh");
    return res;
  }
};

export const getAllNews = async (schoolUuid = "") => {
  let res;
  try {
    if (!schoolUuid) {
      res = await api.get(NEWS);
    } else {
      res = await api.get(`${NEWS}/all/${myUuid}`);
    }
    return res.data.payload.data;
  } catch (error) {
    handleError(error);
  }
};

export const updateNews = async (payload) => {
  try {
    delete payload.Roles;
    const res = await api.put(`${NEWS}/${payload.uuid}`, payload);
    toast.success(res.data.message);
    return res.data.payload;
  } catch (err) {
    console.log("error");
  }
};

export const deleteNews = async (uuid) => {
  try {
    const res = await api.delete(`${NEWS}/${uuid}`);
    toast.success(res.data.message);
  } catch (err) {
    // handleError(error);
    console.log("error");
  }
};

export const getNewsDetails = async (uuid) => {
  try {
    const res = await api.get(`${NEWS}/${uuid}`);
    return res.data.payload;
  } catch (error) {
    handleError(error);
  }
};
