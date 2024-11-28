import { Link } from 'react-router-dom';

const ForgetPassword = () => {
  return (
    <>
      <div>
        <h1 className="text-indigo-600 font-black text-6xl ">
          Restore Your Access and Your {''}
          <span className="text-black">Patients</span>
        </h1>
      </div>

      <div className="mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white">
        <form action="">
          <div className="my-5">
            <label className="uppercase text-gray-500 block text-xl font-bold">
              Email:
            </label>

            <input
              type="email"
              placeholder="Registration email"
              className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
            />
          </div>

          <input
            type="submit"
            value="Send instructions"
            className="bg-indigo-700 w-full py-3 rounded-xl text-white uppercase font-bold mt-5 cursor-pointer hover:bg-indigo-900 transition-colors ease-in-out duration-700 md:w-auto px-12"
          />
        </form>

        <nav className="mt-10 lg:flex lg:justify-between">
          <Link
            className="block text-center my-5 text-gray-500"
            to="/"
          >
            Have an account? Log in
          </Link>

          <Link
            className="block text-center my-5 text-gray-500"
            to="/register"
          >
            Don't you have an account yet? Sign up
          </Link>
        </nav>
      </div>
    </>
  );
};
   
export default ForgetPassword;