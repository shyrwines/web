import React, { Component } from 'react'
import ReactGA from 'react-ga'

ReactGA.initialize('UA-71580053-1')

const getPage = location => location.pathname + location.hash

// Taken from https://github.com/react-ga/react-ga/wiki/React-Router-v4-withTracker
const withTracker = WrappedComponent => {

  const HOC = class extends Component {
    componentDidMount() {
      ReactGA.pageview(getPage(this.props.location))
    }

    componentWillReceiveProps(nextProps) {
      const currentPage = getPage(this.props.location)
      const nextPage = getPage(nextProps.location)

      if (currentPage !== nextPage) {
        ReactGA.pageview(nextPage)
      }
    }

    render() {
      return <WrappedComponent {...this.props} />
    }
  }

  return HOC
}

export default withTracker
