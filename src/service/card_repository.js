import { firebaseDB } from "./firebase";

class CardRepository {
  readCard(userId, updateUserCard) {
    const userDataRef = firebaseDB.ref(`${userId}/cards`);
    userDataRef.on("value", (snapshot) => {
      const data = snapshot.val();
      data && updateUserCard(data);
    });
    return () => userDataRef.off();
  }

  saveCard(userId, card) {
    firebaseDB.ref(`${userId}/cards/${card.id}`).set(card);
  }

  removeCard(userId, card) {
    firebaseDB.ref(`${userId}/cards/${card.id}`).remove();
  }
}

export default CardRepository;
