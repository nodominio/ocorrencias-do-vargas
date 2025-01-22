import Label from "../Label";
import Input from "../Input";
import Button from "../Button";
import Select from "../Select";

function OcorrenciaForm() {
  return (
    <form className="mb-4">
      <div className="mb-4 flex flex-row justify-between">
        <div className="mr-2">
          <Label id="class" text="Turma:" />
          <Select/>
        </div>
        <div className="ml-2">
          <Label id="student" text="Aluno(a):" />
          <Input type="text" id="student" />
        </div>
      </div>
      <div className="mb-4">
        <Label id="select" text="Ocorrências:" />
        <Select />
      </div>

      <div className="mb-6">
        <Label id="description" text="Motivo(s) da ocorrência:" />
        <Input type="text" id="description" className="" />
      </div>

      <Button type="submit" text="Enivar"></Button>
    </form>
  );
}

export default OcorrenciaForm;
