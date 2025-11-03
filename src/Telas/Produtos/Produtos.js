export default function Produtos(){
    return(
    <div>
        <h1>Página de Produtos</h1>
        <form>
            <label>Descrição do produto</label>
            <input name="nome"/>
            <br/>
            <label>Valor da venda</label>
            <input name="valorVenda" type="number" step="0.01"/>
            <br/>
            <label>Código de barras</label>
            <input name="codigoBarras" type="text"/>
            <br/>
            <label>Estoque</label>
            <input name="estoque" type="number"/>
            <br/>
            <button>Cadastrar produto</button>
        </form>
        <br/>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Valor de venda</th>
                    <th>Código de barras</th>
                    <th>Quantidade em estoque</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Pistão forjado</td>
                    <td>R$399,98</td>
                    <td>123456789</td>
                    <td>10</td>
                    <td>
                        <button>Editar</button>
                        <button>Excluir</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>)
}