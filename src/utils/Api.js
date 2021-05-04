export default class Api {//я переименовал файл в ветке, но на гите почему-то он остался с большой буквы
  constructor(options) {
    this._options = options;
    console.log(this._options);
  }

  getInitialCards() {
    return fetch(`${this._options.baseUrl}/cards`, {
      headers: {
        authorization: `${this._options.headers.authorization}`,
        'Content-Type': 'application/json'
      }
    })
    .then(this._getResponseData)
  }

  getProfileInfo() {
    return fetch(`${this._options.baseUrl}/users/me`, {
      headers: {
        authorization: `${this._options.headers.authorization}`,
      }
    })
    .then (this._getResponseData)
  }

  getCardInfo() {
    return fetch(`${this._options.baseUrl}/cards`, {
      headers: {
        authorization: `${this._options.headers.authorization}`,
      }
    })
    .then (this._getResponseData)
  }

  sendProfile(body) {
    return fetch(`${this._options.baseUrl}/users/me`, {
      method: 'PATCH',
      headers: {
        authorization: `${this._options.headers.authorization}`,
        'Content-Type': 'application/json'
      }, body})
      .then (this._getResponseData)
  }

  sendCard(body) {
    return fetch(`${this._options.baseUrl}/cards`, {
      method: 'POST',
      headers: {
        authorization: `${this._options.headers.authorization}`,
        'Content-Type': 'application/json'
          }, body})
    .then (this._getResponseData)
  }

  deleteCard(cardId){
    return fetch(`${this._options.baseUrl}/cards/${cardId}`, {
      method: 'DELETE',
      headers: {
        authorization: `${this._options.headers.authorization}`,
        'Content-Type': 'application/json'
      }})
    .then (this._getResponseData)
  }

  putLikes(cardId){
    return fetch(`${this._options.baseUrl}/cards/likes/${cardId}`, {
      method: 'PUT',
      headers: {
        authorization: `${this._options.headers.authorization}`,
        'Content-Type': 'application/json'
      }})
    .then (this._getResponseData)
  }

  deleteLikes(cardId){
    return fetch(`${this._options.baseUrl}/cards/likes/${cardId}`, {
      method: 'DELETE',
      headers: {
        authorization: `${this._options.headers.authorization}`,
        'Content-Type': 'application/json'
      }})
    .then (this._getResponseData)
  }

  changeAvatar(body) {
    return fetch(`${this._options.baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: {
        authorization: `${this._options.headers.authorization}`,
        'Content-Type': 'application/json'
      }, body})
    .then (this._getResponseData)
  }

  _getResponseData(res) {
    if (!res.ok) {
        return Promise.reject(`Ошибка: ${res.status}`); 
    }
    return res.json();
  }

  getInitialData() {
    return Promise.all([this.getProfileInfo(), this.getInitialCards()]);
  }
}

export const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-21',
  headers: {
    authorization: 'a8225bf7-b253-4907-b1a0-ba222b85105e',
    'Content-Type': 'application/json'
  }
});