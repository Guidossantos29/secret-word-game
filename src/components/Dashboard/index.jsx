
const Dashboard = ({name, cpf, idade, pickedColor}) => {
    return(
        <div>
            <h1 style={{fontSize: '58px', color: pickedColor ? pickedColor : 'red'}}>Dados do Usuário</h1>
            <h1>Nome: {name} </h1>
            <h1>CPF: {cpf}</h1>
            <h1>Idade: {idade}</h1>
        </div>
    );
}

export default Dashboard;


color: `${({theme}) => theme.pickedColor}`