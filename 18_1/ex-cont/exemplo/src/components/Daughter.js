import MyContext from "./MyContext";

function Daughter() {
  return (
    <MyContext.Consumer>
      {({ inheritance, spendInheritance }) => (
        <div>
          <span>
            {`Tenho uma herança de R$ ${inheritance} que recebi do meu bisavô`}
          </span>
          <button type="button" onClick={spendInheritance}>Torrar 100 Reais do velho</button>
        </div>
      )}
    </MyContext.Consumer>
  );
}

export default Daughter;
