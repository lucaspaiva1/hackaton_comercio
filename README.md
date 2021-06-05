## Como Configurar Frontend

```bash
cd front
```

#### Instalar dependencias

```bash
npm install
```

#### Executar (porta 8080)

```bash
npm run serve
```

## Como Configurar API

```bash
cd api
```

#### Instalar dependencias

```bash
npm install
```

#### Criar banco de dados [sqlite]

```bash
npm run migrate
```

#### Popular banco de dados

```bash
npm run seed
```

#### Executar (porta 3000)

```bash
npm run watch
```

# Sobre o Projeto

De forma simplificada o sistema é uma plataforma de afiliados para produtos físicos que visa levar o consumidor até o comerciante local. Os vendedores afiliados possuem filtros para visualizar apenas produtos da sua região, e a retirada dos pedidos acontece ou de forma local ou via delivery simples (motoboy, veículo próprio, etc).

Entidades:

- `Lojista`
- `Vendedor`
- `Consumidor Final`

Na página de login do sistema `http://localhost:8080/login` é possível ter acesso como um `Lojista` ou `Vendedor`. Para essa etapa do MVP `Consumidor final` não tem cadastro.

Credenciais Lojista:

> usuario: 111.111.111-11 \
> senha: 123456

Credenciais Vendedor:

> usuario: 111.222.111-22 \
> senha: 123456

## Fluxo Lojista

O lojista, assim que faz login ao sistema é redirecionado para uma tela onde é possível cadastrar um novo produto, listar os produtos cadastrados e listas os pedidos realizado.

Essa tela foi pensada para ser mais simples possível, pois na validação percebemos que a falta de experiência dos usuários lojistas com tecnologia acaba intimidando os mesmo de usar tecnologia.

Ainda precisa ser desenvolvido os métodos para editar e remover produto, caso o lojista deseje alterar valores de venda, comissão ou estoque.

Na sessão Meus Pedidos, é possível acompanhar os pedidos a medida que são realizados na plataforma.

## Fluxo Vendedor

O vendedor consegue de forma fácil encontrar os produtos disponíveis na plataforma cadastrados por lojistas. É possível filtrar por nome do produto e ordenar por preço, comissão e estoque, viabilizando o vendedor de traçar estratégias de acordo com o seu tipo de venda. Os produtos exibidos já são automaticamente fitrados pela cidade informada no registro do vendedor.

Clicando em um produto da lista é possível ver mais informações sobre o produto, bem como adicionar o produto lista de produtos do vendedor.

Na sessão `Meus Produtos` o vendedor consegue visualizar os produtos ativos e gerar links para compartilhas com os consumidores.

O vendedor também consegue acompanhar as vendas realizadas, assim como o lojista.

## Fluxo Consumidor

O consumidor chega até a plataforma por meio dos links de vendedores. Esse link redieriona o usuário a tela do produto, onde pode visualizar detalhes do produto e informações do lojista. Nessa tela o consumidor irá decidir a quantidade de itens que deseja e finalizar o pedido.

Ao clicar em finalizar pedido um modal de confirmação é exibido para download do voucher. Esse voucher deve ser entregue ao lojista para realizar a retirada do produto.
