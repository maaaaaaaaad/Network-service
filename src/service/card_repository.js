import firebaseApp from "./firebase";

class CardRepository {
  readCard(userId, updateUserCard) {
    const userDataRef = firebaseApp.database().ref(`${userId}/cards`);
    userDataRef.on("value", (snapshot) => {
      const data = snapshot.val();
      data && updateUserCard(data);
    });
    return () => userDataRef.off();
  }

  saveCard(userId, card) {
    firebaseApp //
      .database()
      .ref(`${userId}/cards/${card.id}`)
      .set(card);
  }

  removeCard(userId, card) {
    firebaseApp //
      .database()
      .ref(`${userId}/cards/${card.id}`)
      .remove();
  }
}

export default CardRepository;
