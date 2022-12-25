import { Component, useState } from "react";
import './App.css';
import Profile from './Profile';


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      fullName: "React est l’un des frameworks JavaScript frontaux les plus puissants et les plus populaires utilisés aujourd’hui. Être en mesure de créer rapidement des applications robustes basées sur un navigateur nous permet d’offrir plus de valeur à nos utilisateurs finaux. À l’aide de JavaScript, ce cours vous guide dans la création de quelques applications React et fournit une compréhension des concepts au cœur de React.",
      bio: "test",
      profession: "developer",
      show: true,
      action: this.toggle,
      day: new Date()
    }
  }

  toggle = () => {
    this.setState({ show: !(this.state.show) })
  }

  render() {
    return (
      <div className='App-header'>
        <Profile
          fullName={this.state.fullName}
          show={this.state.show}
          bio={this.state.bio}
          profession={this.state.profession}
          action={this.state.action}
          day={this.state.day} />
      </div>
    )
  }
}
