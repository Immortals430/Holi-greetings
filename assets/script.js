const prevElem = document.getElementById('prev');
const nextElem = document.getElementById('next')
const text = document.getElementById('text')
const sayari = [
    
'आज मुबारक, कल मुबारक<br>होली का हर पल मुबारक<br>रंग बिरंगी होली में<br>हमारा भी एक रंग मुबारक।<br>हैप्पी होली 2024',

'मथुरा की खुशबू,<br>गोकुल का हार,<br>वृन्दावन की सुगंध,<br>बरसाने की फुहार,<br>राधा की उम्मीद,<br>कान्हा का प्यार,<br>मुबारक हो आपको होली का त्यौहार,',

'प्यार के रंग से भरो पिचकारी<br>स्नेह के रंग से रंग दो दुनिया सारी<br>ये रंग ना जाने जात ना कोई बोली<br>मुबारक हो आपको होली<br>',

'कदम-कदम पर खुशियां रहें<br>गम से कभी ना हो सामना<br>जिंदगी में हर पल खुशियां नसीब हों<br>मेरी तरफ से होली की शुभकामना।',

'होली का गुलाल हो<br>रंगो की बहार हो<br>गुजिया की मिठास हो<br>सबके दिलों में प्यार हो<br>ऐसा होली का त्यौहार हो<br>होली मुबारक हो।',

'ऐसे मनाना होली का त्यौहार,<br>पिचकारी से बरसे सिर्फ प्यार,<br>यही मौसम है अपनों से गले मिलने का,<br>तो गुलाल लेकर हो जाओ तैयार<br>होली की हार्दिक शुभकामनाएं.!',

'होली है भई होली है,<br>बुरा न मानो होली है!<br>आओ मिल के खुशियां मनाएं,<br>अपनों को हम रंग लगाएं!<br>',

'होली का रंग<br>अपनों का संग<br>डालों ऐसा रंग<br>मच जाए हुड़दंग<br>आपको होली मुबारक हो इस मैसेज के संग<br>',

'राधा का रंग और कान्हा की पिचकारी,<br>प्यार के रंग से रंग दो दुनिया सारी,<br>ये रंग न जाने कोई जात न कोई बोली,<br>मुबारक हो आपको रंग भरी होली !!<br>Happy Holi 2024<br>',

'वो गुलाल की ठंडक,<br>वो शाम की रोनक,<br>वो लोगों का गाना,<br>वो गलियों का चमकना,<br>वो दिन में मस्ती,<br>वो रंगों की धूम,<br>होली आ गई है होली है&nbsp;<br>Happy Holi 2024<br>'
]
let index = 0



// toggle next or prev shayari
prevElem.addEventListener('click', () => {
    index--
    if(index <= 0){
        index = 9
    }
    document.getElementById('text').innerHTML = sayari[index];
     console.log(index)

})

nextElem.addEventListener('click', () => {
    index++
    if(index === 9){
        index = 0
    }
    document.getElementById('text').innerHTML = sayari[index];

})

