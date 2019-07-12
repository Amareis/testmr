import React from "react"
import {disposeOnUnmount, observer} from "mobx-react"
import { hot } from 'react-hot-loader/root'

@hot
@observer
export default class App extends React.Component {
    componentDidMount() {
        disposeOnUnmount(this, () => console.log('Unmounted!'))
    }

    render() {
        return process.env.NODE_ENV
    }
}
