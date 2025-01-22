import Button from "../Button";
import Input from "../Input";
import Label from "../Label";

function Form({ path }) {
  return (
    <form>
      <div className="mb-4">
        <Label id="cpf" text="CPF:" />
        <Input type="text" id="cpf" />
      </div>
      <div className="mb-6">
        <Label id="password" text="Senha:" />
        <Input type="text" id="password" />
      </div>
      <Button type="submit" text="Logar" link={path} />
    </form>
  );
}

export default Form;
