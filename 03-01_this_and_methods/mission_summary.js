function sendCustomMessage(user) {
  console.log(this.prefix + user + 'へ特別メッセージ');
}

const notifier = {
  prefix:'From ',
  users:['jomo','オペ子','AI'],

  sendAll:function () {
    this.users.forEach( user => console.log(this.prefix + user));
  },
  
  customSend: function (user) {
    const isUserAliveable = this.users.some( u => u === user);
    if (isUserAliveable) {
      console.log(`Hi ${user} !`);
    } else {
      console.log(`${user} ?? Who are you ?`);
    }
  }
};

notifier.sendAll();
notifier.customSend('jom');

//外部にわたす
const send = notifier.customSend.bind(notifier);
send('オペ子');

//即時実行
sendCustomMessage.call(notifier,'immediate');