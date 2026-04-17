import React from "react";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, errorMessage: "" };
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      errorMessage: error?.message || "Unexpected application error.",
    };
  }

  componentDidCatch(error) {
    console.error("Portfolio runtime error:", error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="runtime-fallback">
          <div className="runtime-fallback__card">
            <p>Runtime Error</p>
            <h1>Zubair Hussain</h1>
            <strong>Senior Full Stack Developer</strong>
            <span>{this.state.errorMessage}</span>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
