import Button from "../components/Button";
import Form from "../components/Form";
import Layout from "../components/Layout";
import Table from "../components/Table";

import useBuy from "../hooks/useBuy";

export default function Home() {
  const {
    buy,
    buys,
    newBuy,
    saveBuy,
    selectBuy,
    deleteBuy,
    tableVisible,
    displayTable,
  } = useBuy();

  return (
    <div
      className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `}
    >
      <Layout title="Formulário para compra de Adesivos">
        {tableVisible ? (
          <>
            <div className="flex justify-end">
              <Button cor="green" className="mb-4" onClick={newBuy}>
                Novo Cliente
              </Button>
            </div>
            <Table buys={buys} buySelected={selectBuy} buyDeleted={deleteBuy} />
          </>
        ) : (
          <Form buy={buy} buyTurn={saveBuy} cancel={displayTable} />
        )}
      </Layout>
    </div>
  );
}
