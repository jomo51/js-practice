//書籍情報をもったオブジェクト
const library = {
  name:'city library',
  books: [
    {title:'JavaScript入門',author: 'Yamada' ,available:true},
    {title:'フロントエンドの未来',author:'Tanaka' ,available:false},
    {title:'React実践',author: 'Suzuki' ,available:true}
  ]
};

//図書館名の表示
console.log(`Library: ${library.name}`);

//すべての書籍タイトルの表示
library.books.forEach(book => console.log(` - ${book.title}`));

//利用可能な本だけを取り出して配列にする
const avaliable_books = library.books.filter(book => book.available);
console.log("Available Books:" + JSON.stringify(avaliable_books));

//全書籍の著者名を1つの配列にする。
const authors = library.books.map(book => book.author);
console.log("Authors:"+authors);
