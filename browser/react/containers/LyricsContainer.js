// smart component! knows about and interacts with redux store
// subscribe and dispatch actions to our store
// uses store's state values
// integrate this component with react router and sidebar
// will pass input handling functions and state info from store to Lyrics.js component
import React, { Component } from 'react';
import store from '../../redux/store';
import Lyrics from '../components/lyrics'
import setLyrics from '../../redux/action-creators/lyrics'
import axios from 'axios'
import thunkMiddleware from 'redux-thunk'

export default class extends Component {
    constructor() {
        super();
        this.state = Object.assign({
            artistQuery: '',
            songQuery: ''
        }, store.getState());
        this.setArtist = this.setArtist.bind(this);
        this.setSong = this.setSong.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    setArtist(artistQuery) {
        this.setState({ artistQuery: artistQuery })
    }
    setSong(songQuery) {
        this.setState({ songQuery: songQuery })
    }
    handleSubmit() {
        axios.get(`/api/lyrics/${this.state.artistQuery}/${this.state.songQuery}`)
            .then(res => res.data)
            .then(data => {
                const setLyricsAction = setLyrics(data.lyric);
                store.dispatch(setLyricsAction)
            })
    }
    componentDidMount() {
        this.unsuscribe = store.subscribe(() => {
            this.setState(store.getState());
        });
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    render() {
        return (
            <Lyrics
                text={this.state.text}
                setArtist={this.setArtist}
                setSong={this.setSong}
                artistQuery={this.state.artistQuery}
                songQuery={this.state.songQuery}
                handleSubmit={this.handleSubmit}
            />
        )
    }
}

