const apiUrls = {
  REGISTER: `/doctor/register`,
  LOGIN: `/doctor/login`,
  ADDPATIENT:`/doctor/add-patient`,
  GETPATIENTLIST: (doctorId) => `/doctor/patients-list/${doctorId}`
}

export default apiUrls;