function Item({ name, isPacked }) {
    return <li className="item">{isPacked ? `${name} ✓` : name}</li>;
}

export default function DescriptionList() {
    const wiki = "https://irmaodojorel.fandom.com/pt-br/wiki/Irm%C3%A3o_do_Jorel";
    const texto = "To Do List - retorno único";

    return (
        <>
            <p>{texto}</p>
            <ul>
                <li><a href={wiki}>Página Oficial</a></li>
                <Item isPacked={true} name="Nome: Irmão do Jorel" />
                <Item isPacked={false} name="Idade: 8 anos" />
                <Item isPacked={true} name="Voz: Andrei Duarte" />
            </ul>
        </>
    );
}