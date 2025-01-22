import { Link } from "react-router-dom";
import Form from "../components/Form/Form";

function LoginPage() {
  return (
    <>
      <div className="bg-slate-100 w-screen h-screen flex justify-center items-center">
        <div className="bg-white p-10 rounded-lg shadow-md min-w-96">
          <h2 className="text-black font-bold mb-6 flex justify-center">
            Logar na sua conta
          </h2>
          <Form path="/home" />
          <div className="flex justify-center">
            <p className="text-black mt-3">
              Não tem conta?{" "}
              <Link to="/cadastra-se" className="text-blue-500">
                Cadastre-se
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
