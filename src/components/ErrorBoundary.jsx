import React from 'react'
import Error from './pages/error'

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidMount() {
    window.addEventListener('unhandledrejection', this.catchError);
    window.addEventListener('error', this.catchError);
  }

  componentDidCatch() {
    this.catchError()
  }
  
  componentWillUnmount() {
    window.removeEventListener('unhandledrejection', this.catchPromiseRejection);
    window.removeEventListener('error', this.catchError);
  }
  
  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }
  
  catchError() {
    this.setState({ hasError: true })
  }

  render() {
    if (this.state.hasError) {
      return <Error />
    }

    return this.props.children; 
  }
}