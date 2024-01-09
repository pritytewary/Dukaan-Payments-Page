import Layout from "./components/layout";
import Payout from "./components/payment";

function App() {
  return (
    <Layout
      active="payments"
      headerProps={{
        title: "Payments",
      }}
    >
      <Payout />
    </Layout>
  );
}

export default App;
