import Header from "./components/Header";
import AppProvider from "./context";
import AppRoutes from "./routes";

function App() {
  return (
    <AppProvider>
      <Header />
      <AppRoutes />
    </AppProvider>
  );
}

export default App;
