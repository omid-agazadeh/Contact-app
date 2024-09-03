const finalSub = (data, inputs) => {
   const newData = [];
   data.map((data) => {
      return data.id !== inputs.id ? newData.push(data) : newData.push(inputs);
   });
   return newData;
};
const createInputValidate = (data) => {
   const errors = {};
   const nameValidate = /^[a-zA-z\u0600-\u06FF\s\d]{4,16}$/;
   const emailValidate = /^[\w_\.]+@[a-zA-Z]+\.[a-zA-Z]{2,3}$/;
   const phoneNumberValidate = /^(\+98|0)?9\d{9}$/;
   if (!data.name.trim()) {
      errors.name = 'لطفا این قسمت را خالی نگذارید';
   } else if (!nameValidate.test(data.name.trim())) {
      errors.name = 'تعداد کراکتر باید بین 4 و 16 حرف باشد';
   }
   if (!data.email.trim()) {
      errors.email = 'این فیلد نباید خالی باشه';
   } else if (!emailValidate.test(data.email.trim())) {
      errors.email = 'این ایمیل نادرست است';
   }
   if (data.job.trim() && !nameValidate.test(data.job.trim())) {
      errors.job = 'تعداد کراکترهای این فیلد باید بین 4 و 16 عدد باشده';
   }
   if (data.phoneNumber.trim() && !phoneNumberValidate.test(data.phoneNumber.trim())) {
      errors.phoneNumber = 'شماره موبایل وارد شده صحیح نمی باشد';
   }
   return errors;
};
const edtiInputValidate = (inputs) => {
   const prevError = {};
   const nameValidate = /^[a-zA-z\u0600-\u06FF\s\d]{4,16}$/;
   const emailValidate = /^[\w_\.]+@[a-zA-Z]+\.[a-zA-Z]{2,3}$/;
   const phoneNumberValidate = /^(\+98|0)?9\d{9}$/;
   if (!inputs.name.trim()) {
      prevError.name = 'لطفا این قسمت را خالی نگذارید';
   } else if (!nameValidate.test(inputs.name.trim())) {
      prevError.name = 'تعداد کراکتر باید بین 4 و 16 حرف باشد';
   }
   if (!inputs.email.trim()) {
      prevError.email = 'این فیلد نباید خالی باشه';
   } else if (!emailValidate.test(inputs.email.trim())) {
      prevError.email = 'این ایمیل نادرست است';
   }
   if (inputs.job.trim() && !nameValidate.test(inputs.job.trim())) {
      prevError.job = 'تعداد کراکترهای این فیلد باید بین 4 و 16 عدد باشده';
   }
   if (inputs.phoneNumber.trim() && !phoneNumberValidate.test(inputs.phoneNumber.trim())) {
      prevError.phoneNumber = 'شماره موبایل وارد شده صحیح نمی باشد';
   }
   return prevError;
};
export { finalSub, createInputValidate, edtiInputValidate };
