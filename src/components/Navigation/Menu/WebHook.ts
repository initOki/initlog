const Discord = require('discord.js');
// import { Client, Message } from 'discord.js';
const client = new Discord.Client();
const token = 'NzcxNTYxMzc0NDU0NTEzNzA0.GYC23Z.28ABmHoc1C8TP02L8qs-aF1l2_HT3Z81mOO1oI';

const WebHook = () => {
  const hook = () => {
    client.on('message', (message: any) => {
      if (message.content === '!sendData') {
        // 데이터를 보내는 로직 구현
        const data = 'This is the data I want to send';
        const channelId = '1108405883890847828';

        const channel = client.channels.cache.get(channelId);
        if (channel) {
          console.log(channel);
          channel.send(data);
        } else {
          console.log(`Channel ${channelId} not found.`);
        }
      }
    });

    client.login(token);
  };
  return { hook };
};

export default WebHook;
