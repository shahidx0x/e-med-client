import axios from "axios";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Toaster, toast } from "react-hot-toast";
import { useNavigate } from "react-router";
import { server_url } from "../../config/server.confg";
import { AuthContext } from "../../providers/AuthProvider";
import video from "./video.mp4";
export default function Signup() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const { createUser } = useContext(AuthContext);
  function success() {
    setTimeout(() => {
      navigate("/");
    }, 2000);
    return (
      <>
        <b>sign up success</b>
      </>
    );
  }
  // errors && toast.error(errors);
  const onSubmit = (data) => {
    const payload = {
      name: data.username,
      email: data.email,
      role: "user",
      address: "",
      profile:
        "https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg",
      gender: "",
      age: "",
      contact: "",
    };
    if (data.pass !== data.con_pass)
      toast.error("Confirm Password Doesnt Match !");
    toast.promise(
      createUser(data.email, data.pass).then(() =>
        axios
          .post(server_url + "/users", payload)
          .then((res) =>
            res.status === 200
              ? toast.success(<b>Data Saved Successully</b>)
              : toast.error("Failed to save user")
          )
          .catch((err) => toast.error(err.message))
      ),
      {
        loading: "Please Wait ...",
        success: success,
        error: (err) => <b>{err.message}</b>,
      }
    );
  };
  return (
    <div>
      <Toaster />
      <section className="p-6 bg-gray-100 text-gray-800">
        <div className="flex lg:flex-row flex-col justify-center gap-10">
          <div className="w-full  max-w-md p-8 space-y-3 rounded-xl bg-gray-50 text-gray-800">
            <h1 className="text-2xl font-bold text-center">Sign up</h1>
            <form
              onSubmit={handleSubmit(onSubmit)}
              noValidate=""
              action=""
              className="space-y-6"
            >
              <div className="space-y-1 text-sm">
                <label htmlFor="username" className="block text-gray-600">
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  {...register("user", { required: true })}
                  className="w-full border-2 px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-indigo-600"
                />
                <div data-lastpass-icon-root="true"></div>
              </div>
              <div className="space-y-1 text-sm">
                <label htmlFor="username" className="block text-gray-600">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  {...register("email", { required: true })}
                  className="w-full border-2 px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-indigo-600"
                />
                <div data-lastpass-icon-root="true"></div>
              </div>
              <div className="space-y-1 text-sm">
                <label htmlFor="username" className="block text-gray-600">
                  Password
                </label>
                <input
                  type="password"
                  name="username"
                  id="username"
                  placeholder="Username"
                  {...register("pass", { required: true })}
                  className="w-full border-2 px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-indigo-600"
                />
                <div data-lastpass-icon-root="true"></div>
              </div>
              <div className="space-y-1 text-sm">
                <label htmlFor="password" className="block text-gray-600">
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  {...register("con_pass", { required: true })}
                  className="w-full border-2 px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-indigo-600"
                />

                <div data-lastpass-icon-root="true"></div>
              </div>
              <button className="block w-full p-3 text-center rounded-sm text-gray-50 bg-indigo-600">
                Sign up
              </button>
            </form>
          </div>
          <video className="rounded" width="70%" height="500" loop autoPlay>
            <source src={video} type="video/mp4" />
          </video>
        </div>
      </section>
    </div>
  );
}
