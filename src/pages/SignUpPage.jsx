import { Link } from "react-router-dom";
import Form from "../components/Form/Form";

function SignUpPage() {
  return (
    <>
      <div className="bg-slate-100 w-screen h-screen flex justify-center items-center">
        <div className="bg-white p-10 rounded-lg shadow-md min-w-96">
          <h2 className="text-black font-bold mb-6 flex justify-center">
            Cadastrar-se
          </h2>
          <Form path="/"/>
          <div className="flex justify-center">
            <p className="text-black mt-3">
              Já possui conta?{" "}
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

export default SignUpPage;
