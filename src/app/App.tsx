import { AppRouter } from "@/core/router/AppRouter";
import { Toaster } from "@/shared/components";

const App = () => {
  return (
    <>
      <AppRouter />
      <Toaster />
    </>
  );
};

export default App;
