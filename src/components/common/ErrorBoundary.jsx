import React from 'react';

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error boundary caught:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center min-h-[400px] p-8 text-center">
          <h2 className="text-3xl font-heading mb-4 text-dark">We encountered an issue.</h2>
          <p className="text-muted max-w-md mx-auto mb-8 font-body">
            {this.state.error?.message || "An unexpected application error occurred."}
          </p>
          <button 
            onClick={() => this.setState({ hasError: false })}
            className="px-6 py-3 bg-primary text-white rounded-btn hover:bg-primary-dark transition-colors"
          >
            Recover Session
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}
