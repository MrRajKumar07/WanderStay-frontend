// src/App.jsx

import AppRoutes from "./routes/AppRoutes";
import { ToastProvider } from "./context/ToastContext";
import ErrorBoundary from "./components/ui/ErrorBoundary";

// (Optional but recommended later)
// import Navbar from "./components/common/Navbar";
// import ChatWidget from "./components/chat/ChatWidget";

function App() {
  return (
    <ErrorBoundary>
      <ToastProvider>

        {/* GLOBAL UI (always visible) */}
        {/* <Navbar /> */}

        {/* MAIN ROUTES */}
        <AppRoutes />

        {/* GLOBAL FEATURES */}
        {/* <ChatWidget /> */}

      </ToastProvider>
    </ErrorBoundary>
  );
}

export default App;