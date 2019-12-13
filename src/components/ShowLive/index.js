import React, { Component } from 'react'
import {  Image as ImageComponent, Item } from 'semantic-ui-react'


const paragraph = <ImageComponent src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
class ShowLive extends Component {
    async componentDidMount() {
        const musicId = this.props.match.params.id
        const resMusic = await fetch(`https://api.songkick.com/api/3.0/metro_areas/{90015}/calendar.json?apikey={your_api_key=${process.env.REACT_APP_TMDB_API_KEY}&query=`)
       
        const musicJson = await resMusic.json()
        console.log(musicJson)
    }
    render() {
        return (
            <div>
               <Item.Group link>
    <Item>
      <Item.Image size='tiny' src='https://react.semantic-ui.com/images/avatar/large/stevie.jpg' />

      <Item.Content>
        <Item.Header>Stevie Feliciano</Item.Header>
        <Item.Description>{}</Item.Description>
      </Item.Content>
    </Item>

    <Item>
      <Item.Image size='tiny' src='https://react.semantic-ui.com/images/avatar/large/veronika.jpg' />

      <Item.Content>
        <Item.Header>Veronika Ossi</Item.Header>
        <Item.Description>{}</Item.Description>
      </Item.Content>
    </Item>

    <Item>
      <Item.Image size='tiny' src='https://react.semantic-ui.com/images/avatar/large/jenny.jpg' />

      <Item.Content>
        <Item.Header>Jenny Hess</Item.Header>
        <Item.Description>{}</Item.Description>
      </Item.Content>
    </Item>
  </Item.Group>
)  Live Show
            </div>
        )
    }
}

export default ShowLive