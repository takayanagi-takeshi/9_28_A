// 9/24の教材から引用

let outPutList = document.getElementById('outPutList');

fetch('https://jsonplaceholder.typicode.com/photos/')
  .then(response => response.json())
  .then((json) => {
    // console.log(json);
    for (let i = 0; i < 25; i++) {//ファイル数の量だけ表示したい場合は　<json.length>
      // const element = json[i];
      // let ttl = json[i]['thumbnailUrl'];
      // let li = `<li><img src="${ttl}" alt=""></li>`;
      // outPutList.insertAdjacentHTML('beforeend',li);
      //----------------リロードする度に表示が変わる
      // let i2 = Math.floor(Math.random() * (i++));//リロードする度に表示が変わる
      // let element = json[i2];
      // ---------------------------------------------------------------
      let element = json[i];
      console.log(element); //elementの確認
      let imgThumbUrl = element.thumbnailUrl;
      let caption = element.title;
      let imgThumb =`<li><img src="${imgThumbUrl}" alt="${caption}"><p>${caption}</p></li>`
      outPutList.insertAdjacentHTML('beforeend', imgThumb);
    }
  });

