import React from "react"

class App extends React.Component {

    render() {
        return (
            <>
                <Header />
                <MainContent />
                <Footer />
            </>
        )

    }

}

class Header extends React.Component {
    render() {
        return (
            <>
                <header>This is my header</header>
            </>
        )
    }
}

class MainContent extends React.Component {
    render() {
        return (
            <>
                <p>This is the main content</p>
            </>
        )
    }
}

class Footer extends React.Component {
    render() {
        return (
            <>
                <footer>This is the footer</footer>
            </>
        )
    }
}

export default App