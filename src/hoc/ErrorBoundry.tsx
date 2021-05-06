import { Component, ErrorInfo } from "react";

export default class ErrorBoundry extends Component {
  state = {
    hasError: false,
  };

  static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {}

  render() {
    if (this.state.hasError) {
      return (
        <div className="alert alert-danger">
          Sorry, we have a problem :(. Try later
        </div>
      );
    }
    return this.props.children;
  }
}
