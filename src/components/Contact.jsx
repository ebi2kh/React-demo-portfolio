import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

function Contact() {
  const [successMessage, setSuccessMessage] = useState("");

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      message: data.message,
    };
    try {
      await axios.post("https://getform.io/f/ali", userInfo);
      toast.success("Your message has been sent");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16">
        <h1 className="text-3xl font-bold mb-4">تماس با من</h1>
        <span>لطفا برای تماس با من فرم زیر را پر کنید</span>
        <div className="flex flex-col items-center justify-center mt-5">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-slate-200 w-96 px-8 py-6 rounded-xl"
          >
            <h1 className="text-xl font-semibold mb-4">ارسال پیام</h1>
            <div className="flex flex-col mb-4">
              <label className="block text-gray-700">نام کامل</label>
              <input
                {...register("name", { required: true })}
                className="shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                name="name"
                type="text"
                placeholder="نام را وارد کنید"
              />
              {errors.name && <span>این فیلد الزامی است</span>}
            </div>
            <div className="flex flex-col mb-4">
              <label className="block text-gray-700">آدرس ایمیل</label>
              <input
                {...register("email", { required: true })}
                className="shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                name="email"
                type="text"
                placeholder="آدرس ایمیل را وارد کنید"
              />
              {errors.email && <span>این فیلد الزامی است</span>}
            </div>
            <div className="flex flex-col mb-4">
              <label className="block text-gray-700">پیام</label>
              <textarea
                {...register("message", { required: true })}
                className="shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                name="message"
                type="text"
                placeholder="پیام خود را وارد کنید"
              />
              {errors.message && <span>این فیلد الزامی است</span>}
            </div>
            <button
              type="submit"
              className="bg-black text-white rounded-xl px-3 py-2 hover:bg-slate-700 duration-300"
            >
              ارسال
            </button>
            {successMessage && <p>{successMessage}</p>}
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
