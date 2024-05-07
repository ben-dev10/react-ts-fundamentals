import { useState } from "react";

function ErrorBoundary({ children }: { children: React.ReactNode }) {
  const [hasError, setHasError] = useState(false);

  function handleError(error: Error, errorInfo: React.ErrorInfo) {
    // You can also log the error to an error reporting service
    console.error("Error caught by error boundary:", error, errorInfo);
    setHasError(true);
  }

  if (hasError) {
    // You can render a fallback UI
    return <h1>Something went wrong.</h1>;
  }

  return <div onError={handleError}>{children}</div>;
}

export default ErrorBoundary;
