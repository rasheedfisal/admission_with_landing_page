import { authApi } from "./axios";

export const getAdmissionByPhone = async (phone) => {
  const response = await authApi.get(`admission/GetAdmission?ph=${phone}`);
  return response.data;
};

export const getAdmissionReportByPhone = async (phone) => {
  const response = await authApi.get(
    `admission/GetAdmissionReport?ph=${phone}`
  );
  return response.data;
};

export const createAdmissionFn = async (formData) => {
  const response = await authApi.post(`admission/add`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};

export const updateAdmissionFn = async (formData) => {
  const response = await authApi.put(`admission/Update`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};

export const deleteStdFn = async (id) => {
  const response = await authApi.delete(`admission/deletestd?stdid=${id}`);
  return response.data;
};

export const objectToFormData = (obj, form, namespace) => {
  var fd = form || new FormData();
  var formKey;

  for (var property in obj) {
    if (obj.hasOwnProperty(property)) {
      if (namespace) {
        formKey = namespace + "[" + property + "]";
      } else {
        formKey = property;
      }

      // if the property is an object, but not a File,
      // use recursivity.
      if (
        typeof obj[property] === "object" &&
        !(obj[property] instanceof File)
      ) {
        objectToFormData(obj[property], fd, property);
      } else {
        // if it's a string or a File object
        fd.append(formKey, obj[property]);
      }
    }
  }

  return fd;
};

export const buildFormData = (formData, data, parentKey) => {
  if (
    data &&
    typeof data === "object" &&
    !(data instanceof Date) &&
    !(data instanceof File)
  ) {
    Object.keys(data).forEach((key) => {
      buildFormData(
        formData,
        data[key],
        parentKey ? `${parentKey}[${key}]` : key
      );
    });
  } else {
    const value = data == null ? "" : data;

    formData.append(parentKey, value);
  }
};

// export function obj2FormData(obj, formData = new FormData()) {
//   this.formData = formData;

//   this.createFormData = function (obj, subKeyStr = "") {
//     for (let i in obj) {
//       let value = obj[i];
//       let subKeyStrTrans = subKeyStr ? subKeyStr + "[" + i + "]" : i;

//       if (typeof value === "string" || typeof value === "number") {
//         this.formData.append(subKeyStrTrans, value);
//       } else if (typeof value === "object") {
//         this.createFormData(value, subKeyStrTrans);
//       }
//     }
//   };

//   this.createFormData(obj);

//   return this.formData;
// }
