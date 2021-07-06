import {useEffect} from "react";

export default function Kakao(){
useEffect(()=>{
    const script = document.createElement('script');
    script.async = true;
    try{
            window.Kakao.init('580d16e31b9329a3a0b977f32adbc7d0');
    } catch(e){}
    window.Kakao.Channel.createChatButton({
        container:'#kakao-talk-channel-chat-button',
        channelPublicId : '_QxbbPs',
        title : 'consult',
        size: 'small',
        color : 'yellow',
        shape : 'pc',
        supportMultipleDensities : true,
    });
    document.body.appendChild(script);
    document.body.removeChild(script);
//     window.Kakao.init('580d16e31b9329a3a0b977f32adbc7d0');
//     window.Kakao.Channel.createChatButton({
//         container:'#kakao-talk-channel-chat-button',
//         channelPublicId : '_QxbbPs',
//         title : 'consult',
//         size: 'small',
//         color : 'yellow',
//         shape : 'pc',
//         supportMultipleDensities : true,
//     })
    },[]);
    return (
        <div id="kakao-talk-channel-chat-button"></div>
    );
}