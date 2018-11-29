function main() {
  const scene = new g.Scene({
    game: g.game,
    assetIds: [
      "ipa_font",
      "ipa_font_json",
      "text_image1",
      "image_character1",
      "image_character2"
    ]});

  scene.loaded.add(function () {
    // 背景の黒
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
        x: 100,
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
  });
  g.game.pushScene(scene);
}

module.exports = main;