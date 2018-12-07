  //診断点数
  var TypeANum = 0;
  var TypeBNum = 0;
  var TypeCNum = 0;

  function main() {
    g.game.pushScene(TitleScene());

  }

  function TitleScene() {
    var scene = new g.Scene({
      game: g.game,
      assetIds: [
        "text_image1",
        "image_character1",
        "image_character2"
      ]});

    scene.loaded.add(function () {

      // 基本背景とフォント設定
      var bg = new g.FilledRect({
        scene: scene,
        cssColor: "white",
        x: 0,
        y: 0,
        width: g.game.width,
        height: g.game.height
      });
      scene.append(bg);

      var font = new g.DynamicFont({
        game: g.game,
        fontFamily: g.FontFamily.SansSerif,
        size: 15
      });

      var text_image1 = new g.Sprite({scene: scene, src: scene.assets["text_image1"]});
      scene.append(text_image1);

      var dot_character1 = new g.Sprite({scene: scene, src: scene.assets["image_character1"],
                                        x: 180,
                                        y: 200,
                                        touchable: true
                                        });
      var dot_character2 = new g.Sprite({scene: scene, src: scene.assets["image_character2"],
                                        x: 180,
                                        y: 200,
                                        touchable: true
                                        });

      var start_text = new g.Label({
          scene: scene,
          font: font,
          text: "診断する",
          fontSize: 30,
          textColor: "black",
          x: 100 ,
          y: 140
        });
      scene.append(start_text);

      dot_character1.pointDown.handle(function () {
        scene.append(dot_character2)
        scene.remove(dot_character1)
        dot_character1.modified();
      });
      dot_character2.pointDown.handle(function () {
        scene.append(dot_character1)
        scene.remove(dot_character2)
        dot_character2.modified();
      });

      scene.append(dot_character1);

      // 質問画面に画面遷移
      start_text.pointDown.handle(function () {
        g.game.replacescene(Question1Scene());
      });

    });
    return TitleScene;
  }

  function Question1Scene() {
    var scene = new g.Scene({game: g.game});
    scene.loaded.add(function () {
      // 基本背景とフォント設定
    var bg = new g.FilledRect({
      scene: scene,
      cssColor: "white",
      x: 0,
      y: 0,
      width: g.game.width,
      height: g.game.height
    });
    scene.append(bg);

    var font = new g.DynamicFont({
      game: g.game,
      fontFamily: g.FontFamily.SansSerif,
      size: 15
    });

    var question1_text = new g.Label({
      scene: scene,
      font: font,
      text: "Q1, 家族との関係は良好だ",
      fontSize: 30,
      textColor: "black",
      x: 100,
      y: 140
    });
      scene.append(question_text);

    var question1_select1 = new g.Label({
      scene: scene,
      font: font,
      text: "あてはまる",
      fontSize: 20,
      textColor: "black",
      x: 200,
      y: 200
    });
    scene.append(question1_select1);

    question1_select1.pointDown.handle(function () {
        TypeANum += 4;
        g.game.replacescene(Question2Scene());
    });    

    var question1_select2 = new g.Label({
      scene: scene,
      font: font,
      text: "どちらかというと当てはまる",
      fontSize: 20,
      textColor: "black",
      x: 200,
      y: 220
    });
    scene.append(question1_select2);

    question1_select2.pointDown.handle(function () {
        TypeANum += 3;
        g.game.replacescene(Question2Scene());
    });     

    var question1_select3 = new g.Label({
      scene: scene,
      font: font,
      text: "どちらかというと当てはまらない",
      fontSize: 20,
      textColor: "black",
      x: 200,
      y: 240
    });
    scene.append(question1_select3);

    question1_select3.pointDown.handle(function () {
        TypeANum += 2;
        g.game.replacescene(Question2Scene());
    });    

    var question1_select4 = new g.Label({
      scene: scene,
      font: font,
      text: "当てはまらない",
      fontSize: 20,
      textColor: "black",
      x: 200,
      y: 260
    });
    scene.append(question1_select4);

    question1_select4.pointDown.handle(function () {
        TypeANum += 1;
        g.game.replacescene(Question2Scene());
    });

    });
    return Question1Scene;
  }

function Question2Scene() {
    var scene = new g.Scene({game: g.game});
    scene.loaded.add(function () {
      // 基本背景とフォント設定
    var bg = new g.FilledRect({
      scene: scene,
      cssColor: "white",
      x: 0,
      y: 0,
      width: g.game.width,
      height: g.game.height
    });
    scene.append(bg);

    var font = new g.DynamicFont({
      game: g.game,
      fontFamily: g.FontFamily.SansSerif,
      size: 15
    });

    var question_text = new g.Label({
      scene: scene,
      font: font,
      text: "Q2, その場にいない人間の愚痴や悪口を言うことが多い",
      fontSize: 30,
      textColor: "black",
      x: 100,
      y: 140
    });
      scene.append(question_text);

    var question2_select1 = new g.Label({
      scene: scene,
      font: font,
      text: "あてはまる",
      fontSize: 20,
      textColor: "black",
      x: 200,
      y: 200
    });
    scene.append(question2_select1);

    question2_select1.pointDown.handle(function () {
        TypeANum += 4;
        g.game.replacescene(Question3Scene());
    });    

    var question2_select2 = new g.Label({
      scene: scene,
      font: font,
      text: "どちらかというと当てはまる",
      fontSize: 20,
      textColor: "black",
      x: 200,
      y: 220
    });
    scene.append(question2_select2);

    question2_select2.pointDown.handle(function () {
        TypeANum += 3;
        g.game.replacescene(Question3Scene());
    });     

    var question2_select3 = new g.Label({
      scene: scene,
      font: font,
      text: "どちらかというと当てはまらない",
      fontSize: 20,
      textColor: "black",
      x: 200,
      y: 240
    });
    scene.append(question2_select3);

    question2_select3.pointDown.handle(function () {
        TypeANum += 2;
        g.game.replacescene(Question3Scene());
    });    

    var question2_select4 = new g.Label({
      scene: scene,
      font: font,
      text: "当てはまらない",
      fontSize: 20,
      textColor: "black",
      x: 200,
      y: 260
    });
    scene.append(question2_select4);

    question2_select4.pointDown.handle(function () {
        TypeANum += 1;
        g.game.replacescene(Question3Scene());
    });

    });
    return Question2Scene;
  }  

module.exports = main;