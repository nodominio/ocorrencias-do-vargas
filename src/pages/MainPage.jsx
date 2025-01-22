import OcorrenciaForm from "../components/OcorrenciaForm/OcorrenciaForm";

function MainPage() {
  return (
    <>
      <div className="bg-slate-100 w-screen h-screen flex justify-center items-center">
        <div className="bg-white p-10 rounded-lg shadow-md min-w-96">
          <h2 className="text-black font-bold mb-6 flex justify-center">
            Fazer ocorrência
          </h2>
          <OcorrenciaForm />
        </div>
      </div>
    </>
  );
}

export default MainPage;
