import axiosInstance from '../utils/axiosInstance';
import apiUrl from '../utils/apiUrls';


export const registerDoctor = async (credentials) => {
  const response = await axiosInstance.post(apiUrl.REGISTER, credentials);
  return response.data;
};

export const loginDoctor = async (credentials) => {
  const response = await axiosInstance.post(apiUrl.LOGIN, credentials);
  return response.data;
};

export const addPatient = async (formData) => {
  const response = await axiosInstance.post(apiUrl.ADDPATIENT, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return response.data;
};

export const getPatientsList = async (doctorId) => {
  const response = await axiosInstance.get(apiUrl.GETPATIENTLIST(doctorId));
  return response.data;
};






