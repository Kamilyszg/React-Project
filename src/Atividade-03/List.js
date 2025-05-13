function filtrarAvos(personagens) {
  return personagens.filter(person =>
    person.parentesco === 'Avó materna' || person.parentesco === 'Avó paterna'
  );
}

export default function List() {
    const personagens = [
        { id: 1, nome: 'Dona Danuza', parentesco: 'Mãe' },
        { id: 2, nome: 'Seu Edson', parentesco: 'Pai' },
        { id: 3, nome: 'Vovó Juju', parentesco: 'Avó materna' },
        { id: 4, nome: 'Vovó Gigi', parentesco: 'Avó paterna' },
        { id: 5, nome: 'Toshi', parentesco: 'Cachorro' },
        { id: 6, nome: 'Nico', parentesco: 'Irmão' },
        { id: 7, nome: 'Jorel', parentesco: 'Irmão' },
        { id: 8, nome: 'Irmão do Jorel', parentesco: 'Protagonista' }
    ];

    const avos = filtrarAvos(personagens);

    return (
        <>
            <p>Todos os personagens</p>
            <ul>{personagens.map(p => (<li key={p.id}>{p.nome} – {p.parentesco}</li>))}</ul>

            <p>Apenas as avós</p>
            <ul>{avos.map(p => (<li key={p.id}>{p.nome} – {p.parentesco}</li>))}</ul>
        </>
    );
}
