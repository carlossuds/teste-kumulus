# Frontend React - [Kumulus <img width="50" align="center" src="https://media-exp1.licdn.com/dms/image/C4D0BAQHyUmnT2T1_Bw/company-logo_200_200/0?e=1607558400&v=beta&t=Z2Y2tQlwf4IhQTisI9gizLb3jlIp8dP1ZgSuKrLQsqg">](https://kumulus.com.br/)

## Instalação

- Clonar o projeto 
- Instalar as dependências com o comando ```yarn```
- Iniciar o projeto com o comando ```yarn start```

## O Teste

### Tabela de usuários
  - Liste os usuários em uma tabela usando os dados disponíveis nesta url https://jsonplaceholder.typicode.com/users. ✔
  - Um icone de lixeira deve aparecer apenas quando o usuário estiver passando o mouse sobre a respectiva linha. Ao clicar no ícone da lixeira uma caixa de diálogo de confirmação
aparecerá antes de deletar a linha, e só continua a deleção se o usuário confirmar.  ✔
  - BÔNUS 1: Crie uma entrada de pesquisa para a tabela. Faça-o filtrar as linhas da tabela por nome ou nome de usuário. ✔
  - BÔNUS 2: Crie páginação para tabela com 5-10 linhas. ✔

### Novo/ Editar usuário
  - Adicione/ Edit uma nova linha. Necessário navegar para uma segunda página onde ao clicar em "salvar" a linha será adicionada/ editada na tabela. ℹ
   > **Observação:** O json server de usuários do link acima não atualizava os registros quando eu mandei ```PUT``` ou ```POST``` apesar de me retornar sucesso. Por isso, fiz o **Adicionar** e **Remover** Usuários driblando esse problema. **Atualizar** não foi possível.
  - BÔNUS 1: Valide o formulário antes de enviá-lo.(dica: react-router-dom) ✔

### Complemento da página
-  Crie header e footer para a aplicação, utilize imagens .svg e estilos desejados. O footer deve conter uma estrutura com 3 colunas: Páginas | Contato | Endereço. ✔
