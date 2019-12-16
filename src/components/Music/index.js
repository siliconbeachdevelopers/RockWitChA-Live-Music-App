import React, { Component, useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'
import { MUSIC } from '../../constants/routes'
import { Button, Icon, Image, Item, Label } from 'semantic-ui-react'
import './Music.css';

import rockinImage from './Images/rockin.jpg'
// import rock from './guitars.jpeg'
import 'bootstrap/dist/css/bootstrap.min.css';



class Music extends Component {
    state = {
       events: [],
       query: '',
       loading: true,
       error: '',
    }

    
  
    handleChange = e => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    getMusic = async(e) => {
        e.preventDefault()
        const location = await fetch(`https://api.songkick.com/api/3.0/search/locations.json?query=${this.state.query}&apikey=${process.env.REACT_APP_SONGKICK_API_KEY}
        `)
        const locationParsed = await location.json()
        const locationId = locationParsed.resultsPage.results.location[0].metroArea.id
        const events = await fetch(`https://api.songkick.com/api/3.0/events.json?apikey=${process.env.REACT_APP_SONGKICK_API_KEY}&location=sk:${locationId}`)
        const eventsParsed = await events.json()
        console.log(eventsParsed)
        this.setState({
            events: eventsParsed.resultsPage.results.event
        })
    }

    render() {
       return (
          <React.Fragment>
             <div className=''>
                <h1 className="headername"> Rock WitCha! </h1>
                <form onSubmit={this.getMusic}>
                   <input type="text" name="query" placeholder="choose a location" onChange={this.handleChange}></input>
                   <button type="submit">Live Music Concerts</button>
                </form>
                </div>
              <br></br>
          <Item>   
    {
          
        this.state.events.map(e =>
            
    <Item.Content className="eventcard">
      <Item.Image size='small' src={e.href} />
        <Item.Header className='title' as='a'>{e.displayName}</Item.Header>
        <Item.Meta>
        {/* <Item.Image className="logo" size='tiny' src={}></Item.Image> */}
        <span className='city'>{e.location.city}</span>
        </Item.Meta>
        <Item.Extra>
        <Label>{e.venue.displayNamne}</Label>
        {/* <Label Icon='globe' className='date' content={e.start.date}/><br></br> */}
        {/* <a href={e.uri} button type="button" class="seeshow">See Show</a> */}
        <a href={e.uri}><Button class="greensmallbtn" color='red
        '>See Show</Button></a>
        {/* <a href="https://local-la.herokuapp.com/"><Item.Image className='localnew' size='tiny' src='images/localpic.png' /></a> */}
     </Item.Extra><br></br>
   </Item.Content>
   
 
   )
   
          }

      
  </Item>
  
  


</React.Fragment> 
        )
  }
}


export default Music