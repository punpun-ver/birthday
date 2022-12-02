// 霸都丶傲天 2019年10月10日 https://github.com/AJLoveChina/birthday
var config = {
    // 句子的长度可以任意， 你可以写十句话， 二十句话都可以
    // 每句话尽量不要超过15个字,不然展示效果可能不太好
    texts: [
        "Chúc mừng sinh nhật!",      //这里,每句话结尾的最后一个逗号必须是英文的哦!! 很重要哦!!
        "Chúc những điều tốt đẹp nhất sẽ đến với bạn",  // 同上...
        "Hôm nay hãy bỏ qua hết những nỗi buồn",
        "bỏ qua cả những nỗi lo âu",
        "Hãy vui vẻ trong khoảnh khắc này",
        "Vì không phải ngày nào ",
        "cũng là ngày 5/12 này",
        "Ngày mà bạn được sinh ra.",
        "Happy birthday!",
        "Gửi đến: ",
        "Thùy Dương - 5/12/2003",
    ],
    /**
     * imgs 可以不填, 但是如果要填写的话必须遵循下面的格式
     * "对应上面的文字, 要完全一样" : "图片地址, 可以把图片放在imgs文件夹中"
     * 例如
     * "心爱的小可爱": "./imgs/xiaokeai.jpg"
     *
     * 如果不要图片的话, 直接在每行开头写两个斜杠注释即可, 例如下面的 "今天是你的生日" 的图片就不会展示了:)
     * Tip: 图片最好用正方形or接近正方形, 看起来效果更好
     */
    imgs: {
        "心爱的小可爱": "./imgs/xiaokeai.png",
        // "今天是你的生日": "./imgs/birthday.jpg",
    },
    // 按钮文字描述, 以下是默认的按钮文字，英文的，您可以改成你喜欢的文字
    desc: {
        turn_on: "Nhấn",
        play: "Nghe nhạc nè!",
        bannar_coming: "Hôm nay...",
        balloons_flying: "là một ngày quan trọng",
        cake_fadein: "Đó là ngày sinh ra....",
        light_candle: "của một người...",
        wish_message: "quan trọng với mình",
        story: "Vậy nên mình có điều muốn nói với người đó:",
    }
};
