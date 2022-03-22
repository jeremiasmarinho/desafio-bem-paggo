import firebase from "firebase";
import BuyForm from "../../core/BuyForm";
import FormRepository from "../../core/FormRepository";

export default class ColectionBuy implements FormRepository {
  #conversor = {
    toFirestore(buyForm: BuyForm) {
      return {
        adesivo1: buyForm.adesivo1,
        adesivo2: buyForm.adesivo2,
        adesivo3: buyForm.adesivo3,
        quant: buyForm.quant,
        obs: buyForm.obs,
      };
    },
    fromFirestore(
      snapshot: firebase.firestore.QueryDocumentSnapshot,
      options: firebase.firestore.SnapshotOptions
    ): BuyForm {
      const data = snapshot.data(options);
      return new BuyForm(
        data?.adesivo1,
        data?.adesivo2,
        data?.adesivo3,
        data.quant,
        data.obs,
        snapshot.id
      );
    },
  };

  async salvar(buyForm: BuyForm): Promise<BuyForm> {
    if (buyForm?.id) {
      await this.colection().doc(buyForm.id).set(buyForm);
      return buyForm;
    } else {
      const docRef = await this.colection().add(buyForm);
      const doc = await docRef.get();
      return doc.data();
    }
  }

  async excluir(buyForm: BuyForm): Promise<void> {
    return this.colection().doc(buyForm.id).delete();
  }

  async obterTodos(): Promise<BuyForm[]> {
    const query = await this.colection().get();
    return query.docs.map((doc) => doc.data()) ?? [];
  }

  private colection() {
    return firebase
      .firestore()
      .collection("compras")
      .withConverter(this.#conversor);
  }
}
