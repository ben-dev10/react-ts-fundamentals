import React, { Component, ErrorInfo } from "react";

type ErrorBoundaryState = {
  hasError: boolean;
};

type ErrorBoundaryProps = {
  children: React.ReactNode;
};

export function FallbackComponent({ error }: { error: Error }) {
  return (
    <div role="alert" className="w-full h-screen grid place-items-center">
      <div className="p-3 text-[12px] rounded-sm bg-neutral-500/50 border-t-[3px] border-red-500">
        <p className="mb-3">Error: Something went wrong</p>
        <pre className="bg-gray-300 text-gray-950 p-3 ">{error.message}</pre>
      </div>
    </div>
  );
}

/*
 *  Basic, pre React-18 implementation of ErrorBoundary component.
 * For the best implementation use the "react-error-boundary" package
 */
class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  static getDerivedStateFromError(_error: Error): ErrorBoundaryState {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // You can also log the error to an error reporting service
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div className="">
          <h1>Something went wrong.</h1>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
