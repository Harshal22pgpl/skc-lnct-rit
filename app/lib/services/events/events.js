import { api } from "@/app/lib/middleware/apiInceptor";
import { EVENTS } from "..";
import { toast } from "react-toastify";
import { handleError } from "@/app/lib/helpers/handleErrors";
export const addEvent = async (payload) => {
  try 
  {
    let res = await api.post(EVENTS, payload);
    toast.success(res.data.message);
    return res.data.payload;
  } catch (error) {
    handleError(error);
  }
};
export const updateEvent = async (payload) => {
  try {
    delete payload.Roles;
    const res = await api.put(`${EVENTS}/${payload.uuid}`, payload);
    toast.success(res.data.message);
    return res.data.payload;
  } catch (error) {
    handleError(error);
  }
};

export const getEvent = async () => {
    try {
        const res = await api.get(EVENTS);
        return res.data.payload.data;
      } catch (error) {
        handleError(error);
      }
};

export const deleteEvent = async (uuid) => {
  try {
    const res = await api.delete(`${EVENTS}/${uuid}`);
    toast.success(res.data.message);
  } catch (error) {
    handleError(error);
  }
};

export const getEventDetails = async (uuid) => {
  try {
    const res = await api.get(`${EVENTS}/${uuid}`);
    return res.data.payload;
  } catch (error) {
    handleError(error);
  }
};
