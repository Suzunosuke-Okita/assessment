    let array = ['初詣に行った', 'お餅を食べた', '雪だるまを作った', '雪合戦をした',"こたつに入った","外出した","カルタで遊んだ","N中高生と話した",
                "書き初めを書いた","コマで遊んだ","誰かに新年の挨拶をした","お年玉を貰った","凧揚げをした","お雑煮を食べた","Slackを見た",
                "年賀状を出したor受け取った","おみくじを引いた","行く年来る年（テレビ番組）を見た","紅白を見た","福笑いをした",
                "お正月の食べ物といえば？","お正月の遊びといえば？","お正月の一番の楽しみは？"];

function shuffle(array) {
	// 空のオブジェクトを作成する
	let obj = {};

	// 受け取った配列を繰り返す
	for (let i = 0; i < array.length; i++) {

		// ランダムな数値を生成する ※配列の数より少ないと永久ループする
		let rand = Math.floor(Math.random() * 10000000);

		// 同じキー名がないか判別する
		if (!obj[rand]) {
			// 同じキー名がない場合にobjに追加する
			obj[rand] = array[i];
		} else {
			// 同じキー名ある場合、やり直す
			i--;
		}

	}

	// 作成したオブジェクトの値から配列を作成して返す
	return Object.values(obj);
}

array = shuffle(array);




function ranAry() {
        document.getElementById("dat").value = array[0];
        array.shift();
}

    scene.setInterval(function() {
}, 1000);

function previewFile(hoge){
    var fileData = new FileReader();
    fileData.onload = (function() {
      //id属性が付与されているimgタグのsrc属性に、fileReaderで取得した値の結果を入力することで
      //プレビュー表示している
      document.getElementById('preview').src = fileData.result;
    });
    fileData.readAsDataURL(hoge.files[0]);
  }