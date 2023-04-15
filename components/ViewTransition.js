"use client";

import { resolve } from "path";
import { Component, StrictMode } from "react";

export default class ViewTransition extends Component {
    shouldComponentUpdate() {
        if (!document.startViewTransition) return true // skip when not supported

        document.startViewTransition(() => this.#updateDOM())
        return false // don't update the component, we'll do this manualy
    }


    #updateDOM() {
        this.forceUpdate()
        // set up promise that will resolve when the component renders
        return new Promise(resolve => { this.#rendered = resolve })
    }

    render() {
        return <StrictMode>{this.props.children}</StrictMode>
    }

    #rendered = () => { }

    componentDidUpdate() {
        // resolve the 'updatgeDom' promise to notify the View Transition API
        // that the DOM has been updated
        this.#rendered();
    }
}
