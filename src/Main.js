import React, { Component } from 'react'
import Story from './Story'

class Main extends Component {

    constructor(props) {
        super(props)

        this.state = {
            stories: [{
                title: "Contratar Seguro",
                description: "Como usuário, gostaria de contratar um seguro.",
                points: "10"

            }, {
                title: "Renovar Seguro",
                description: "Como segurado, gostaria de renovar um seguro.",
                points: "20"
            }, {
                title: "Cancelar Seguro",
                description: "Como segurado, gostaria de cancelar um seguro.",
                points: "60"
            }]
        }
    }

    listStories() {
        return this.state.stories
            .map(story => <Story title={story.title} description={story.description} points={story.points} />)
    }

    render() {
        let stories = this.listStories()

        return (
            <div className="section no-pad-bot" id="index-banner">
                <div className="container">
                    <h1 className="header center orange-text">Estórias</h1>
                    <h3>{stories.length} estórias</h3>
                    {stories}
                </div>
            </div>
        )
    }
}

export default Main