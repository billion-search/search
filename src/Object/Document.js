import axios from "axios";

export default class Document {
  constructor(id, title, auteur, text, link) {
    this.id = id;
    this.title = title;
    this.text = text;
    this.auteur = auteur;
    this.link = link;
  }

  getId() {
    return this.id;
  }

  getTitle(per = 1) {
    let len = ~~(this.title.length * per);
    if (len < 55) {
      len = 55;
    }
    return `${this.title.substring(0, len)}${
      this.title.length >= 55 && per !== 1 ? "...." : ""
    }`;
  }

  getText(per = 1) {
    let len = ~~(this.text.length * per);
    if (len < 200) {
      len = 200;
    }
    return `${this.text.substring(0, 300)}${
      this.text.length >= 200 && per !== 1 ? "...." : ""
    }`;
  }
  getAuteur() {
    return this.auteur;
  }
  getLink() {
    return this.link;
  }
  static searchDoc(opt, query, callback, callbackcatch) {
    // console.log(opt, query);
    const json = JSON.stringify({
      opt,
      query,
    });
    axios
      .post(`http://127.0.0.1:5000/search`, json, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        // console.log(res);
        let docs = Document.parserDoc(res.data.ranking);
        // console.log(docs);
        if (res.data.state === "ok") callback(docs);
        else callbackcatch(docs);
      })
      .catch(() => {
        callbackcatch([new Document(-1, "", "", "", [])]);
      });
  }

  static parserDoc(listDoc) {
    let res = [];
    listDoc.forEach((doc) => {
      res.push(
        new Document(
          doc.id,
          doc.metadata.titre,
          doc.metadata.auteur,
          doc.metadata.texte,
          []
        )
      );
    });
    return res;
  }
}
