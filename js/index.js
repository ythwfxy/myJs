// 音乐部分
const music=document.querySelector('.music')
const mus=document.querySelector('.mus')
music.onclick=function(){
    mus.classList.toggle('showMus')
}
//说说部分
const com=document.querySelector('.com')
const think=document.querySelector('.think')
const close=document.querySelector('#close')
close.onclick=function(){
    com.classList.remove('com_show')
}
think.onclick=function(){
    com.classList.add('com_show')
}
//选择器部分
const choices=document.querySelector('.choices')
const choice=document.querySelector('.choice')
const close2=document.querySelector('#close2')
close2.onclick=function(){
    choices.classList.remove('choices_show')
}
choice.onclick=function(){
    choices.classList.add('choices_show')
}
//选择器内部
// 吃饭
const eat_2=document.querySelector('.eat_2')
const choice_show=document.querySelector('.choices_eat_show')
const close3=document.querySelector('#close3')
var eatList=['重庆小面','炒米饭','一楼八大菜系','二楼八大菜系','泡面','麻汁面','卤肉饭','石锅饭','拉面','奢侈一把']
eat_2.onclick=function(){
    choice_show.classList.add('choices_eat_block')
    var eat=Math.floor(Math.random()*eatList.length);
    setTimeout(() => {
        alert(eatList[eat])
    }, 2000);
}
close3.onclick=function(){
    choice_show.classList.remove('choices_eat_block')
}
// 唱歌
const sing_2=document.querySelector('.sing_2')
const choice_sing=document.querySelector('.choices_sing_show')
const close4=document.querySelector('#close4')
const sing_show=document.querySelector('#sing')
var i=0
var singList=['爱不会绝迹','默','说好的幸福呢','一笑倾城','风度','清明雨上','蒲公英的约定','恶作剧','形容']
sing_2.onclick=function(){
    choice_sing.classList.add('choices_sing_block')
    var sing=Math.floor(Math.random()*singList.length);
    
    const time1=setInterval(()=>{
        sing_show.innerHTML=singList[i]
        i=i+1
        if(i>=singList.length){
            i=0
        }
    },200)
    setTimeout(() => {
        i=0
        clearInterval(time1)
        sing_show.innerHTML=singList[sing]
        alert(singList[sing])
    }, 2000);
}
close4.onclick=function(){
    choice_sing.classList.remove('choices_sing_block')
}
// 壁纸
const bizhi=document.querySelector('.other')
const bg=document.querySelector('#bg')
bizhi.onclick=function(){
    const toBak='https://api.ixiaowai.cn/api/api.php'
    bg.src=toBak
}